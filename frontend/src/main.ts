import { type FavEntry, type AppInfo, type StatusInfo } from "./api";
import "./api";
import { t } from "./i18n";
import { icons, type IconName } from "./icons";

const ic = (name: IconName, size = 22) =>
  `<span class="lic">${icons[name].replace("<svg", `<svg width="${size}" height="${size}"`)}</span>`;

// ── State ─────────────────────────────────────────────────
let favorites: FavEntry[] = [];
let allApps: AppInfo[] = [];
let toastTimer: ReturnType<typeof setTimeout>;
let isConnected = false;
let tvInputEditable = false;
let tvInputText = "";

const app = document.getElementById("app")!;

// ── WebSocket ──────────────────────────────────────────
let ws: WebSocket | null = null;
let pingTimer: ReturnType<typeof setInterval>;

function connectWS() {
  const proto = location.protocol === "https:" ? "wss" : "ws";
  ws = new WebSocket(`${proto}://${location.host}/ws`);
  
  ws.onopen = () => {
    console.log("WS open");
    updateConnectionUI("connected");
    // Request initial data
    sendWS({ favGet: true });
  };
  
  ws.onclose = () => {
    ws = null;
    updateConnectionUI("disconnected");
    setTimeout(connectWS, 2000);
  };
  
  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    
    // Heartbeat ping from server
    if (data.ping) return;
    
    // Status update from server
    if (data.type === "status") {
      updateStatus(data);
      return;
    }
    
    // App list response
    if (data.type === "apps") {
      allApps = data.apps;
      renderPicker(allApps);
      return;
    }
    
    // Favorites response
    if (data.type === "favorites") {
      favorites = data.favorites;
      renderFavorites();
      return;
    }
    
    // App icons pushed over WS as base64 (works in PWA standalone)
    if (data.type === "icons") {
      storeIconsFromWS(data.icons);
      return;
    }
    
    // TV editable-field state (from daemon watcher)
    if (data.type === "inputState") {
      tvInputEditable = data.editable;
      tvInputText = data.text || "";
      updateTvInputIndicator();
      return;
    }
    
    // Key/text results — show toast on error only
    if (data.error) {
      showToast(`✗ ${data.error}`);
    } else if (data.method === "yadb") {
      showToast(t("toastSent"));
    } else if (data.method === "yadb_clear") {
      showToast(t("toastCleared"));
    } else if (data.connected !== undefined) {
      // connect/forceReconnect response
      showToast(data.connected ? t("toastConnected") : t("toastFailed"));
    }
  };
}

function sendWS(msg: Record<string, any>): boolean {
  if (ws?.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(msg));
    return true;
  }
  return false;
}

// TV input-field indicator (bottom bar text button shows a dot when TV has focus)
function updateTvInputIndicator() {
  const btn = document.getElementById("btnText");
  if (!btn) return;
  const dot = btn.querySelector(".tv-input-dot");
  if (tvInputEditable) {
    btn.classList.add("tv-input-active");
    if (!dot) {
      const d = document.createElement("span");
      d.className = "tv-input-dot";
      btn.appendChild(d);
    }
  } else {
    btn.classList.remove("tv-input-active");
    dot?.remove();
  }
}

// Store base64 icons received over WS into IndexedDB, then re-render
async function storeIconsFromWS(icons: Record<string, string>) {
  let changed = false;
  for (const [pkg, b64] of Object.entries(icons)) {
    try {
      const bin = atob(b64);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      await idbPutBlob(pkg, new Blob([bytes], { type: "image/png" }));
      iconUrlCache.delete(pkg); // next loadAppIcon rebuilds the blob URL
      changed = true;
    } catch {}
  }
  if (changed) {
    renderFavorites();
    renderPicker(allApps);
  }
}

