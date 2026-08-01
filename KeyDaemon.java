import android.content.ClipData;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import android.os.HandlerThread;
import android.os.IBinder;
import android.os.Looper;
import android.os.Parcel;
import android.os.SystemClock;
import android.view.InputDevice;
import android.view.KeyCharacterMap;
import android.view.KeyEvent;
import android.app.UiAutomation;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;
import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

/**
 * Input daemon — keys, text, clear.
 *
 * Protocol (one command per line):
 *   D <code>   → key down
 *   U <code>   → key up
 *   <code>     → tap (down+up, same downTime)
 *   L <code>   → long-press tap (down + down(repeat=1, FLAG_LONG_PRESS) + up)
 *   T <text>   → type text (IClipboard setPrimaryClip + Ctrl+V)
 *   C          → clear text (Ctrl+A + Delete)
 *   exit/quit  → stop
 */
public class KeyDaemon {
    private static final int INJECT_MODE = 2;
    private static final int META_CTRL = KeyEvent.META_CTRL_ON | KeyEvent.META_CTRL_LEFT_ON;

    private static Method injectMethod;
    private static Object inputManager;

    // downTime per key so ACTION_UP reuses the DOWN's downTime.
    // Android correlates down/up pairs via downTime; mismatched timestamps
    // leave the dispatcher thinking the key is still held.

    public static void main(String[] args) throws Exception {
        // Init InputManager
        Class<?> imClass = Class.forName("android.hardware.input.InputManager");
        inputManager = imClass.getMethod("getInstance").invoke(null);
        injectMethod = imClass.getMethod("injectInputEvent",
                android.view.InputEvent.class, int.class);

        // Init clipboard lazily via ensureIClipboard()

        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("READY");
        System.out.flush();
        startEditableWatcher();

        String line;
        while ((line = reader.readLine()) != null) {
            line = line.trim();
            if (line.isEmpty()) continue;
            if (line.equals("exit") || line.equals("quit")) break;

            try {
                char cmd = line.charAt(0);
                String arg = line.length() > 2 ? line.substring(2) : "";

                switch (cmd) {
                    case 'D':
                        keyDown(Integer.parseInt(arg));
                        break;
                    case 'U':
                        keyUp(Integer.parseInt(arg));
                        break;
                    case 'L':
                        longPressTap(Integer.parseInt(arg));
                        break;
                    case 'T':
                        typeText(arg);
                        break;
                    case 'C':
                        clearText();
                        break;
                    case 'I':
                        dumpIcon(arg);
                        break;
                    case 'N':
                        // app name: print pkg|label directly (no OK line)
                        System.out.println(arg + "|" + getAppLabel(arg));
                        System.out.flush();
                        break;
                    case 'E':
                        // editable state: cached value from background watcher
                        System.out.println("E " + lastEditableState);
                        System.out.flush();
                        break;
                                        case 'G':
                        // clipboard read-back (uses shell package for uid check)
                        String ct = getClipboardText();
                        System.out.println("G " + (ct != null ? ct : "<null>"));
                        System.out.flush();
                        break;
                    default:
                        keyTap(Integer.parseInt(line));
                        break;
                }

                System.out.println("OK " + line);
                System.out.flush();
            } catch (Exception e) {
                System.out.println("ERR " + e);
                Throwable cause = e.getCause();
                if (cause != null) {
                    System.out.println("  CAUSE " + cause);
                    for (StackTraceElement el : cause.getStackTrace()) {
                        System.out.println("    at " + el);
                    }
                }
                for (StackTraceElement el : e.getStackTrace()) {
                    System.out.println("  at " + el);
                }
                System.out.flush();
            }
        }
        System.out.println("BYE");
        System.out.flush();
    }

    // ── Key injection ──────────────────────────────

    private static void injectKey(int action, int code, int repeat, long downTime) throws Exception {
        long now = SystemClock.uptimeMillis();
        KeyEvent ev = new KeyEvent(downTime, now, action, code, repeat, 0,
                KeyCharacterMap.VIRTUAL_KEYBOARD, 0, 0, InputDevice.SOURCE_KEYBOARD);
        injectMethod.invoke(inputManager, ev, INJECT_MODE);
    }

