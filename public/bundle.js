var y={zh:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"已连接",statusDisconnected:"未连接",statusReconnecting:"重连中…",statusChecking:"连接中…",statusAuth:"等待授权",statusError:"错误",statusNoDevice:"未设置设备",statusTapReconnect:"点击重连",statusTapRetry:"点击重试 — 在 TV 上确认",statusTapCheck:"点击检查",authHint1:"⚠️ 等待 TV 授权。请在电视上确认调试授权弹窗。",authHint2:"如未弹出，请在 TV 设置中：撤销 USB 调试授权，然后关闭再重开 ADB 调试。",authForceBtn:"强制重新认证",authApproving:"正在 TV 上确认…",actionBack:"返回",actionHome:"主页",actionMenu:"菜单",quickLaunch:"快捷启动应用",addApp:"添加应用",textInput:"文本输入",textModalTitle:"在 TV 上输入",textPlaceholder:"输入要发送的文本…",clear:"清空",cancel:"取消",send:"发送",pickerTitle:"选择应用",searchPlaceholder:"\uD83D\uDD0D 搜索应用…",noAppsFound:"未找到应用",settingsTitle:"设置",settingMenuFix:"菜单键修复",settingMenuFixDesc:"若菜单键单击不灵敏（需要双击）可开启",settingDpadRepeat:"方向键长按重复",settingDpadRepeatDesc:"长按上下左右时自动连续触发",close:"关闭",editTitle:"编辑应用",editName:"应用名称",editUpload:"上传图标",editDelete:"删除",editSave:"保存",editCancel:"取消",toastAdded:"已添加",toastRemoved:"已移除",toastLaunching:"启动中",toastClearing:"清空中…",toastCleared:"已清空",toastSent:"已发送",toastSaved:"已保存",toastConnecting:"连接中…",toastConnected:"✓ 已连接",toastFailed:"✗ 失败",toastForceReconnect:"强制重连中… 请查看 TV",toastApproveOnTv:"\uD83D\uDD10 请查看 TV 屏幕",toastSentFail:"✗ 发送失败",toastLaunchFail:"✗ 启动失败",titleTapLaunch:"点击启动 · 长按移除",volUp:"音量+",volDown:"音量-",prev:"上一个",next:"下一个",rewind:"快退",fastForward:"快进",playPause:"播放/暂停",mute:"静音",up:"上",down:"下",left:"左",right:"右",ok:"确定"},en:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"Connected",statusDisconnected:"Disconnected",statusReconnecting:"Reconnecting…",statusChecking:"Connecting…",statusAuth:"Waiting for approval",statusError:"Error",statusNoDevice:"No device",statusTapReconnect:"Tap to reconnect",statusTapRetry:"Tap to retry — approve on TV",statusTapCheck:"Tap to check",authHint1:"⚠️ Waiting for TV approval. Check the debug authorization dialog on your TV.",authHint2:"If it doesn't appear: revoke USB debugging authorizations, then toggle ADB debugging off/on.",authForceBtn:"Force Re-authenticate",authApproving:"Approve on TV…",actionBack:"Back",actionHome:"Home",actionMenu:"Menu",quickLaunch:"Quick Launch",addApp:"Add App",textInput:"Text Input",textModalTitle:"Type on TV",textPlaceholder:"Enter text to send…",clear:"Clear",cancel:"Cancel",send:"Send",pickerTitle:"Select App",searchPlaceholder:"\uD83D\uDD0D Search apps…",noAppsFound:"No apps found",settingsTitle:"Settings",settingMenuFix:"Menu Key Fix",settingMenuFixDesc:"Enable if the menu key needs a double-tap to respond",settingDpadRepeat:"D-pad Key Repeat",settingDpadRepeatDesc:"Auto-repeat when holding up/down/left/right",close:"Close",editTitle:"Edit App",editName:"App name",editUpload:"Upload icon",editDelete:"Delete",editSave:"Save",editCancel:"Cancel",toastAdded:"✓ Added",toastRemoved:"✗ Removed",toastLaunching:"Launching",toastClearing:"Clearing…",toastCleared:"✓ Cleared",toastSent:"✓ Sent",toastSaved:"✓ Saved",toastConnecting:"Connecting…",toastConnected:"✓ Connected",toastFailed:"✗ Failed",toastForceReconnect:"Force reconnecting… check TV",toastApproveOnTv:"\uD83D\uDD10 Look at your TV screen",toastSentFail:"✗ Failed to send",toastLaunchFail:"✗ Failed to launch",titleTapLaunch:"Tap to launch · Long-press to remove",volUp:"Vol+",volDown:"Vol-",prev:"Prev",next:"Next",rewind:"Rewind",fastForward:"FF",playPause:"Play/Pause",mute:"Mute",up:"Up",down:"Down",left:"Left",right:"Right",ok:"OK"}};function h1(){return(navigator.language||navigator.userLanguage||"en").toLowerCase().startsWith("zh")?"zh":"en"}var a1=h1(),r=(h)=>y[a1][h]??y.en[h]??h;function u(h){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${h}</svg>`}var B={"chevron-up":u('<path d="m18 15-6-6-6 6" />'),"chevron-down":u('<path d="m6 9 6 6 6-6" />'),"chevron-left":u('<path d="m15 18-6-6 6-6" />'),"chevron-right":u('<path d="m9 18 6-6-6-6" />'),check:u('<path d="M20 6 9 17l-5-5" />'),circle:u('<circle cx="12" cy="12" r="10" />'),"corner-up-left":u(`<path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  <path d="M9 14 4 9l5-5" />`),home:u(`<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />`),menu:u(`<path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />`),keyboard:u(`<path d="M10 8h.01" />
  <path d="M12 12h.01" />
  <path d="M14 8h.01" />
  <path d="M16 12h.01" />
  <path d="M18 8h.01" />
  <path d="M6 8h.01" />
  <path d="M7 16h10" />
  <path d="M8 12h.01" />
  <rect width="20" height="16" x="2" y="4" rx="2" />`),settings:u(`<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />`),plus:u(`<path d="M5 12h14" />
  <path d="M12 5v14" />`),"app-window":u(`<rect x="2" y="4" width="20" height="16" rx="2" />
  <path d="M10 4v4" />
  <path d="M2 8h20" />
  <path d="M6 4v4" />`),"trash-2":u(`<path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />`),send:u(`<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
  <path d="m21.854 2.147-10.94 10.939" />`),x:u(`<path d="M18 6 6 18" />
  <path d="m6 6 12 12" />`),search:u(`<path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />`),"volume-2":u(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />
  <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />`),"volume-1":u(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />`),"volume-x":u(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <line x1="22" x2="16" y1="9" y2="15" />
  <line x1="16" x2="22" y1="9" y2="15" />`),"skip-back":u(`<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
  <path d="M3 20V4" />`),rewind:u(`<path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" />
  <path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" />`),play:u('<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />'),"fast-forward":u(`<path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" />
  <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />`),"skip-forward":u(`<path d="M21 4v16" />
  <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />`),"refresh-cw":u(`<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
  <path d="M8 16H3v5" />`),tv:u(`<path d="m17 2-5 5-5-5" />
  <rect width="20" height="15" x="2" y="7" rx="2" />`),upload:u(`<path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />`)};var n=(h,a=22)=>`<span class="lic">${B[h].replace("<svg",`<svg width="${a}" height="${a}"`)}</span>`,X=[],w=[],P,Q=!1,G=!1,Z="",O=document.getElementById("app"),A=null;function g(){let h=location.protocol==="https:"?"wss":"ws";A=new WebSocket(`${h}://${location.host}/ws`),A.onopen=()=>{console.log("WS open"),z("connected"),M({favGet:!0})},A.onclose=()=>{A=null,z("disconnected"),setTimeout(g,2000)},A.onmessage=(a)=>{let t=JSON.parse(a.data);if(t.ping)return;if(t.type==="status"){r1(t);return}if(t.type==="apps"){w=t.apps,_(w);return}if(t.type==="favorites"){X=t.favorites,C1();return}if(t.type==="inputState"){G=t.editable,Z=t.text||"",t1();return}if(t.error)d(`✗ ${t.error}`);else if(t.method==="yadb")d(r("toastSent"));else if(t.method==="yadb_clear")d(r("toastCleared"));else if(t.connected!==void 0)d(t.connected?r("toastConnected"):r("toastFailed"))}}function M(h){if(A?.readyState===WebSocket.OPEN)return A.send(JSON.stringify(h)),!0;return!1}function t1(){let h=document.getElementById("btnText");if(!h)return;let a=h.querySelector(".tv-input-dot");if(G){if(h.classList.add("tv-input-active"),!a){let t=document.createElement("span");t.className="tv-input-dot",h.appendChild(t)}}else h.classList.remove("tv-input-active"),a?.remove()}function z(h){let a=document.getElementById("statusDot"),t=document.getElementById("statusLabel"),o=document.getElementById("authHint");switch(h){case"connected":a.className="status-dot on",t.textContent=r("statusConnected"),o.classList.add("hidden"),$(!0),Q=!0;break;case"disconnected":a.className="status-dot off",t.textContent=A?r("statusDisconnected"):r("statusReconnecting"),o.classList.add("hidden"),$(!1),Q=!1;break;case"auth":a.className="status-dot auth",t.textContent=r("statusAuth"),o.classList.remove("hidden"),$(!1),Q=!1;break;case"checking":a.className="status-dot off",t.textContent=r("statusChecking"),o.classList.add("hidden"),$(!1),Q=!1;break}}function r1(h){switch(h.adbState){case"connected":z("connected");break;case"auth_required":z("auth");break;case"disconnected":case"no_device":z("disconnected");break}}function $(h){O.querySelectorAll(".dpad-btn:not(.empty), .action-btn, .media-btn, .btn-kbd, .app-chip:not(.add-chip)").forEach((a)=>{a.style.opacity=h?"":"0.4",a.style.pointerEvents=h?"":"none"})}function n1(){z("checking"),M({connect:!0})}function u1(){z("checking"),d(r("toastForceReconnect")),F([30,30,30]),M({forceReconnect:!0})}function d(h){let a=document.getElementById("toast");a.textContent=h,a.classList.add("show"),clearTimeout(P),P=setTimeout(()=>a.classList.remove("show"),2000)}function V(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var K=!0,j=null,R=null,H=null,o1=new Set(["up","down","left","right"]),c1=500,M1=50,f={menuFix:!1,dpadRepeat:!0};function v1(){try{let h=localStorage.getItem("tv-remote-settings");if(h)f={...f,...JSON.parse(h)}}catch{}}function i(){try{localStorage.setItem("tv-remote-settings",JSON.stringify(f))}catch{}}function l(){let h=document.getElementById("menuFixToggle"),a=document.getElementById("dpadRepeatToggle");if(h)h.checked=f.menuFix;if(a)a.checked=f.dpadRepeat;K=f.dpadRepeat}function p1(h){f.menuFix=h,i(),F(12)}function d1(h){f.dpadRepeat=h,K=h,i(),F(12)}function f1(){l(),document.getElementById("settingsModal").classList.remove("hidden")}function S(){document.getElementById("settingsModal").classList.add("hidden")}function F(h){try{navigator.vibrate?.(h)}catch{}}function x1(h){let a=document.querySelector(`[data-key="${h}"]`);if(a)a.classList.add("pressed");if(F(12),f.menuFix&&h==="menu"){M({keyLong:h});return}if(M({keydown:h}),K&&o1.has(h))H=h,R=setTimeout(()=>{if(H===h)j=setInterval(()=>{if(H===h)F(6),M({keydown:h})},M1)},c1)}function J(h){let a=document.querySelector(`[data-key="${h}"]`);if(a)a.classList.remove("pressed");if(f.menuFix&&h==="menu")return;if(H===h)clearTimeout(R),clearInterval(j),R=j=null,H=null,F(8);M({keyup:h})}function L1(){document.getElementById("textModal").classList.remove("hidden");let h=document.getElementById("textInput");if(G&&Z)h.value=Z;else h.value="";E(),setTimeout(()=>{h.focus(),h.select(),setTimeout(()=>{document.getElementById("textModal").scrollIntoView({block:"start"})},300)},100)}function E(){let h=document.getElementById("textInput"),a=document.getElementById("btnAction");if(h.value.trim().length>0)a.innerHTML=`${n("send",18)} ${r("send")}`,a.className="btn-primary";else a.innerHTML=`${n("trash-2",18)} ${r("clear")}`,a.className="btn-cancel"}function U(){if(document.getElementById("textInput").value.trim().length>0)A1();else V1()}function I(){document.getElementById("textModal").classList.add("hidden"),document.getElementById("textInput").value=""}function A1(){let a=document.getElementById("textInput").value.trim();if(!a)return;F([15,25,15]),M({text:a}),I()}function V1(){F([10,20,10]),M({clear:!0})}async function F1(h,a){M({favAdd:{pkg:h,label:a}}),d(`${r("toastAdded")}: ${a}`),e()}function z1(h){M({favDel:h}),d(r("toastRemoved"))}var N="",C=null;async function m(h,a){N=h,C=null,document.getElementById("editName").value=a,document.getElementById("editFile").value="";let t=document.getElementById("editIconPreview"),o=await Y(`custom_${h}`);if(o)t.src=URL.createObjectURL(o);else if(L.get(h))t.src=L.get(h);else try{let c=await fetch(`/icons/apps/${encodeURIComponent(h)}.png`);if(c.ok){let v=await c.blob();await q(h,v);let x=URL.createObjectURL(v);L.set(h,x),t.src=x}}catch{}t.classList.remove("hidden"),document.getElementById("editModal").classList.remove("hidden")}function s(){document.getElementById("editModal").classList.add("hidden")}function D1(){let h=document.getElementById("editFile").files?.[0];if(!h)return;C=h,document.getElementById("editIconPreview").src=URL.createObjectURL(h)}async function W(){let h=document.getElementById("editName").value.trim();if(!h)return;if(C)await q(`custom_${N}`,C),L.set(`custom_${N}`,URL.createObjectURL(C));M({favUpdate:{pkg:N,label:h}}),d(r("toastSaved")),s()}function H1(){M({favDel:N}),d(r("toastRemoved")),s()}function N1(h,a){M({launch:h}),d(`${r("toastLaunching")}: ${a}`)}function C1(){let h=document.getElementById("favApps"),a=`<button class="app-chip add-chip" id="addAppBtn" title="${r("addApp")}">${n("plus",26)}</button>`;if(!X.length)h.innerHTML=a;else h.innerHTML=X.map((t)=>`
      <button class="app-chip" data-pkg="${V(t.pkg)}" title="${r("titleTapLaunch")}">
        <span class="app-emoji"><img class="app-img" data-pkg="${V(t.pkg)}" alt="" loading="lazy"><span class="app-fallback">${n("app-window",22)}</span></span>
        <span class="app-name">${V(t.label)}</span>
        <span class="delete-badge">${n("x",12)}</span>
      </button>`).join("")+a;document.getElementById("addAppBtn")?.addEventListener("click",w1),h.querySelectorAll(".app-chip:not(.add-chip)").forEach((t)=>{let o=t.dataset.pkg,c=t.querySelector(".app-name")?.textContent||o,v=t.querySelector("img.app-img");if(v)b(v,o);t.addEventListener("click",()=>{if(!p)N1(o,c)}),t.addEventListener("contextmenu",(D)=>{D.preventDefault(),m(o,c)});let x,p=!1;t.addEventListener("pointerdown",()=>{p=!1,x=setTimeout(()=>{p=!0,m(o,c)},600)}),t.addEventListener("pointerup",()=>{clearTimeout(x)}),t.addEventListener("pointerleave",()=>{clearTimeout(x)}),t.querySelector(".delete-badge")?.addEventListener("click",(D)=>{D.stopPropagation(),z1(o)})})}async function w1(){if(document.getElementById("pickerModal").classList.remove("hidden"),document.getElementById("appSpinner").style.display="block",document.getElementById("appSearch").value="",!w.length)M({appList:!0});else _(w)}function e(){document.getElementById("pickerModal").classList.add("hidden")}function T1(){let h=document.getElementById("appSearch").value.toLowerCase();_(w.filter((a)=>a.label.toLowerCase().includes(h)||a.pkg.toLowerCase().includes(h)))}function _(h){let a=document.getElementById("appPickerList");if(document.getElementById("appSpinner").style.display="none",!h.length){a.innerHTML=`<div style="padding:20px;text-align:center;color:#999">${r("noAppsFound")}</div>`;return}a.innerHTML=h.map((t)=>`
    <button class="picker-item" data-pkg="${V(t.pkg)}" data-label="${V(t.label)}">
      <span class="picker-ic"><img class="app-img" data-pkg="${V(t.pkg)}" alt="" loading="lazy"><span class="app-fallback">${n("app-window",22)}</span></span>
      <div><div>${V(t.label)}</div><div class="pkg-sub">${V(t.pkg)}</div></div>
    </button>`).join(""),a.querySelectorAll(".picker-item").forEach((t)=>{t.addEventListener("click",()=>F1(t.dataset.pkg,t.dataset.label));let o=t.querySelector("img.app-img");if(o)b(o,o.dataset.pkg)})}var Q1="tv-remote-icons",T="icons",L=new Map;function k(){return new Promise((h,a)=>{let t=indexedDB.open(Q1,1);t.onupgradeneeded=()=>t.result.createObjectStore(T,{keyPath:"pkg"}),t.onsuccess=()=>h(t.result),t.onerror=()=>a(t.error)})}function Y(h){return new Promise(async(a)=>{try{let c=(await k()).transaction(T,"readonly").objectStore(T).get(h);c.onsuccess=()=>a(c.result?.blob??null),c.onerror=()=>a(null)}catch{a(null)}})}function q(h,a){return new Promise(async(t)=>{try{let c=(await k()).transaction(T,"readwrite");c.objectStore(T).put({pkg:h,blob:a}),c.oncomplete=()=>t(),c.onerror=()=>t()}catch{t()}})}async function b(h,a){let t=()=>{h.classList.add("hidden"),h.nextElementSibling?.classList.remove("hidden")},o=(p)=>{h.src=p,h.classList.remove("hidden"),h.nextElementSibling?.classList.add("hidden")},c=await Y(`custom_${a}`);if(c){let p=L.get(`custom_${a}`);if(!p)p=URL.createObjectURL(c),L.set(`custom_${a}`,p);o(p);return}let v=L.get(a);if(v){o(v);return}let x=await Y(a);if(x){v=URL.createObjectURL(x),L.set(a,v),o(v);return}try{let p=await fetch(`/icons/apps/${encodeURIComponent(a)}.png`);if(p.ok){let D=await p.blob();await q(a,D),v=URL.createObjectURL(D),L.set(a,v),o(v);return}}catch{}t()}function $1(){O.innerHTML=`
    <div class="remote-header">
      <h1>${n("tv",22)} TV Remote</h1>
      <div class="header-right">
        <button class="icon-btn" id="btnSettings" title="⚙"><span class="settings-ic">${n("settings",20)}</span></button>
        <div class="status-area" id="statusArea" title="${r("statusTapReconnect")}">
          <span class="status-label" id="statusLabel">${r("statusChecking")}</span>
          <div class="status-dot" id="statusDot"></div>
        </div>
      </div>
    </div>
    <div class="auth-hint hidden" id="authHint">
      <div class="auth-hint-text">
        ${r("authHint1")}<br>
        ${r("authHint2")}
      </div>
      <button class="auth-force-btn" id="btnForceReconnect">${n("refresh-cw",18)} ${r("authForceBtn")}</button>
    </div>
    <div class="main-layout">
      <div class="dpad-col">
        <div class="dpad">
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="up" aria-label="${r("up")}">${n("chevron-up",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="left" aria-label="${r("left")}">${n("chevron-left",30)}</button>
          <button class="dpad-btn ok-btn" data-key="ok" aria-label="${r("ok")}">${n("circle",26)}</button>
          <button class="dpad-btn" data-key="right" aria-label="${r("right")}">${n("chevron-right",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="down" aria-label="${r("down")}">${n("chevron-down",30)}</button>
          <button class="dpad-btn empty"></button>
        </div>
      </div>
      <div class="actions-col">
        <div class="action-grid">
          <button class="action-btn accent-back" data-key="back">${n("corner-up-left",22)}<span>${r("actionBack")}</span></button>
          <button class="action-btn accent-home" data-key="home">${n("home",22)}<span>${r("actionHome")}</span></button>
          <button class="action-btn" data-key="menu">${n("menu",22)}<span>${r("actionMenu")}</span></button>
        </div>
        <div class="media-row">
          <div class="media-group">
            <button class="media-btn" data-key="mute" title="${r("mute")}">${n("volume-x")}</button>
            <button class="media-btn" data-key="voldown" title="${r("volDown")}">${n("volume-1")}</button>
            <button class="media-btn" data-key="volup" title="${r("volUp")}">${n("volume-2")}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-title">${r("quickLaunch")}</div>
    <div class="app-scroll" id="favApps"></div>
    <div class="bottom-bar">
      <button class="btn-kbd" id="btnText">${n("keyboard",20)} ${r("textInput")}</button>
    </div>
    <div class="modal-overlay hidden" id="textModal">
      <div class="modal-box">
        <h2>${n("keyboard",18)} ${r("textModalTitle")}</h2>
        <textarea id="textInput" placeholder="${r("textPlaceholder")}"></textarea>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelText">${n("x",18)} ${r("cancel")}</button>
          <button class="btn-primary" id="btnAction">${n("send",18)} ${r("send")}</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay hidden" id="pickerModal">
      <div class="modal-box">
        <h2>${n("app-window",18)} ${r("pickerTitle")}</h2>
        <input type="text" id="appSearch" placeholder="${r("searchPlaceholder")}">
        <div class="app-picker-list" id="appPickerList">
          <div class="spinner" id="appSpinner"></div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelPicker">${n("x",18)} ${r("cancel")}</button>
        </div>
      </div>
    </div>

    <!-- Settings Modal -->
    <div class="modal-overlay hidden" id="settingsModal">
      <div class="modal-box">
        <h2>${n("settings",18)} ${r("settingsTitle")}</h2>
        <label class="setting-row">
          <div class="setting-info">
            <div class="setting-name">${r("settingMenuFix")}</div>
            <div class="setting-desc">${r("settingMenuFixDesc")}</div>
          </div>
          <input type="checkbox" class="toggle" id="menuFixToggle">
        </label>
        <label class="setting-row">
          <div class="setting-info">
            <div class="setting-name">${r("settingDpadRepeat")}</div>
            <div class="setting-desc">${r("settingDpadRepeatDesc")}</div>
          </div>
          <input type="checkbox" class="toggle" id="dpadRepeatToggle">
        </label>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCloseSettings">${r("close")}</button>
        </div>
      </div>
    </div>

    <!-- Edit App Modal -->
    <div class="modal-overlay hidden" id="editModal">
      <div class="modal-box">
        <h2>${n("app-window",18)} ${r("editTitle")}</h2>
        <div class="edit-icon-row">
          <img id="editIconPreview" class="edit-icon-preview" alt="">
          <label class="btn-cancel edit-upload-btn">${n("upload",16)} ${r("editUpload")}<input type="file" id="editFile" accept="image/*" hidden></label>
        </div>
        <input type="text" id="editName" placeholder="${r("editName")}">
        <div class="modal-row">
          <button class="btn-danger" id="btnDeleteApp">${n("trash-2",18)} ${r("editDelete")}</button>
          <button class="btn-cancel" id="btnCancelEdit">${r("editCancel")}</button>
          <button class="btn-primary" id="btnSaveEdit">${n("check",18)} ${r("editSave")}</button>
        </div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `}function s1(){document.getElementById("statusArea")?.addEventListener("click",n1),document.getElementById("btnForceReconnect")?.addEventListener("click",u1),document.getElementById("btnSettings")?.addEventListener("click",f1),document.getElementById("btnCloseSettings")?.addEventListener("click",S),document.getElementById("menuFixToggle")?.addEventListener("change",(h)=>{p1(h.target.checked)}),document.getElementById("dpadRepeatToggle")?.addEventListener("change",(h)=>{d1(h.target.checked)}),document.getElementById("settingsModal")?.addEventListener("click",(h)=>{if(h.target===h.currentTarget)S()}),document.getElementById("btnDeleteApp")?.addEventListener("click",H1),document.getElementById("btnCancelEdit")?.addEventListener("click",s),document.getElementById("btnSaveEdit")?.addEventListener("click",W),document.getElementById("editFile")?.addEventListener("change",D1),document.getElementById("editName")?.addEventListener("keydown",(h)=>{if(h.key==="Enter")h.preventDefault(),W()}),document.getElementById("editModal")?.addEventListener("click",(h)=>{if(h.target===h.currentTarget)s()}),O.querySelectorAll("[data-key]").forEach((h)=>{let a=h.dataset.key;h.addEventListener("pointerdown",(t)=>{t.preventDefault(),x1(a)}),h.addEventListener("pointerup",(t)=>{t.preventDefault(),J(a)}),h.addEventListener("pointerleave",()=>J(a)),h.addEventListener("pointercancel",()=>J(a))}),document.getElementById("btnText")?.addEventListener("click",L1),document.getElementById("btnCancelText")?.addEventListener("click",I),document.getElementById("btnAction")?.addEventListener("click",U),document.getElementById("textInput")?.addEventListener("input",E),document.getElementById("textInput")?.addEventListener("keydown",(h)=>{if(h.key==="Enter"&&!h.shiftKey)h.preventDefault(),U()}),document.getElementById("btnCancelPicker")?.addEventListener("click",e),document.getElementById("appSearch")?.addEventListener("input",T1)}v1();$1();s1();l();g();if(window.visualViewport)window.visualViewport.addEventListener("resize",()=>{let h=document.getElementById("textModal");if(h&&!h.classList.contains("hidden"))h.scrollIntoView({block:"start"})});if("serviceWorker"in navigator)navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then((h)=>{h.update().catch(()=>{})}).catch(()=>{});