// ── Connection UI ───────────────────────────────────────
function updateConnectionUI(state: "connected" | "disconnected" | "auth" | "checking") {
  const dot = document.getElementById("statusDot")!;
  const label = document.getElementById("statusLabel")!;
  const authHint = document.getElementById("authHint")!;
  
  switch (state) {
    case "connected":
      dot.className = "status-dot on";
      label.textContent = t("statusConnected");
      authHint.classList.add("hidden");
      setControlsEnabled(true);
      isConnected = true;
      break;
    case "disconnected":
      dot.className = "status-dot off";
      label.textContent = ws ? t("statusDisconnected") : t("statusReconnecting");
      authHint.classList.add("hidden");
      setControlsEnabled(false);
      isConnected = false;
      break;
    case "auth":
      dot.className = "status-dot auth";
      label.textContent = t("statusAuth");
      authHint.classList.remove("hidden");
      setControlsEnabled(false);
      isConnected = false;
      break;
    case "checking":
      dot.className = "status-dot off";
      label.textContent = t("statusChecking");
      authHint.classList.add("hidden");
      setControlsEnabled(false);
      isConnected = false;
      break;
  }
}

function updateStatus(data: StatusInfo) {
  switch (data.adbState) {
    case "connected":
      updateConnectionUI("connected");
      break;
    case "auth_required":
      updateConnectionUI("auth");
      break;
    case "disconnected":
    case "no_device":
      updateConnectionUI("disconnected");
      break;
  }
}

function setControlsEnabled(on: boolean) {
  app.querySelectorAll<HTMLElement>(
    ".dpad-btn:not(.empty), .action-btn, .media-btn, .btn-kbd, .app-chip:not(.add-chip)"
  ).forEach(el => {
    el.style.opacity = on ? "" : "0.4";
    el.style.pointerEvents = on ? "" : "none";
  });
}

function reconnect() {
  updateConnectionUI("checking");
  sendWS({ connect: true });
}

function forceReconnect() {
  updateConnectionUI("checking");
  showToast(t("toastForceReconnect"));
  vibrate([30, 30, 30]);
  sendWS({ forceReconnect: true });
}

// ── Toast ─────────────────────────────────────────────────
function showToast(msg: string) {
  const t = document.getElementById("toast")!;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2000);
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// ── D-pad repeat ──────────────────────────────────────────
let dpadRepeatEnabled = true;
let dpadRepeatTimer: ReturnType<typeof setInterval> | null = null;
let dpadRepeatTimeout: ReturnType<typeof setTimeout> | null = null;
let dpadRepeatKey: string | null = null;
const DPAD_KEYS = new Set(["up", "down", "left", "right"]);
const REPEAT_TIMEOUT = 500; // D-pad repeat 启动延迟（保持 Android 默认）
const REPEAT_DELAY = 50;
// 模拟长按模式的判定阈值：按住超过此值即判定长按并发送 down。
// 取 Android TAP_TIMEOUT 区间（100-180ms）内的 150ms：
// 更短的点击走完整 tap（避免分离 D/U 被应用误解），
// 更长的按住立即 down 保持，让应用自身的长按计时尽快开始。
const SIM_LONG_PRESS_MS = 150;

// ── Settings (persisted in localStorage) ────────────────
interface Settings {
  menuFix: boolean;      // 菜单键修复：用 L (longpress) 序列注入菜单键
  dpadRepeat: boolean;   // 方向键长按自动重复
  simLongPress: boolean; // 模拟长按：短按=普通按下，长按=longpress（不采用 D/U 分离）
  vibStrength: number;   // 振动强度档位（基础时长 ms）：25/50/100/125
}

const VIB_LEVELS = [25, 50, 100, 125];
let settings: Settings = { menuFix: false, dpadRepeat: true, simLongPress: false, vibStrength: 25 };

function loadSettings() {
  try {
    const raw = localStorage.getItem("tv-remote-settings");
    if (raw) settings = { ...settings, ...JSON.parse(raw) };
  } catch {}
}
function saveSettings() {
  try { localStorage.setItem("tv-remote-settings", JSON.stringify(settings)); } catch {}
}

function applySettings() {
  const menuFix = document.getElementById("menuFixToggle") as HTMLInputElement;
  const dpadRepeat = document.getElementById("dpadRepeatToggle") as HTMLInputElement;
  const simLongPress = document.getElementById("simLongPressToggle") as HTMLInputElement;
  if (menuFix) menuFix.checked = settings.menuFix;
  if (dpadRepeat) dpadRepeat.checked = settings.dpadRepeat;
  if (simLongPress) simLongPress.checked = settings.simLongPress;
  dpadRepeatEnabled = settings.dpadRepeat;
  // 振动强度按钮高亮
  document.querySelectorAll<HTMLButtonElement>(".vib-level-btn").forEach((b) => {
    b.classList.toggle("active", Number(b.dataset.level) === settings.vibStrength);
  });
}