    // down with FLAG_LONG_PRESS (repeat=1) — used for menu fix and L command
    private static void injectKeyLongPress(int code, long downTime) throws Exception {
        long t = SystemClock.uptimeMillis();
        KeyEvent ev = new KeyEvent(downTime, t, KeyEvent.ACTION_DOWN, code, 1, 0,
                KeyCharacterMap.VIRTUAL_KEYBOARD, 0, KeyEvent.FLAG_LONG_PRESS,
                InputDevice.SOURCE_KEYBOARD);
        injectMethod.invoke(inputManager, ev, INJECT_MODE);
    }

    // D <code> — key down, current time as downTime
    private static void keyDown(int code) throws Exception {
        injectKey(KeyEvent.ACTION_DOWN, code, 0, SystemClock.uptimeMillis());
    }

    // U <code> — key up, independent timestamp
    private static void keyUp(int code) throws Exception {
        injectKey(KeyEvent.ACTION_UP, code, 0, SystemClock.uptimeMillis());
    }

    // bare <code> — tap with a single downTime (like input keyevent)
    private static void keyTap(int code) throws Exception {
        long now = SystemClock.uptimeMillis();
        injectKey(KeyEvent.ACTION_DOWN, code, 0, now);
        injectKey(KeyEvent.ACTION_UP, code, 0, now);
    }

    // L <code> — long-press tap: down + down(repeat=1, FLAG_LONG_PRESS) + up
    // Same sequence as `input keyevent --longpress`; needed on some TVs where
    // injected plain MENU taps are ignored by the system policy.
    private static void longPressTap(int code) throws Exception {
        long now = SystemClock.uptimeMillis();
        injectKey(KeyEvent.ACTION_DOWN, code, 0, now);
        injectKeyLongPress(code, now);
        injectKey(KeyEvent.ACTION_UP, code, 0, now);
    }

    private static void injectKeyDown(int code, int meta, long downTime) throws Exception {
        long now = SystemClock.uptimeMillis();
        KeyEvent ev = new KeyEvent(downTime, now, KeyEvent.ACTION_DOWN, code, 0, meta,
                KeyCharacterMap.VIRTUAL_KEYBOARD, 0, 0, InputDevice.SOURCE_KEYBOARD);
        injectMethod.invoke(inputManager, ev, INJECT_MODE);
    }

    private static void injectKeyUp(int code, int meta, long downTime) throws Exception {
        long now = SystemClock.uptimeMillis();
        KeyEvent ev = new KeyEvent(downTime, now, KeyEvent.ACTION_UP, code, 0, meta,
                KeyCharacterMap.VIRTUAL_KEYBOARD, 0, 0, InputDevice.SOURCE_KEYBOARD);
        injectMethod.invoke(inputManager, ev, INJECT_MODE);
    }

    private static void injectCombo(int keyCode, int meta) throws Exception {
        long now = SystemClock.uptimeMillis();
        injectKeyDown(KeyEvent.KEYCODE_CTRL_LEFT, meta, now);
        injectKeyDown(keyCode, meta, now);
        injectKeyUp(keyCode, meta, now);
        // Ctrl release must NOT carry the CTRL meta flag (matches yadb / real input)
        injectKeyUp(KeyEvent.KEYCODE_CTRL_LEFT, 0, now);
    }

    // ── Clipboard via IClipboard interface (reflection, like yadb) ─
    // Direct transact() with hardcoded codes is unreliable across Android
    // versions (setPrimaryClip signature changed with callingPackage).

    private static Object iClipboard; // IClipboard proxy

    private static void ensureIClipboard() throws Exception {
        if (iClipboard != null) return;
        Class<?> smClass = Class.forName("android.os.ServiceManager");
        IBinder b = (IBinder) smClass.getMethod("getService", String.class).invoke(null, "clipboard");
        Class<?> stubClass = Class.forName("android.content.IClipboard$Stub");
        iClipboard = stubClass.getMethod("asInterface", IBinder.class).invoke(null, b);
    }

    private static Method findIClipboardMethod(String name) throws Exception {
        ensureIClipboard();
        for (Method m : iClipboard.getClass().getMethods()) {
            if (m.getName().equals(name)) return m;
        }
        return null;
    }

