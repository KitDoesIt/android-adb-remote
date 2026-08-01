import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const PORT = parseInt(process.env.PORT || "8180");
const ADB_DEVICE = process.env.ADB_DEVICE || "";
const FAVORITES_FILE = "./favorites.json";
const KEYD_DEX = "/data/local/tmp/keyd.dex";

// ── helpers ──────────────────────────────────────────────────────────

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "content-type": "application/json" },
  });
}

async function adb(args: string[]): Promise<{ out: string; ok: boolean }> {
  const cmd = ["adb"];
  if (ADB_DEVICE) cmd.push("-s", ADB_DEVICE);
  cmd.push(...args);
  try {
    const proc = Bun.spawn(cmd, { stdout: "pipe", stderr: "pipe" });
    const out = await new Response(proc.stdout).text();
    const err = await new Response(proc.stderr).text();
    const exitCode = await proc.exited;
    return { out: out.trim() || err.trim(), ok: exitCode === 0 };
  } catch {
    return { out: "", ok: false };
  }
}

const KEY_MAP: Record<string, number> = {
  up: 19, down: 20, left: 21, right: 22, ok: 23, enter: 66,
  back: 4, home: 3, menu: 82, settings: 176, power: 26,
  volup: 24, voldown: 25, mute: 164, play: 126, pause: 127,
  stop: 86, next: 87, prev: 88, rewind: 89, fastforward: 90,
};

// ── favorites persistence ────────────────────────────────────────────

interface FavEntry { pkg: string; label: string; }

function loadFavorites(): FavEntry[] {
  try {
    if (!existsSync(FAVORITES_FILE)) return [];
    return JSON.parse(readFileSync(FAVORITES_FILE, "utf-8"));
  } catch { return []; }
}
function saveFavorites(favs: FavEntry[]) {
  writeFileSync(FAVORITES_FILE, JSON.stringify(favs, null, 2));
}

// ── static file server ───────────────────────────────────────────────

const STATIC_DIR = "./public";
const MIME: Record<string, string> = {
  ".html": "text/html", ".css": "text/css", ".js": "application/javascript",
  ".json": "application/json", ".png": "image/png", ".svg": "image/svg+xml",
  ".ico": "image/x-icon", ".webmanifest": "application/manifest+json",
};

function serveStatic(path: string): Response | null {
  let fp = path === "/" ? "/index.html" : path;
  if (fp.includes("..")) return null;
  const full = join(STATIC_DIR, fp);
  if (!existsSync(full)) return null;
  const f = Bun.file(full);
  const ext = fp.slice(fp.lastIndexOf("."));
  // No caching: ensures sw.js/bundle.js updates are picked up immediately
  return new Response(f, {
    headers: {
      "content-type": MIME[ext] || "application/octet-stream",
      "cache-control": "no-store",
    },
  });
}

// ── ADB connection management ────────────────────────────────────────

type AdbState = "connected" | "auth_required" | "disconnected" | "no_device";
let currentState: AdbState = "no_device";
let lastConnectDetail = "";

async function getDeviceState(): Promise<{ state: AdbState; detail: string }> {
  if (!ADB_DEVICE) return { state: "no_device", detail: "ADB_DEVICE not set" };
  const res = await adb(["devices"]);
  if (!res.ok) return { state: "disconnected", detail: res.out };
  const lines = res.out.split("\n").filter(Boolean);
  for (const line of lines) {
    if (line.includes(ADB_DEVICE)) {
      const parts = line.split(/\s+/);
      const status = parts[1] || "";
      if (status === "device") return { state: "connected", detail: "Authorized" };
      if (status === "unauthorized") return { state: "auth_required", detail: "Waiting for TV approval — check your TV screen" };
      if (status === "offline") return { state: "disconnected", detail: "Device offline" };
      return { state: "disconnected", detail: `Unknown status: ${status}` };
    }
  }
  return { state: "disconnected", detail: "Not in device list" };
}

async function adbConnect(): Promise<boolean> {
  if (!ADB_DEVICE) { currentState = "no_device"; return false; }
  let info = await getDeviceState();
  if (info.state === "connected") {
    currentState = "connected"; lastConnectDetail = info.detail;
    return true;
  }
  if (info.state === "auth_required") {
    currentState = "auth_required"; lastConnectDetail = info.detail;
    return false;
  }
  await adb(["connect", ADB_DEVICE]);
  info = await getDeviceState();
  currentState = info.state;
  lastConnectDetail = info.detail;
  return currentState === "connected";
}