function setMenuFix(on: boolean) {
  settings.menuFix = on;
  saveSettings();
  vibrate(28);
}

function setDpadRepeat(on: boolean) {
  settings.dpadRepeat = on;
  dpadRepeatEnabled = on;
  saveSettings();
  vibrate(28);
}

function setSimLongPress(on: boolean) {
  settings.simLongPress = on;
  saveSettings();
  vibrate(28);
}

function setVibStrength(level: number) {
  settings.vibStrength = level;
  saveSettings();
  applySettings();
  vibrate(level); // 预览该档位
}

function openSettings() {
  applySettings();
  // Show vibration availability + last call result
  const text = document.getElementById("vibStatusText")!;
  if (!vibSupported) {
    text.textContent = t("vibUnavailable");
  } else if (vibLastOk === false) {
    text.textContent = t("vibBlocked");
  } else if (vibLastOk === true) {
    text.textContent = t("vibWorking");
  } else {
    text.textContent = t("vibAvailable");
  }
  document.getElementById("settingsModal")!.classList.remove("hidden");
}
function closeSettings() {
  document.getElementById("settingsModal")!.classList.add("hidden");
}

// ── Vibration feedback ───────────────────────────────
// Tracks whether the API exists and whether the system accepted the call.
let vibSupported = typeof navigator.vibrate === "function";
let vibLastOk: boolean | null = null; // null = never called

function vibrate(pattern: number | number[]) {
  // Scale by strength (base 25ms level)
  const scale = settings.vibStrength / 25;
  const scaled = Array.isArray(pattern)
    ? pattern.map(p => Math.round(p * scale))
    : Math.round(pattern * scale);
  try {
    if (typeof navigator.vibrate === "function") {
      vibLastOk = navigator.vibrate(scaled);
      vibSupported = true;
    } else {
      vibSupported = false;
    }
  } catch {
    vibSupported = false;
  }
}

// ── Key sending ───────────────────────────────────────
function sendKey(key: string) {
  const btn = document.querySelector(`[data-key="${key}"]`);
  if (btn) { btn.classList.add("pressed"); setTimeout(() => btn.classList.remove("pressed"), 120); }
  sendWS({ key });
}

// ── Sim long-press mode state ──────────────────────────
let simKey: string | null = null;
let simLongPressed = false;
let simTimer: ReturnType<typeof setTimeout> | null = null;

function sendKeyDown(key: string) {
  const btn = document.querySelector(`[data-key="${key}"]`);
  if (btn) btn.classList.add("pressed");
  vibrate(28); // short tick on press

  // 模拟长按模式（仅非方向键）：短按→完整 tap；
  // 长按（≥阈值）→ down 保持（app 自行检测长按，如 YouTube 菜单）→ 松手 up。
  // 方向键不受影响，保持 D/U + repeat 滚动。
  if (settings.simLongPress && !DPAD_KEYS.has(key)) {
    simKey = key;
    simLongPressed = false;
    simTimer = setTimeout(() => {
      simLongPressed = true;
      vibrate(20);
      // 长按：down 保持，让 app 自己检测长按
      sendWS({ keydown: key });
    }, SIM_LONG_PRESS_MS);
    return;
  }

  // 菜单键修复：开启时用 L (longpress 序列) 一次性发送，松开不再发 keyup
  if (settings.menuFix && key === "menu") {
    sendWS({ keyLong: key });
    return;
  }

  sendWS({ keydown: key });
  if (dpadRepeatEnabled && DPAD_KEYS.has(key)) {
    dpadRepeatKey = key;
    dpadRepeatTimeout = setTimeout(() => {
      if (dpadRepeatKey === key) {
        dpadRepeatTimer = setInterval(() => {
          if (dpadRepeatKey === key) {
            vibrate(14); // light tick during repeat
            sendWS({ keydown: key });
          }
        }, REPEAT_DELAY);
      }
    }, REPEAT_TIMEOUT);
  }
}