    private static boolean setClipboard(String text) {
        try {
            ClipData clip = ClipData.newPlainText("", text);
            Method m = findIClipboardMethod("setPrimaryClip");
            if (m == null) return false;
            Class<?>[] params = m.getParameterTypes();
            if (params.length == 1) {
                m.invoke(iClipboard, clip);
            } else if (params.length == 2) {
                m.invoke(iClipboard, clip, "");
            } else if (params.length >= 3) {
                // callingPackage must belong to our uid (2000 = com.android.shell)
                m.invoke(iClipboard, clip, "com.android.shell", 0);
            } else {
                return false;
            }
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    private static String getClipboardText() {
        try {
            Method m = findIClipboardMethod("getPrimaryClip");
            if (m == null) return null;
            Class<?>[] params = m.getParameterTypes();
            ClipData clip = (ClipData) (params.length == 2
                    ? m.invoke(iClipboard, "com.android.shell", 0)
                    : m.invoke(iClipboard));
            if (clip == null || clip.getItemCount() == 0) return null;
            CharSequence t = clip.getItemAt(0).getText();
            return t != null ? t.toString() : null;
        } catch (Exception e) {
            return null;
        }
    }

    // ── Text input (clear-then-paste) ─────────────

    private static void typeText(String text) throws Exception {
        // Unescape: server sends \\ for backslash, \n for newline
        text = text.replace("\\\\", "\\").replace("\\n", "\n");
        long now = SystemClock.uptimeMillis();
        try {
            // Hold Ctrl once across the whole select-all + paste sequence
            injectKeyDown(KeyEvent.KEYCODE_CTRL_LEFT, META_CTRL, now);
            injectKeyDown(KeyEvent.KEYCODE_A, META_CTRL, now);   // select all
            injectKeyUp(KeyEvent.KEYCODE_A, META_CTRL, now);
            Thread.sleep(200);
            if (setClipboard(text)) {
                injectKeyDown(KeyEvent.KEYCODE_V, META_CTRL, now); // paste replaces selection
                injectKeyUp(KeyEvent.KEYCODE_V, META_CTRL, now);
                Thread.sleep(100);
            } else {
                // Fallback: input text (ASCII only)
                if (text.matches("\\A\\p{ASCII}*\\z")) {
                    Runtime.getRuntime().exec(
                            new String[]{"input", "text", text.replace(" ", "%s")}).waitFor();
                }
            }
        } finally {
            injectKeyUp(KeyEvent.KEYCODE_CTRL_LEFT, 0, now); // release Ctrl
        }
    }

    // ── Clear text ────────────────────────────────

    private static void clearText() throws Exception {
        // Select all + delete
        injectCombo(KeyEvent.KEYCODE_A, META_CTRL);
        long now = SystemClock.uptimeMillis();
        injectKey(KeyEvent.ACTION_DOWN, KeyEvent.KEYCODE_DEL, 0, now);
        injectKey(KeyEvent.ACTION_UP, KeyEvent.KEYCODE_DEL, 0, now);
    }

    // ── App icon dump ──────────────────────────────
    // I <pkg> → render app icon to /data/local/tmp/icon_<pkg>.png

    private static Object sysContext;
    private static Object packageManager;
    private static boolean looperPrepared = false;

    private static synchronized void ensureSystemContext() throws Exception {
        if (sysContext != null) return;
        if (!looperPrepared) {
            Looper.prepare();  // systemMain creates a Handler, needs a Looper
            looperPrepared = true;
        }
        Class<?> atClass = Class.forName("android.app.ActivityThread");
        Object at = atClass.getMethod("systemMain").invoke(null);
        sysContext = atClass.getMethod("getSystemContext").invoke(at);
        packageManager = sysContext.getClass().getMethod("getPackageManager").invoke(sysContext);
    }

    private static void dumpIcon(String pkg) throws Exception {
        ensureSystemContext();

        Method getAppIcon = packageManager.getClass().getMethod("getApplicationIcon", String.class);
        Drawable icon = (Drawable) getAppIcon.invoke(packageManager, pkg);
        // Draw the icon (works for BitmapDrawable, AdaptiveIconDrawable, etc.)
        int size = 192;
        Bitmap bmp = Bitmap.createBitmap(size, size, Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(bmp);
        icon.setBounds(0, 0, size, size);
        icon.draw(canvas);

        // Write PNG
        String outPath = "/data/local/tmp/icon_" + pkg + ".png";
        FileOutputStream fos = new FileOutputStream(outPath);
        bmp.compress(Bitmap.CompressFormat.PNG, 100, fos);
        fos.close();
        bmp.recycle();
    }

    // N <pkg> — real app label via PackageManager
    private static String getAppLabel(String pkg) {
        try {
            ensureSystemContext();
            Method getAppInfo = packageManager.getClass().getMethod(
                    "getApplicationInfo", String.class, int.class);
            Object appInfo = getAppInfo.invoke(packageManager, pkg, 0);
            Method loadLabel = appInfo.getClass().getMethod("loadLabel",
                    Class.forName("android.content.pm.PackageManager"));
            CharSequence label = (CharSequence) loadLabel.invoke(appInfo, packageManager);
            if (label != null && label.length() > 0) return label.toString();
        } catch (Exception e) {
            System.out.println("  NERR " + pkg + " " + e);
            System.out.flush();
        }
        return pkg;
    }

    // ── Editable-field watcher (background, event-driven, never blocks main) ──
    // Uses UiAutomation.executeAndWaitForEvent() so we wake up on real
    // accessibility events (focus / text change) instead of polling.
    // On change it pushes "S editable|text" to stdout so the server can
    // broadcast without polling either.

    private static volatile String lastEditableState = "none|";
    private static volatile boolean watcherStarted = false;

    private static String queryEditable(UiAutomation uia) {
        try {
            AccessibilityNodeInfo root = uia.getRootInActiveWindow();
            if (root != null) {
                AccessibilityNodeInfo focused = root.findFocus(AccessibilityNodeInfo.FOCUS_INPUT);
                if (focused != null) {
                    boolean editable = focused.isEditable()
                            || focused.getClassName() != null
                            && focused.getClassName().toString().toLowerCase().contains("edittext");
                    CharSequence text = focused.getText();
                    String t = text != null ? text.toString() : "";
                    // Empty EditText may report its placeholder (hint) as text — filter it out
                    try {
                        CharSequence hint = focused.getHintText();
                        if (hint != null && hint.length() > 0 && hint.toString().equals(t)) {
                            t = "";
                        }
                    } catch (Exception e) { /* getHintText may be unavailable */ }
                    String state = (editable ? "editable|" : "none|") + t;
                    focused.recycle();
                    root.recycle();
                    return state;
                }
                root.recycle();
            }
        } catch (Exception e) { /* keep last state */ }
        return "none|";
    }

    private static void startEditableWatcher() {
        if (watcherStarted) return;
        watcherStarted = true;
        Thread t = new Thread(() -> {
            // UiAutomation is globally unique — retry connect in case another
            // daemon session holds it; never block or kill the main loop.
            while (true) {
                try {
                    runWatcherLoop();
                    break; // loop exited normally (shouldn't happen)
                } catch (Exception e) {
                    // connect failed (e.g. already registered) — retry later
                    try { Thread.sleep(2000); } catch (InterruptedException ie) { break; }
                }
            }
        });
        t.setDaemon(true);
        t.start();
    }

    private static void runWatcherLoop() throws Exception {
        // UiAutomation init (may block — fine, it's a background thread)
        HandlerThread ht = new HandlerThread("uia");
        ht.start();
        Class<?> connClass = Class.forName("android.app.UiAutomationConnection");
        Object conn = connClass.getConstructor().newInstance();
        Constructor<?> ctor = UiAutomation.class.getConstructor(Looper.class,
                Class.forName("android.app.IUiAutomationConnection"));
        UiAutomation uia = (UiAutomation) ctor.newInstance(ht.getLooper(), conn);
        UiAutomation.class.getMethod("connect").invoke(uia);

        Method waitEvent = UiAutomation.class.getMethod("executeAndWaitForEvent",
                Runnable.class,
                Class.forName("android.app.UiAutomation$AccessibilityEventFilter"),
                long.class);

        // Hidden AccessibilityEventFilter interface — implement via proxy
        Class<?> filterClass = Class.forName(
                "android.app.UiAutomation$AccessibilityEventFilter");
        Object filter = java.lang.reflect.Proxy.newProxyInstance(
                filterClass.getClassLoader(),
                new Class<?>[]{filterClass},
                (proxy, method, args) -> {
                    if (method.getName().equals("accept")) {
                        AccessibilityEvent event = (AccessibilityEvent) args[0];
                        int type = event.getEventType();
                        return type == AccessibilityEvent.TYPE_VIEW_FOCUSED
                                || type == AccessibilityEvent.TYPE_VIEW_TEXT_CHANGED
                                || type == AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED;
                    }
                    return null;
                });

        while (true) {
            try {
                // Block until a relevant accessibility event fires (or 8s timeout)
                waitEvent.invoke(uia, (Runnable) () -> {}, filter, 8000L);
            } catch (Exception e) { /* timeout or error — still re-check */ }
            // Re-query and push if changed
            String state = queryEditable(uia);
            if (!state.equals(lastEditableState)) {
                lastEditableState = state;
                System.out.println("S " + state);
                System.out.flush();
            }
        }
    }
}