let retryTimer: ReturnType<typeof setInterval> | null = null;
function startRetryLoop() {
  if (retryTimer) clearInterval(retryTimer);
  const schedule = () => {
    if (retryTimer) clearInterval(retryTimer);
    const interval = currentState === "auth_required" ? 10_000 : 30_000;
    retryTimer = setInterval(async () => {
      if (currentState !== "connected" && currentState !== "no_device") {
        await adbConnect();
        broadcastStatus();
        schedule();
      }
    }, interval);
  };
  schedule();
}

// ── WebSocket broadcasting ───────────────────────────────────────────

const clients = new Set<any>();

function broadcast(msg: Record<string, any>) {
  const data = JSON.stringify(msg);
  for (const ws of clients) {
    try { ws.send(data); } catch {}
  }
}

function statusMsg() {
  return {
    type: "status",
    adbState: currentState,
    adbDevice: ADB_DEVICE || "(not set)",
    adbDetail: lastConnectDetail,
  };
}

function broadcastStatus() { broadcast(statusMsg()); }

// ── Global daemon session (one CLI instance shared by ALL clients) ───
// UiAutomation and the clipboard are system-wide singletons, so multiple
// daemons would fight over them (clipboard races, watcher exclusivity).
// One daemon serializes all commands — same as two physical remotes.

interface DaemonSession {
  proc: any;
  buffer: string;
  pending: string[];
  ready: boolean;
  closed: boolean;
}

let globalSession: DaemonSession | null = null;

async function syncKeyDaemonDex(): Promise<boolean> {
  if (!ADB_DEVICE) return false;

  // Local version: md5 of the bundled dex
  let localHash = "";
  try {
    const hasher = new Bun.CryptoHasher("md5");
    hasher.update(await Bun.file("./keyd.dex").arrayBuffer());
    localHash = hasher.digest("hex");
  } catch { return false; }

  // Remote version: md5 on device (empty/missing if not deployed)
  const remote = await adb(["shell", "-T", "md5sum /data/local/tmp/keyd.dex 2>/dev/null | awk '{print $1}'"]);
  const remoteHash = remote.out.trim().split(/\s+/)[0] || "";

  if (remoteHash === localHash) return true; // already in sync

  // Version mismatch or missing → kill stale daemon (running old dex), then push
  console.log("   📤 Updating keyd.dex on device (" + (remoteHash ? "version changed" : "not present") + ")…");
  await adb(["shell", "-T",
    "for p in $(pgrep -f KeyDaemon); do " +
    "cmd=$(tr '\\0' ' ' </proc/$p/cmdline 2>/dev/null); " +
    "case \"$cmd\" in app_process*) kill $p 2>/dev/null;; esac; " +
    "done"]);
  await new Promise(r => setTimeout(r, 500));

  const push = await adb(["push", "./keyd.dex", KEYD_DEX]);
  if (push.ok) console.log("   ✓ keyd.dex deployed");
  return push.ok;
}

// Spawn "adb shell app_process ... KeyDaemon" — a readline CLI on stdin/stdout
function spawnDaemon(): DaemonSession | null {
  if (!ADB_DEVICE) return null;
  const session: DaemonSession = {
    proc: null, buffer: "", pending: [], ready: false, closed: false,
  };

  try {
    session.proc = Bun.spawn(
      ["adb", "-s", ADB_DEVICE, "shell", `app_process -Djava.class.path=${KEYD_DEX} /data/local/tmp KeyDaemon`],
      { stdin: "pipe", stdout: "pipe", stderr: "pipe" }
    );
  } catch (e) {
    console.log("   ⚠ Daemon spawn failed:", e);
    return null;
  }
  console.log("   ⚡ Daemon session started");

  // stdout → parse lines → broadcast / flush pending queue
  (async () => {
    const reader = session.proc.stdout.getReader();
    const decoder = new TextDecoder();
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        session.buffer += decoder.decode(value, { stream: true });
        let idx;
        while ((idx = session.buffer.indexOf("\n")) >= 0) {
          const line = session.buffer.slice(0, idx).trim();
          session.buffer = session.buffer.slice(idx + 1);
          handleDaemonLine(session, line);
        }
      }
    } catch {}
    session.closed = true;
    if (globalSession === session) globalSession = null;
    console.log("   ⚠ Daemon exited — will respawn on next command");
  })();

  // Process exit cleanup
  (async () => {
    try { await session.proc.exited; } catch {}
    if (!session.closed) {
      session.closed = true;
      if (globalSession === session) globalSession = null;
      console.log("   ⚠ Daemon exited — will respawn on next command");
    }
  })();

  // Drain stderr
  (async () => { try { for await (const _ of session.proc.stderr) {} } catch {} })();

  return session;
}