function sendKeyUp(key: string) {
  const btn = document.querySelector(`[data-key="${key}"]`);
  if (btn) btn.classList.remove("pressed");

  // 模拟长按模式（仅非方向键）：短按→完整 tap；长按→发送 U 结束保持
  if (settings.simLongPress && !DPAD_KEYS.has(key)) {
    if (simTimer) { clearTimeout(simTimer); simTimer = null; }
    if (simKey === key) {
      if (simLongPressed) {
        sendWS({ keyup: key }); // 结束长按（down 已保持）
      } else {
        // 短按：完整 tap（菜单键修复时用 L）
        if (settings.menuFix && key === "menu") {
          sendWS({ keyLong: key });
        } else {
          sendWS({ key });
        }
      }
    }
    simKey = null;
    return;
  }

  // 菜单键修复模式下 keyLong 已含完整 down+up 序列，跳过 keyup
  if (settings.menuFix && key === "menu") return;
  if (dpadRepeatKey === key) {
    clearTimeout(dpadRepeatTimeout!); clearInterval(dpadRepeatTimer!);
    dpadRepeatTimeout = dpadRepeatTimer = null; dpadRepeatKey = null;
    vibrate(20); // release tick after long-press
  }
  sendWS({ keyup: key });
}

// ── Text input ──────────────────────────────────────────
function openTextModal() {
  document.getElementById("textModal")!.classList.remove("hidden");
  const ta = document.getElementById("textInput") as HTMLTextAreaElement;
  // 预填 TV 输入框当前内容（若已聚焦）
  if (tvInputEditable && tvInputText) {
    ta.value = tvInputText;
  } else {
    ta.value = "";
  }
  updateTextAction();
  setTimeout(() => {
    ta.focus();
    ta.select(); // 全选方便修改
    // Scroll modal into view when keyboard opens
    setTimeout(() => {
      document.getElementById("textModal")!.scrollIntoView({ block: "start" });
    }, 300);
  }, 100);
}

// 合并的发送/清空按钮：有文本→发送，空→清空
function updateTextAction() {
  const ta = document.getElementById("textInput") as HTMLTextAreaElement;
  const btn = document.getElementById("btnAction") as HTMLButtonElement;
  const hasText = ta.value.trim().length > 0;
  if (hasText) {
    btn.innerHTML = `${ic("send", 18)} ${t("send")}`;
    btn.className = "btn-primary";
  } else {
    btn.innerHTML = `${ic("trash-2", 18)} ${t("clear")}`;
    btn.className = "btn-cancel";
  }
}

function onTextAction() {
  const ta = document.getElementById("textInput") as HTMLTextAreaElement;
  if (ta.value.trim().length > 0) {
    sendText();
  } else {
    clearTextField();
  }
}
function closeTextModal() {
  document.getElementById("textModal")!.classList.add("hidden");
  (document.getElementById("textInput") as HTMLTextAreaElement).value = "";
}
function sendText() {
  const input = document.getElementById("textInput") as HTMLTextAreaElement;
  const text = input.value.trim();
  if (!text) return;
  vibrate([30, 50, 30]); // double tick for send
  sendWS({ text });
  closeTextModal();
}
function clearTextField() {
  vibrate([25, 40, 25]); // double tick for clear
  sendWS({ clear: true });
}

// ── Favorites ─────────────────────────────────────────────
async function addFavorite(pkg: string, label: string) {
  sendWS({ favAdd: { pkg, label } });
  showToast(`${t("toastAdded")}: ${label}`);
  closePicker();
}
function removeFavorite(pkg: string) {
  sendWS({ favDel: pkg });
  showToast(t("toastRemoved"));
}

// ── Edit app modal (rename / upload icon / delete) ──
let editPkg = "";
let editIconBlob: Blob | null = null;

async function openEditModal(pkg: string, label: string) {
  editPkg = pkg;
  editIconBlob = null;
  (document.getElementById("editName") as HTMLInputElement).value = label;
  (document.getElementById("editFile") as HTMLInputElement).value = "";
  // Preview: custom icon → cached icon → fetch default (don't touch siblings)
  const preview = document.getElementById("editIconPreview") as HTMLImageElement;
  const custom = await idbGetBlob(`custom_${pkg}`);
  if (custom) {
    preview.src = URL.createObjectURL(custom);
  } else if (iconUrlCache.get(pkg)) {
    preview.src = iconUrlCache.get(pkg)!;
  } else {
    try {
      const res = await fetch(`/icons/apps/${encodeURIComponent(pkg)}.png`);
      if (res.ok) {
        const b = await res.blob();
        await idbPutBlob(pkg, b);
        const u = URL.createObjectURL(b);
        iconUrlCache.set(pkg, u);
        preview.src = u;
      }
    } catch {}
  }
  preview.classList.remove("hidden");
  document.getElementById("editModal")!.classList.remove("hidden");
}

function closeEditModal() {
  document.getElementById("editModal")!.classList.add("hidden");
}

function onEditFileChange() {
  const file = (document.getElementById("editFile") as HTMLInputElement).files?.[0];
  if (!file) return;
  editIconBlob = file;
  (document.getElementById("editIconPreview") as HTMLImageElement).src = URL.createObjectURL(file);
}

async function saveEdit() {
  const name = (document.getElementById("editName") as HTMLInputElement).value.trim();
  if (!name) return;
  if (editIconBlob) {
    await idbPutBlob(`custom_${editPkg}`, editIconBlob);
    iconUrlCache.set(`custom_${editPkg}`, URL.createObjectURL(editIconBlob));
  }
  sendWS({ favUpdate: { pkg: editPkg, label: name } });
  showToast(t("toastSaved"));
  closeEditModal();
}

function deleteEditApp() {
  sendWS({ favDel: editPkg });
  showToast(t("toastRemoved"));
  closeEditModal();
}

function launchApp(pkg: string, label: string) {
  sendWS({ launch: pkg });
  showToast(`${t("toastLaunching")}: ${label}`);
}

function renderFavorites() {
  const container = document.getElementById("favApps")!;
  const addBtn = `<button class="app-chip add-chip" id="addAppBtn" title="${t("addApp")}">${ic("plus", 26)}</button>`;
  if (!favorites.length) { container.innerHTML = addBtn; }
  else {
    container.innerHTML = favorites.map(f => `
      <button class="app-chip" data-pkg="${esc(f.pkg)}" title="${t("titleTapLaunch")}">
        <span class="app-emoji"><img class="app-img" data-pkg="${esc(f.pkg)}" alt="" loading="lazy"><span class="app-fallback">${ic("app-window", 22)}</span></span>
        <span class="app-name">${esc(f.label)}</span>
        <span class="delete-badge">${ic("x", 12)}</span>
      </button>`).join("") + addBtn;
  }
  document.getElementById("addAppBtn")?.addEventListener("click", openPicker);
  container.querySelectorAll<HTMLElement>(".app-chip:not(.add-chip)").forEach((btn) => {
    const pkg = btn.dataset.pkg!;
    const label = btn.querySelector(".app-name")?.textContent || pkg;
    // Load icon from cache/server
    const img = btn.querySelector<HTMLImageElement>("img.app-img");
    if (img) loadAppIcon(img, pkg);
    btn.addEventListener("click", () => { if (!longPressed) launchApp(pkg, label); });
    btn.addEventListener("contextmenu", (e) => { e.preventDefault(); openEditModal(pkg, label); });
    // Long-press → edit modal
    let timer: ReturnType<typeof setTimeout>;
    let longPressed = false;
    btn.addEventListener("pointerdown", () => {
      longPressed = false;
      timer = setTimeout(() => { longPressed = true; openEditModal(pkg, label); }, 600);
    });
    btn.addEventListener("pointerup", () => { clearTimeout(timer); });
    btn.addEventListener("pointerleave", () => { clearTimeout(timer); });
    btn.querySelector(".delete-badge")?.addEventListener("click", (e) => { e.stopPropagation(); removeFavorite(pkg); });
  });
}

// ── App Picker ─────────────────────────────────────────
async function openPicker() {
  document.getElementById("pickerModal")!.classList.remove("hidden");
  document.getElementById("appSpinner")!.style.display = "block";
  (document.getElementById("appSearch") as HTMLInputElement).value = "";
  if (!allApps.length) sendWS({ appList: true });
  else renderPicker(allApps);
}
function closePicker() { document.getElementById("pickerModal")!.classList.add("hidden"); }
function filterApps() {
  const q = (document.getElementById("appSearch") as HTMLInputElement).value.toLowerCase();
  renderPicker(allApps.filter(a => a.label.toLowerCase().includes(q) || a.pkg.toLowerCase().includes(q)));
}
function renderPicker(apps: AppInfo[]) {
  const list = document.getElementById("appPickerList")!;
  document.getElementById("appSpinner")!.style.display = "none";
  if (!apps.length) { list.innerHTML = `<div style="padding:20px;text-align:center;color:#999">${t("noAppsFound")}</div>`; return; }
  list.innerHTML = apps.map(a => `
    <button class="picker-item" data-pkg="${esc(a.pkg)}" data-label="${esc(a.label)}">
      <span class="picker-ic"><img class="app-img" data-pkg="${esc(a.pkg)}" alt="" loading="lazy"><span class="app-fallback">${ic("app-window", 22)}</span></span>
      <div><div>${esc(a.label)}</div><div class="pkg-sub">${esc(a.pkg)}</div></div>
    </button>`).join("");
  list.querySelectorAll<HTMLElement>(".picker-item").forEach(item => {
    item.addEventListener("click", () => addFavorite(item.dataset.pkg!, item.dataset.label!));
    const img = item.querySelector<HTMLImageElement>("img.app-img");
    if (img) loadAppIcon(img, img.dataset.pkg!);
  });
}