// Ensure a live global daemon exists; returns null while (re)starting
function ensureGlobalDaemon(): DaemonSession | null {
  if (globalSession && !globalSession.closed && globalSession.proc) {
    return globalSession;
  }
  globalSession = spawnDaemon();
  return globalSession;
}

function handleDaemonLine(session: DaemonSession, line: string) {
  if (line === "READY") {
    session.ready = true;
    // Flush commands that arrived before daemon was ready
    const pending = session.pending;
    session.pending = [];
    for (const cmd of pending) writeDaemon(session, cmd);
    // Initial input-state sync
    writeDaemon(session, "E");
    broadcast({ type: "daemon", ready: true });
    return;
  }
  if (line.startsWith("OK ")) {
    broadcast({ ok: true, cmd: line.slice(3) });
    return;
  }
  if (line.startsWith("ERR ")) {
    broadcast({ ok: false, error: line.slice(4) });
    return;
  }
  if (line.startsWith("E ") || line.startsWith("S ")) {
    // Editable-field state (E = response to poll, S = event-driven push)
    const body = line.slice(2);
    const idx = body.indexOf("|");
    const editable = idx > 0 && body.slice(0, idx) === "editable";
    const text = idx > 0 ? body.slice(idx + 1) : "";
    broadcast({ type: "inputState", editable, text });
    return;
  }
  // Ignore other output
}

function writeDaemon(session: DaemonSession, cmd: string) {
  if (session.closed || !session.proc?.stdin) return;
  try {
    session.proc.stdin.write(cmd + "\n");
    session.proc.stdin.flush();
  } catch {}
}

function sendDaemonCmd(cmd: string) {
  const session = ensureGlobalDaemon();
  if (!session || session.closed) return;
  if (!session.ready) { session.pending.push(cmd); return; }
  writeDaemon(session, cmd);
}

// ── App list ─────────────────────────────────────────────────────────

async function getAppList(): Promise<{ pkg: string; label: string }[]> {
  const pkgs = await adb(["shell", "pm", "list", "packages", "-3"]);
  let packages: string[] = [];
  if (pkgs.ok && pkgs.out) {
    packages = pkgs.out.split("\n").map(l => l.replace("package:", "").trim()).filter(Boolean);
  }
  if (packages.length === 0) {
    const all = await adb(["shell", "pm", "list", "packages"]);
    if (!all.ok) return [];
    packages = all.out.split("\n").map(l => l.replace("package:", "").trim()).filter(Boolean);
  }

  // Batch-fetch real app labels via one daemon session (PackageManager)
  const labelMap: Record<string, string> = {};
  try {
    const script = packages.map(p => `N ${p}`).join("\n") + "\nexit\n";
    const proc = Bun.spawn(
      ["adb", "-s", ADB_DEVICE, "shell", `app_process -Djava.class.path=${KEYD_DEX} /data/local/tmp KeyDaemon`],
      { stdin: "pipe", stdout: "pipe", stderr: "pipe" }
    );
    proc.stdin.write(script);
    proc.stdin.end();
    const out = await new Response(proc.stdout).text();
    await proc.exited;
    for (const line of out.split("\n")) {
      const idx = line.indexOf("|");
      if (idx > 0) {
        const pkg = line.slice(0, idx).trim();
        const label = line.slice(idx + 1).trim();
        if (label && label !== pkg && !label.startsWith("OK ") && !label.startsWith("ERR ")) {
          labelMap[pkg] = label;
        }
      }
    }
  } catch { /* fall back to pkg short name */ }

  return packages.map(pkg => ({ pkg, label: labelMap[pkg] || pkg.split(".").pop() || pkg }));
}

// ── App icons (lazy batch generation + local cache) ──────────────────

const ICON_CACHE_DIR = "./public/icons/apps";
let iconGenInFlight = false;