// ── App icon cache (IndexedDB + in-memory blob URLs) ────────────────
const IDB_NAME = "tv-remote-icons";
const IDB_STORE = "icons";
const iconUrlCache = new Map<string, string>(); // pkg -> blob URL

function openIconDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(IDB_STORE, { keyPath: "pkg" });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function idbGetBlob(pkg: string): Promise<Blob | null> {
  return new Promise(async (resolve) => {
    try {
      const db = await openIconDB();
      const tx = db.transaction(IDB_STORE, "readonly");
      const req = tx.objectStore(IDB_STORE).get(pkg);
      req.onsuccess = () => resolve(req.result?.blob ?? null);
      req.onerror = () => resolve(null);
    } catch { resolve(null); }
  });
}

function idbPutBlob(pkg: string, blob: Blob): Promise<void> {
  return new Promise(async (resolve) => {
    try {
      const db = await openIconDB();
      const tx = db.transaction(IDB_STORE, "readwrite");
      tx.objectStore(IDB_STORE).put({ pkg, blob });
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    } catch { resolve(); }
  });
}

async function loadAppIcon(img: HTMLImageElement, pkg: string) {
  const showFallback = () => {
    img.classList.add("hidden");
    img.nextElementSibling?.classList.remove("hidden");
  };
  const showImage = (url: string) => {
    img.src = url;
    img.classList.remove("hidden");
    img.nextElementSibling?.classList.add("hidden");
  };
  // 0. User-uploaded custom icon (stored under custom_<pkg>)
  const custom = await idbGetBlob(`custom_${pkg}`);
  if (custom) {
    let u = iconUrlCache.get(`custom_${pkg}`);
    if (!u) { u = URL.createObjectURL(custom); iconUrlCache.set(`custom_${pkg}`, u); }
    showImage(u);
    return;
  }
  // 1. In-memory blob URL
  let url = iconUrlCache.get(pkg);
  if (url) { showImage(url); return; }
  // 2. IndexedDB
  const blob = await idbGetBlob(pkg);
  if (blob) {
    url = URL.createObjectURL(blob);
    iconUrlCache.set(pkg, url);
    showImage(url);
    return;
  }
  // 3. Fetch from server, then persist locally
  try {
    const res = await fetch(`/icons/apps/${encodeURIComponent(pkg)}.png`);
    if (res.ok) {
      const b = await res.blob();
      await idbPutBlob(pkg, b);
      url = URL.createObjectURL(b);
      iconUrlCache.set(pkg, url);
      showImage(url);
      return;
    }
  } catch {}
  showFallback();
}