async function generateAppIcons(pkgs: string[]) {
  if (iconGenInFlight) return;
  iconGenInFlight = true;
  try {
    mkdirSync(ICON_CACHE_DIR, { recursive: true });
    // Only generate icons that aren't cached yet
    const missing = pkgs.filter(p => !existsSync(join(ICON_CACHE_DIR, `${p}.png`)));
    if (missing.length === 0) return;
    console.log(`   🖼 Generating ${missing.length} app icons…`);

    // Batch: one daemon session generates all icons (JVM starts once)
    const script = missing.map(p => `I ${p}`).join("\n") + "\nexit\n";
    const proc = Bun.spawn(
      ["adb", "-s", ADB_DEVICE, "shell", `app_process -Djava.class.path=${KEYD_DEX} /data/local/tmp KeyDaemon`],
      { stdin: "pipe", stdout: "pipe", stderr: "pipe" }
    );
    proc.stdin.write(script);
    proc.stdin.end(); // close stdin → daemon sees EOF and exits
    await proc.exited;

    // Pull icons (4 at a time)
    const chunks: string[][] = [];
    for (let i = 0; i < missing.length; i += 4) chunks.push(missing.slice(i, i + 4));
    for (const chunk of chunks) {
      await Promise.all(chunk.map(async pkg => {
        await adb(["pull", `/data/local/tmp/icon_${pkg}.png`, join(ICON_CACHE_DIR, `${pkg}.png`)]);
      }));
    }
    console.log(`   ✓ App icons cached (${missing.length})`);
  } catch (e) {
    console.log("   ⚠ Icon generation failed:", e);
  } finally {
    iconGenInFlight = false;
  }
}

// ── WebSocket message handling ───────────────────────────────────────

async function handleMessage(ws: any, raw: string) {
  let msg: any;
  try { msg = JSON.parse(raw); } catch { return; }

  // Heartbeat
  if (msg.ping) { ws.send(JSON.stringify({ pong: true })); return; }

  // ADB connect / force reconnect
  if (msg.connect) {
    if (!ADB_DEVICE) { ws.send(JSON.stringify({ error: "ADB_DEVICE not set" })); return; }
    const ok = await adbConnect();
    ws.send(JSON.stringify({ connected: ok, state: currentState }));
    broadcastStatus();
    if (ok) ensureGlobalDaemon();
    return;
  }
  if (msg.forceReconnect) {
    if (!ADB_DEVICE) { ws.send(JSON.stringify({ error: "ADB_DEVICE not set" })); return; }
    await adb(["disconnect", ADB_DEVICE]);
    await adb(["kill-server"]);
    const home = process.env.HOME || "/root";
    try { Bun.write(`${home}/.android/adbkey`, ""); Bun.write(`${home}/.android/adbkey.pub`, ""); } catch {}
    await new Promise(r => setTimeout(r, 2000));
    const ok = await adbConnect();
    ws.send(JSON.stringify({ connected: ok, state: currentState }));
    broadcastStatus();
    if (ok) ensureGlobalDaemon();
    return;
  }

  // Commands that need device connection (one-shot, via adb())
  if (msg.appList) {
    if (currentState !== "connected") { ws.send(JSON.stringify({ error: "Device not connected" })); return; }
    const apps = await getAppList();
    ws.send(JSON.stringify({ type: "apps", apps }));
    // Generate icons in background (cached locally, frontend picks them up)
    generateAppIcons(apps.map(a => a.pkg));
    return;
  }
  if (msg.launch) {
    if (currentState !== "connected") { ws.send(JSON.stringify({ error: "Device not connected" })); return; }
    const res = await adb(["shell", "monkey", "-p", msg.launch, "-c", "android.intent.category.LAUNCHER", "1"]);
    ws.send(JSON.stringify({ launched: msg.launch, ok: res.ok }));
    return;
  }
  if (msg.favGet) { ws.send(JSON.stringify({ type: "favorites", favorites: loadFavorites() })); return; }
  if (msg.favAdd) {
    const favs = loadFavorites();
    if (!favs.find(f => f.pkg === msg.favAdd.pkg)) {
      favs.push({ pkg: msg.favAdd.pkg, label: msg.favAdd.label || msg.favAdd.pkg });
      saveFavorites(favs);
    }
    ws.send(JSON.stringify({ type: "favorites", favorites: favs }));
    return;
  }
  if (msg.favDel) {
    let favs = loadFavorites();
    favs = favs.filter(f => f.pkg !== msg.favDel);
    saveFavorites(favs);
    ws.send(JSON.stringify({ type: "favorites", favorites: favs }));
    return;
  }
  if (msg.favUpdate) {
    const favs = loadFavorites();
    const f = favs.find(x => x.pkg === msg.favUpdate.pkg);
    if (f && msg.favUpdate.label) f.label = msg.favUpdate.label;
    saveFavorites(favs);
    ws.send(JSON.stringify({ type: "favorites", favorites: favs }));
    return;
  }

  // ── Daemon commands (shared global CLI session) ──

  if (msg.keydown || msg.keyup || msg.key || msg.keyLong) {
    const keyName = msg.keydown || msg.keyup || msg.key || msg.keyLong;
    const keycode = KEY_MAP[String(keyName).toLowerCase()];
    if (!keycode) { ws.send(JSON.stringify({ error: "Unknown key: " + keyName })); return; }
    let cmd: string;
    if (msg.keydown) cmd = `D ${keycode}`;
    else if (msg.keyup) cmd = `U ${keycode}`;
    else if (msg.keyLong) cmd = `L ${keycode}`;
    else cmd = `${keycode}`;
    sendDaemonCmd(cmd);
    return;
  }

  if (msg.text) {
    // Escape newlines/backslashes for the line-based protocol
    const text = String(msg.text).replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
    sendDaemonCmd(`T ${text}`);
    return;
  }

  if (msg.clear) {
    sendDaemonCmd("C");
    return;
  }

  ws.send(JSON.stringify({ error: "Unknown command" }));
}

// ── server ───────────────────────────────────────────────────────────

const server = Bun.serve({
  port: PORT,
  websocket: {
    async open(ws) {
      clients.add(ws);
      console.log(`   🔌 WS client connected (${clients.size} total)`);

      // Try to ensure ADB is connected before spawning the daemon
      if (ADB_DEVICE && currentState !== "connected") {
        await adbConnect();
      }
      await syncKeyDaemonDex();

      // One shared daemon CLI for ALL clients (UiAutomation/clipboard are
      // system singletons — multiple daemons would race on them)
      ensureGlobalDaemon();

      ws.send(JSON.stringify(statusMsg()));
    },
    close(ws) {
      clients.delete(ws);
      console.log(`   🔌 WS client disconnected (${clients.size} total)`);
      // No clients left → release the daemon so no process lingers on the TV
      if (clients.size === 0 && globalSession) {
        try { globalSession.proc?.kill(); } catch {}
        globalSession = null;
        console.log("   🧹 Daemon stopped (no clients)");
      }
    },
    async message(ws, raw) {
      await handleMessage(ws, raw as string);
    },
  },
  async fetch(req, server): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === "/ws") {
      const upgraded = server.upgrade(req);
      if (upgraded) return new Response(null, { status: 101 });
      return new Response("WebSocket upgrade failed", { status: 400 });
    }
    const staticRes = serveStatic(url.pathname);
    if (staticRes) return staticRes;
    return new Response(Bun.file(join(STATIC_DIR, "index.html")), {
      headers: { "content-type": "text/html" },
    });
  },
});

console.log(`🚀 TV Remote running on http://0.0.0.0:${PORT} (WS only)`);
console.log(`   ADB device: ${ADB_DEVICE || "(set ADB_DEVICE env var)"}`);

// ── Cleanup: no stale daemon processes on the TV ──────────────────────

function killDaemon() {
  if (globalSession) {
    try { globalSession.proc?.kill(); } catch {}
    globalSession = null;
  }
}

// Server exit → kill daemon child so it doesn't linger on the device
process.on("SIGINT", () => { killDaemon(); process.exit(0); });
process.on("SIGTERM", () => { killDaemon(); process.exit(0); });

// Startup: clear any daemon left over from a previous crashed server.
// pgrep -f matches the shell running it, so verify cmdline starts with
// "app_process" via /proc before killing.
async function cleanupStaleDaemons() {
  const script =
    "for p in $(pgrep -f KeyDaemon); do " +
    "cmd=$(tr '\\0' ' ' </proc/$p/cmdline 2>/dev/null); " +
    "case \"$cmd\" in app_process*) kill $p 2>/dev/null;; esac; " +
    "done";
  const res = await adb(["shell", "-T", script]);
  if (res.out.trim()) console.log("   🧹 Cleaned stale daemons: " + res.out.trim());
}

// ── Startup ──────────────────────────────────────────────────────────

setInterval(() => { broadcast({ ping: Date.now() }); }, 1000);

// Initial editable-state sync when a daemon session becomes ready
function syncInputState(session: DaemonSession) {
  if (session.ready && !session.closed) writeDaemon(session, "E");
}

let statusInterval = setInterval(async () => {
  if (ADB_DEVICE) {
    const info = await getDeviceState();
    if (currentState !== info.state) {
      currentState = info.state;
      lastConnectDetail = info.detail;
    }
  }
  broadcastStatus();
}, 5000);

if (ADB_DEVICE) {
  const connected = await adbConnect();
  if (connected) await syncKeyDaemonDex();
  broadcastStatus();
  startRetryLoop();
}