// ── Build UI ─────────────────────────────────────────────
function buildUI() {
  app.innerHTML = `
    <div class="remote-header">
      <h1>${ic("tv", 22)} TV Remote</h1>
      <div class="header-right">
        <button class="icon-btn" id="btnSettings" title="⚙"><span class="settings-ic">${ic("settings", 20)}</span></button>
        <div class="status-area" id="statusArea" title="${t("statusTapReconnect")}">
          <span class="status-label" id="statusLabel">${t("statusChecking")}</span>
          <div class="status-dot" id="statusDot"></div>
        </div>
      </div>
    </div>
    <div class="auth-hint hidden" id="authHint">
      <div class="auth-hint-text">
        ${t("authHint1")}<br>
        ${t("authHint2")}
      </div>
      <button class="auth-force-btn" id="btnForceReconnect">${ic("refresh-cw", 18)} ${t("authForceBtn")}</button>
    </div>
    <div class="main-layout">
      <div class="dpad-col">
        <div class="dpad">
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="up" aria-label="${t("up")}">${ic("chevron-up", 30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="left" aria-label="${t("left")}">${ic("chevron-left", 30)}</button>
          <button class="dpad-btn ok-btn" data-key="ok" aria-label="${t("ok")}">${ic("circle", 26)}</button>
          <button class="dpad-btn" data-key="right" aria-label="${t("right")}">${ic("chevron-right", 30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="down" aria-label="${t("down")}">${ic("chevron-down", 30)}</button>
          <button class="dpad-btn empty"></button>
        </div>
      </div>
      <div class="actions-col">
        <div class="action-grid">
          <button class="action-btn accent-back" data-key="back">${ic("corner-up-left", 22)}<span>${t("actionBack")}</span></button>
          <button class="action-btn accent-home" data-key="home">${ic("home", 22)}<span>${t("actionHome")}</span></button>
          <button class="action-btn" data-key="menu">${ic("menu", 22)}<span>${t("actionMenu")}</span></button>
        </div>
        <div class="media-row">
          <div class="media-group">
            <button class="media-btn" data-key="mute" title="${t("mute")}">${ic("volume-x")}</button>
            <button class="media-btn" data-key="voldown" title="${t("volDown")}">${ic("volume-1")}</button>
            <button class="media-btn" data-key="volup" title="${t("volUp")}">${ic("volume-2")}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-title">${t("quickLaunch")}</div>
    <div class="app-scroll" id="favApps"></div>
    <div class="bottom-bar">
      <button class="btn-kbd" id="btnText">${ic("keyboard", 20)} ${t("textInput")}</button>
    </div>
    <div class="modal-overlay hidden" id="textModal">
      <div class="modal-box">
        <h2>${ic("keyboard", 18)} ${t("textModalTitle")}</h2>
        <textarea id="textInput" placeholder="${t("textPlaceholder")}"></textarea>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelText">${ic("x", 18)} ${t("cancel")}</button>
          <button class="btn-primary" id="btnAction">${ic("send", 18)} ${t("send")}</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay hidden" id="pickerModal">
      <div class="modal-box">
        <h2>${ic("app-window", 18)} ${t("pickerTitle")}</h2>
        <input type="text" id="appSearch" placeholder="${t("searchPlaceholder")}">
        <div class="app-picker-list" id="appPickerList">
          <div class="spinner" id="appSpinner"></div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelPicker">${ic("x", 18)} ${t("cancel")}</button>
        </div>
      </div>
    </div>

    <!-- Settings Modal -->
    <div class="modal-overlay hidden" id="settingsModal">
      <div class="modal-box">
        <h2>${ic("settings", 18)} ${t("settingsTitle")}</h2>
        <label class="setting-row">
          <div class="setting-info">
            <div class="setting-name">${t("settingMenuFix")}</div>
            <div class="setting-desc">${t("settingMenuFixDesc")}</div>
          </div>
          <input type="checkbox" class="toggle" id="menuFixToggle">
        </label>
        <label class="setting-row">
          <div class="setting-info">
            <div class="setting-name">${t("settingDpadRepeat")}</div>
            <div class="setting-desc">${t("settingDpadRepeatDesc")}</div>
          </div>
          <input type="checkbox" class="toggle" id="dpadRepeatToggle">
        </label>
        <label class="setting-row">
          <div class="setting-info">
            <div class="setting-name">${t("settingSimLongPress")}</div>
            <div class="setting-desc">${t("settingSimLongPressDesc")}</div>
          </div>
          <input type="checkbox" class="toggle" id="simLongPressToggle">
        </label>
        <div class="setting-row setting-static">
          <div class="setting-info">
            <div class="setting-name">${t("vibration")}</div>
            <div class="setting-desc" id="vibStatusText"></div>
          </div>
          <div class="vib-levels">
            ${VIB_LEVELS.map(l => `<button class="vib-level-btn" data-level="${l}">${l}</button>`).join("")}
          </div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCloseSettings">${t("close")}</button>
        </div>
      </div>
    </div>

    <!-- Edit App Modal -->
    <div class="modal-overlay hidden" id="editModal">
      <div class="modal-box">
        <h2>${ic("app-window", 18)} ${t("editTitle")}</h2>
        <div class="edit-icon-row">
          <img id="editIconPreview" class="edit-icon-preview" alt="">
          <label class="btn-cancel edit-upload-btn">${ic("upload", 16)} ${t("editUpload")}<input type="file" id="editFile" accept="image/*" hidden></label>
        </div>
        <input type="text" id="editName" placeholder="${t("editName")}">
        <div class="modal-row">
          <button class="btn-danger" id="btnDeleteApp">${ic("trash-2", 18)} ${t("editDelete")}</button>
          <button class="btn-cancel" id="btnCancelEdit">${t("editCancel")}</button>
          <button class="btn-primary" id="btnSaveEdit">${ic("check", 18)} ${t("editSave")}</button>
        </div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `;
}

// ── Bind events ──────────────────────────────────────────
function bindEvents() {
  // Suppress native long-press / right-click context menu everywhere
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  
  document.getElementById("statusArea")?.addEventListener("click", reconnect);
  document.getElementById("btnForceReconnect")?.addEventListener("click", forceReconnect);
  document.getElementById("btnSettings")?.addEventListener("click", openSettings);
  document.getElementById("btnCloseSettings")?.addEventListener("click", closeSettings);
  document.getElementById("menuFixToggle")?.addEventListener("change", (e) => {
    setMenuFix((e.target as HTMLInputElement).checked);
  });
  document.getElementById("dpadRepeatToggle")?.addEventListener("change", (e) => {
    setDpadRepeat((e.target as HTMLInputElement).checked);
  });
  document.getElementById("simLongPressToggle")?.addEventListener("change", (e) => {
    setSimLongPress((e.target as HTMLInputElement).checked);
  });
  document.querySelectorAll<HTMLButtonElement>(".vib-level-btn").forEach((b) => {
    b.addEventListener("click", () => setVibStrength(Number(b.dataset.level)));
  });
  // 点击遮罩关闭设置
  document.getElementById("settingsModal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeSettings();
  });

  // Edit app modal
  document.getElementById("btnDeleteApp")?.addEventListener("click", deleteEditApp);
  document.getElementById("btnCancelEdit")?.addEventListener("click", closeEditModal);
  document.getElementById("btnSaveEdit")?.addEventListener("click", saveEdit);
  document.getElementById("editFile")?.addEventListener("change", onEditFileChange);
  document.getElementById("editName")?.addEventListener("keydown", (e) => {
    if ((e as KeyboardEvent).key === "Enter") { e.preventDefault(); saveEdit(); }
  });
  document.getElementById("editModal")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeEditModal();
  });
  
  app.querySelectorAll<HTMLElement>("[data-key]").forEach((el) => {
    const key = el.dataset.key!;
    el.addEventListener("pointerdown", (e) => { e.preventDefault(); sendKeyDown(key); });
    el.addEventListener("pointerup", (e) => { e.preventDefault(); sendKeyUp(key); });
    el.addEventListener("pointerleave", () => sendKeyUp(key));
    el.addEventListener("pointercancel", () => sendKeyUp(key));
  });

  document.getElementById("btnText")?.addEventListener("click", openTextModal);
  document.getElementById("btnCancelText")?.addEventListener("click", closeTextModal);
  document.getElementById("btnAction")?.addEventListener("click", onTextAction);
  document.getElementById("textInput")?.addEventListener("input", updateTextAction);
  document.getElementById("textInput")?.addEventListener("keydown", (e) => {
    if ((e as KeyboardEvent).key === "Enter" && !(e as KeyboardEvent).shiftKey) {
      e.preventDefault(); onTextAction();
    }
  });
  document.getElementById("btnCancelPicker")?.addEventListener("click", closePicker);
  document.getElementById("appSearch")?.addEventListener("input", filterApps);
}

// ── Init ─────────────────────────────────────────────────
loadSettings();
buildUI();
bindEvents();
applySettings();
connectWS();

// Handle virtual keyboard — adjust modal position when keyboard opens
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", () => {
    const modal = document.getElementById("textModal");
    if (modal && !modal.classList.contains("hidden")) {
      modal.scrollIntoView({ block: "start" });
    }
  });
}

// PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js", { updateViaCache: "none" }).then((reg) => {
    // Force check for updates on every load
    reg.update().catch(() => {});
  }).catch(() => {});
}
