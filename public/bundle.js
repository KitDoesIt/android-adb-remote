var B={zh:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"已连接",statusDisconnected:"未连接",statusReconnecting:"重连中…",statusChecking:"连接中…",statusAuth:"等待授权",statusError:"错误",statusNoDevice:"未设置设备",statusTapReconnect:"点击重连",statusTapRetry:"点击重试 — 在 TV 上确认",statusTapCheck:"点击检查",authHint1:"⚠️ 等待 TV 授权。请在电视上确认调试授权弹窗。",authHint2:"如未弹出，请在 TV 设置中：撤销 USB 调试授权，然后关闭再重开 ADB 调试。",authForceBtn:"强制重新认证",authApproving:"正在 TV 上确认…",actionBack:"返回",actionHome:"主页",actionMenu:"菜单",quickLaunch:"快捷启动应用",addApp:"添加应用",textInput:"文本输入",textModalTitle:"在 TV 上输入",textPlaceholder:"输入要发送的文本…",clear:"清空",cancel:"取消",send:"发送",pickerTitle:"选择应用",searchPlaceholder:"\uD83D\uDD0D 搜索应用…",noAppsFound:"未找到应用",settingsTitle:"设置",settingMenuFix:"菜单键修复",settingMenuFixDesc:"若菜单键单击不灵敏（需要双击）可开启",settingDpadRepeat:"方向键长按重复",settingDpadRepeatDesc:"长按上下左右时自动连续触发",close:"关闭",editTitle:"编辑应用",editName:"应用名称",editUpload:"上传图标",editDelete:"删除",editSave:"保存",editCancel:"取消",toastAdded:"已添加",toastRemoved:"已移除",toastLaunching:"启动中",toastClearing:"清空中…",toastCleared:"已清空",toastSent:"已发送",toastSaved:"已保存",toastConnecting:"连接中…",toastConnected:"✓ 已连接",toastFailed:"✗ 失败",toastForceReconnect:"强制重连中… 请查看 TV",toastApproveOnTv:"\uD83D\uDD10 请查看 TV 屏幕",toastSentFail:"✗ 发送失败",toastLaunchFail:"✗ 启动失败",titleTapLaunch:"点击启动 · 长按移除",volUp:"音量+",volDown:"音量-",prev:"上一个",next:"下一个",rewind:"快退",fastForward:"快进",playPause:"播放/暂停",mute:"静音",up:"上",down:"下",left:"左",right:"右",ok:"确定"},en:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"Connected",statusDisconnected:"Disconnected",statusReconnecting:"Reconnecting…",statusChecking:"Connecting…",statusAuth:"Waiting for approval",statusError:"Error",statusNoDevice:"No device",statusTapReconnect:"Tap to reconnect",statusTapRetry:"Tap to retry — approve on TV",statusTapCheck:"Tap to check",authHint1:"⚠️ Waiting for TV approval. Check the debug authorization dialog on your TV.",authHint2:"If it doesn't appear: revoke USB debugging authorizations, then toggle ADB debugging off/on.",authForceBtn:"Force Re-authenticate",authApproving:"Approve on TV…",actionBack:"Back",actionHome:"Home",actionMenu:"Menu",quickLaunch:"Quick Launch",addApp:"Add App",textInput:"Text Input",textModalTitle:"Type on TV",textPlaceholder:"Enter text to send…",clear:"Clear",cancel:"Cancel",send:"Send",pickerTitle:"Select App",searchPlaceholder:"\uD83D\uDD0D Search apps…",noAppsFound:"No apps found",settingsTitle:"Settings",settingMenuFix:"Menu Key Fix",settingMenuFixDesc:"Enable if the menu key needs a double-tap to respond",settingDpadRepeat:"D-pad Key Repeat",settingDpadRepeatDesc:"Auto-repeat when holding up/down/left/right",close:"Close",editTitle:"Edit App",editName:"App name",editUpload:"Upload icon",editDelete:"Delete",editSave:"Save",editCancel:"Cancel",toastAdded:"✓ Added",toastRemoved:"✗ Removed",toastLaunching:"Launching",toastClearing:"Clearing…",toastCleared:"✓ Cleared",toastSent:"✓ Sent",toastSaved:"✓ Saved",toastConnecting:"Connecting…",toastConnected:"✓ Connected",toastFailed:"✗ Failed",toastForceReconnect:"Force reconnecting… check TV",toastApproveOnTv:"\uD83D\uDD10 Look at your TV screen",toastSentFail:"✗ Failed to send",toastLaunchFail:"✗ Failed to launch",titleTapLaunch:"Tap to launch · Long-press to remove",volUp:"Vol+",volDown:"Vol-",prev:"Prev",next:"Next",rewind:"Rewind",fastForward:"FF",playPause:"Play/Pause",mute:"Mute",up:"Up",down:"Down",left:"Left",right:"Right",ok:"OK"}};function a1(){return(navigator.language||navigator.userLanguage||"en").toLowerCase().startsWith("zh")?"zh":"en"}var t1=a1(),u=(h)=>B[t1][h]??B.en[h]??h;function M(h){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${h}</svg>`}var S={"chevron-up":M('<path d="m18 15-6-6-6 6" />'),"chevron-down":M('<path d="m6 9 6 6 6-6" />'),"chevron-left":M('<path d="m15 18-6-6 6-6" />'),"chevron-right":M('<path d="m9 18 6-6-6-6" />'),check:M('<path d="M20 6 9 17l-5-5" />'),circle:M('<circle cx="12" cy="12" r="10" />'),"corner-up-left":M(`<path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  <path d="M9 14 4 9l5-5" />`),home:M(`<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />`),menu:M(`<path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />`),keyboard:M(`<path d="M10 8h.01" />
  <path d="M12 12h.01" />
  <path d="M14 8h.01" />
  <path d="M16 12h.01" />
  <path d="M18 8h.01" />
  <path d="M6 8h.01" />
  <path d="M7 16h10" />
  <path d="M8 12h.01" />
  <rect width="20" height="16" x="2" y="4" rx="2" />`),settings:M(`<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />`),plus:M(`<path d="M5 12h14" />
  <path d="M12 5v14" />`),"app-window":M(`<rect x="2" y="4" width="20" height="16" rx="2" />
  <path d="M10 4v4" />
  <path d="M2 8h20" />
  <path d="M6 4v4" />`),"trash-2":M(`<path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />`),send:M(`<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
  <path d="m21.854 2.147-10.94 10.939" />`),x:M(`<path d="M18 6 6 18" />
  <path d="m6 6 12 12" />`),search:M(`<path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />`),"volume-2":M(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />
  <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />`),"volume-1":M(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />`),"volume-x":M(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <line x1="22" x2="16" y1="9" y2="15" />
  <line x1="16" x2="22" y1="9" y2="15" />`),"skip-back":M(`<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
  <path d="M3 20V4" />`),rewind:M(`<path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" />
  <path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" />`),play:M('<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />'),"fast-forward":M(`<path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" />
  <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />`),"skip-forward":M(`<path d="M21 4v16" />
  <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />`),"refresh-cw":M(`<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
  <path d="M8 16H3v5" />`),tv:M(`<path d="m17 2-5 5-5-5" />
  <rect width="20" height="15" x="2" y="7" rx="2" />`),upload:M(`<path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />`)};var r=(h,a=22)=>`<span class="lic">${S[h].replace("<svg",`<svg width="${a}" height="${a}"`)}</span>`,R=[],H=[],y,Q=!1,_=!1,Y="",q=document.getElementById("app"),V=null;function g(){let h=location.protocol==="https:"?"wss":"ws";V=new WebSocket(`${h}://${location.host}/ws`),V.onopen=()=>{console.log("WS open"),z("connected"),v({favGet:!0})},V.onclose=()=>{V=null,z("disconnected"),setTimeout(g,2000)},V.onmessage=(a)=>{let t=JSON.parse(a.data);if(t.ping)return;if(t.type==="status"){M1(t);return}if(t.type==="apps"){H=t.apps,X(H);return}if(t.type==="favorites"){R=t.favorites,e();return}if(t.type==="icons"){r1(t.icons);return}if(t.type==="inputState"){_=t.editable,Y=t.text||"",u1();return}if(t.error)L(`✗ ${t.error}`);else if(t.method==="yadb")L(u("toastSent"));else if(t.method==="yadb_clear")L(u("toastCleared"));else if(t.connected!==void 0)L(t.connected?u("toastConnected"):u("toastFailed"))}}function v(h){if(V?.readyState===WebSocket.OPEN)return V.send(JSON.stringify(h)),!0;return!1}function u1(){let h=document.getElementById("btnText");if(!h)return;let a=h.querySelector(".tv-input-dot");if(_){if(h.classList.add("tv-input-active"),!a){let t=document.createElement("span");t.className="tv-input-dot",h.appendChild(t)}}else h.classList.remove("tv-input-active"),a?.remove()}async function r1(h){let a=!1;for(let[t,n]of Object.entries(h))try{let o=atob(n),c=new Uint8Array(o.length);for(let p=0;p<o.length;p++)c[p]=o.charCodeAt(p);await Z(t,new Blob([c],{type:"image/png"})),x.delete(t),a=!0}catch{}if(a)e(),X(H)}function z(h){let a=document.getElementById("statusDot"),t=document.getElementById("statusLabel"),n=document.getElementById("authHint");switch(h){case"connected":a.className="status-dot on",t.textContent=u("statusConnected"),n.classList.add("hidden"),$(!0),Q=!0;break;case"disconnected":a.className="status-dot off",t.textContent=V?u("statusDisconnected"):u("statusReconnecting"),n.classList.add("hidden"),$(!1),Q=!1;break;case"auth":a.className="status-dot auth",t.textContent=u("statusAuth"),n.classList.remove("hidden"),$(!1),Q=!1;break;case"checking":a.className="status-dot off",t.textContent=u("statusChecking"),n.classList.add("hidden"),$(!1),Q=!1;break}}function M1(h){switch(h.adbState){case"connected":z("connected");break;case"auth_required":z("auth");break;case"disconnected":case"no_device":z("disconnected");break}}function $(h){q.querySelectorAll(".dpad-btn:not(.empty), .action-btn, .media-btn, .btn-kbd, .app-chip:not(.add-chip)").forEach((a)=>{a.style.opacity=h?"":"0.4",a.style.pointerEvents=h?"":"none"})}function n1(){z("checking"),v({connect:!0})}function o1(){z("checking"),L(u("toastForceReconnect")),F([30,30,30]),v({forceReconnect:!0})}function L(h){let a=document.getElementById("toast");a.textContent=h,a.classList.add("show"),clearTimeout(y),y=setTimeout(()=>a.classList.remove("show"),2000)}function d(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var s=!0,G=null,O=null,N=null,c1=new Set(["up","down","left","right"]),v1=500,p1=50,A={menuFix:!1,dpadRepeat:!0};function f1(){try{let h=localStorage.getItem("tv-remote-settings");if(h)A={...A,...JSON.parse(h)}}catch{}}function E(){try{localStorage.setItem("tv-remote-settings",JSON.stringify(A))}catch{}}function I(){let h=document.getElementById("menuFixToggle"),a=document.getElementById("dpadRepeatToggle");if(h)h.checked=A.menuFix;if(a)a.checked=A.dpadRepeat;s=A.dpadRepeat}function x1(h){A.menuFix=h,E(),F(12)}function L1(h){A.dpadRepeat=h,s=h,E(),F(12)}function A1(){I(),document.getElementById("settingsModal").classList.remove("hidden")}function P(){document.getElementById("settingsModal").classList.add("hidden")}function F(h){try{navigator.vibrate?.(h)}catch{}}function V1(h){let a=document.querySelector(`[data-key="${h}"]`);if(a)a.classList.add("pressed");if(F(12),A.menuFix&&h==="menu"){v({keyLong:h});return}if(v({keydown:h}),s&&c1.has(h))N=h,O=setTimeout(()=>{if(N===h)G=setInterval(()=>{if(N===h)F(6),v({keydown:h})},p1)},v1)}function j(h){let a=document.querySelector(`[data-key="${h}"]`);if(a)a.classList.remove("pressed");if(A.menuFix&&h==="menu")return;if(N===h)clearTimeout(O),clearInterval(G),O=G=null,N=null,F(8);v({keyup:h})}function d1(){document.getElementById("textModal").classList.remove("hidden");let h=document.getElementById("textInput");if(_&&Y)h.value=Y;else h.value="";l(),setTimeout(()=>{h.focus(),h.select(),setTimeout(()=>{document.getElementById("textModal").scrollIntoView({block:"start"})},300)},100)}function l(){let h=document.getElementById("textInput"),a=document.getElementById("btnAction");if(h.value.trim().length>0)a.innerHTML=`${r("send",18)} ${u("send")}`,a.className="btn-primary";else a.innerHTML=`${r("trash-2",18)} ${u("clear")}`,a.className="btn-cancel"}function U(){if(document.getElementById("textInput").value.trim().length>0)F1();else z1()}function i(){document.getElementById("textModal").classList.add("hidden"),document.getElementById("textInput").value=""}function F1(){let a=document.getElementById("textInput").value.trim();if(!a)return;F([15,25,15]),v({text:a}),i()}function z1(){F([10,20,10]),v({clear:!0})}async function D1(h,a){v({favAdd:{pkg:h,label:a}}),L(`${u("toastAdded")}: ${a}`),k()}function H1(h){v({favDel:h}),L(u("toastRemoved"))}var C="",w=null;async function m(h,a){C=h,w=null,document.getElementById("editName").value=a,document.getElementById("editFile").value="";let t=document.getElementById("editIconPreview"),n=await K(`custom_${h}`);if(n)t.src=URL.createObjectURL(n);else if(x.get(h))t.src=x.get(h);else try{let o=await fetch(`/icons/apps/${encodeURIComponent(h)}.png`);if(o.ok){let c=await o.blob();await Z(h,c);let p=URL.createObjectURL(c);x.set(h,p),t.src=p}}catch{}t.classList.remove("hidden"),document.getElementById("editModal").classList.remove("hidden")}function J(){document.getElementById("editModal").classList.add("hidden")}function N1(){let h=document.getElementById("editFile").files?.[0];if(!h)return;w=h,document.getElementById("editIconPreview").src=URL.createObjectURL(h)}async function W(){let h=document.getElementById("editName").value.trim();if(!h)return;if(w)await Z(`custom_${C}`,w),x.set(`custom_${C}`,URL.createObjectURL(w));v({favUpdate:{pkg:C,label:h}}),L(u("toastSaved")),J()}function C1(){v({favDel:C}),L(u("toastRemoved")),J()}function w1(h,a){v({launch:h}),L(`${u("toastLaunching")}: ${a}`)}function e(){let h=document.getElementById("favApps"),a=`<button class="app-chip add-chip" id="addAppBtn" title="${u("addApp")}">${r("plus",26)}</button>`;if(!R.length)h.innerHTML=a;else h.innerHTML=R.map((t)=>`
      <button class="app-chip" data-pkg="${d(t.pkg)}" title="${u("titleTapLaunch")}">
        <span class="app-emoji"><img class="app-img" data-pkg="${d(t.pkg)}" alt="" loading="lazy"><span class="app-fallback">${r("app-window",22)}</span></span>
        <span class="app-name">${d(t.label)}</span>
        <span class="delete-badge">${r("x",12)}</span>
      </button>`).join("")+a;document.getElementById("addAppBtn")?.addEventListener("click",T1),h.querySelectorAll(".app-chip:not(.add-chip)").forEach((t)=>{let n=t.dataset.pkg,o=t.querySelector(".app-name")?.textContent||n,c=t.querySelector("img.app-img");if(c)h1(c,n);t.addEventListener("click",()=>{if(!f)w1(n,o)}),t.addEventListener("contextmenu",(D)=>{D.preventDefault(),m(n,o)});let p,f=!1;t.addEventListener("pointerdown",()=>{f=!1,p=setTimeout(()=>{f=!0,m(n,o)},600)}),t.addEventListener("pointerup",()=>{clearTimeout(p)}),t.addEventListener("pointerleave",()=>{clearTimeout(p)}),t.querySelector(".delete-badge")?.addEventListener("click",(D)=>{D.stopPropagation(),H1(n)})})}async function T1(){if(document.getElementById("pickerModal").classList.remove("hidden"),document.getElementById("appSpinner").style.display="block",document.getElementById("appSearch").value="",!H.length)v({appList:!0});else X(H)}function k(){document.getElementById("pickerModal").classList.add("hidden")}function Q1(){let h=document.getElementById("appSearch").value.toLowerCase();X(H.filter((a)=>a.label.toLowerCase().includes(h)||a.pkg.toLowerCase().includes(h)))}function X(h){let a=document.getElementById("appPickerList");if(document.getElementById("appSpinner").style.display="none",!h.length){a.innerHTML=`<div style="padding:20px;text-align:center;color:#999">${u("noAppsFound")}</div>`;return}a.innerHTML=h.map((t)=>`
    <button class="picker-item" data-pkg="${d(t.pkg)}" data-label="${d(t.label)}">
      <span class="picker-ic"><img class="app-img" data-pkg="${d(t.pkg)}" alt="" loading="lazy"><span class="app-fallback">${r("app-window",22)}</span></span>
      <div><div>${d(t.label)}</div><div class="pkg-sub">${d(t.pkg)}</div></div>
    </button>`).join(""),a.querySelectorAll(".picker-item").forEach((t)=>{t.addEventListener("click",()=>D1(t.dataset.pkg,t.dataset.label));let n=t.querySelector("img.app-img");if(n)h1(n,n.dataset.pkg)})}var $1="tv-remote-icons",T="icons",x=new Map;function b(){return new Promise((h,a)=>{let t=indexedDB.open($1,1);t.onupgradeneeded=()=>t.result.createObjectStore(T,{keyPath:"pkg"}),t.onsuccess=()=>h(t.result),t.onerror=()=>a(t.error)})}function K(h){return new Promise(async(a)=>{try{let o=(await b()).transaction(T,"readonly").objectStore(T).get(h);o.onsuccess=()=>a(o.result?.blob??null),o.onerror=()=>a(null)}catch{a(null)}})}function Z(h,a){return new Promise(async(t)=>{try{let o=(await b()).transaction(T,"readwrite");o.objectStore(T).put({pkg:h,blob:a}),o.oncomplete=()=>t(),o.onerror=()=>t()}catch{t()}})}async function h1(h,a){let t=()=>{h.classList.add("hidden"),h.nextElementSibling?.classList.remove("hidden")},n=(f)=>{h.src=f,h.classList.remove("hidden"),h.nextElementSibling?.classList.add("hidden")},o=await K(`custom_${a}`);if(o){let f=x.get(`custom_${a}`);if(!f)f=URL.createObjectURL(o),x.set(`custom_${a}`,f);n(f);return}let c=x.get(a);if(c){n(c);return}let p=await K(a);if(p){c=URL.createObjectURL(p),x.set(a,c),n(c);return}try{let f=await fetch(`/icons/apps/${encodeURIComponent(a)}.png`);if(f.ok){let D=await f.blob();await Z(a,D),c=URL.createObjectURL(D),x.set(a,c),n(c);return}}catch{}t()}function J1(){q.innerHTML=`
    <div class="remote-header">
      <h1>${r("tv",22)} TV Remote</h1>
      <div class="header-right">
        <button class="icon-btn" id="btnSettings" title="⚙"><span class="settings-ic">${r("settings",20)}</span></button>
        <div class="status-area" id="statusArea" title="${u("statusTapReconnect")}">
          <span class="status-label" id="statusLabel">${u("statusChecking")}</span>
          <div class="status-dot" id="statusDot"></div>
        </div>
      </div>
    </div>
    <div class="auth-hint hidden" id="authHint">
      <div class="auth-hint-text">
        ${u("authHint1")}<br>
        ${u("authHint2")}
      </div>
      <button class="auth-force-btn" id="btnForceReconnect">${r("refresh-cw",18)} ${u("authForceBtn")}</button>
    </div>
    <div class="main-layout">
      <div class="dpad-col">
        <div class="dpad">
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="up" aria-label="${u("up")}">${r("chevron-up",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="left" aria-label="${u("left")}">${r("chevron-left",30)}</button>
          <button class="dpad-btn ok-btn" data-key="ok" aria-label="${u("ok")}">${r("circle",26)}</button>
          <button class="dpad-btn" data-key="right" aria-label="${u("right")}">${r("chevron-right",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="down" aria-label="${u("down")}">${r("chevron-down",30)}</button>
          <button class="dpad-btn empty"></button>
        </div>
      </div>
      <div class="actions-col">
        <div class="action-grid">
          <button class="action-btn accent-back" data-key="back">${r("corner-up-left",22)}<span>${u("actionBack")}</span></button>
          <button class="action-btn accent-home" data-key="home">${r("home",22)}<span>${u("actionHome")}</span></button>
          <button class="action-btn" data-key="menu">${r("menu",22)}<span>${u("actionMenu")}</span></button>
        </div>
        <div class="media-row">
          <div class="media-group">
            <button class="media-btn" data-key="mute" title="${u("mute")}">${r("volume-x")}</button>
            <button class="media-btn" data-key="voldown" title="${u("volDown")}">${r("volume-1")}</button>
            <button class="media-btn" data-key="volup" title="${u("volUp")}">${r("volume-2")}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-title">${u("quickLaunch")}</div>
    <div class="app-scroll" id="favApps"></div>
    <div class="bottom-bar">
      <button class="btn-kbd" id="btnText">${r("keyboard",20)} ${u("textInput")}</button>
    </div>
    <div class="modal-overlay hidden" id="textModal">
      <div class="modal-box">
        <h2>${r("keyboard",18)} ${u("textModalTitle")}</h2>
        <textarea id="textInput" placeholder="${u("textPlaceholder")}"></textarea>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelText">${r("x",18)} ${u("cancel")}</button>
          <button class="btn-primary" id="btnAction">${r("send",18)} ${u("send")}</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay hidden" id="pickerModal">
      <div class="modal-box">
        <h2>${r("app-window",18)} ${u("pickerTitle")}</h2>
        <input type="text" id="appSearch" placeholder="${u("searchPlaceholder")}">
        <div class="app-picker-list" id="appPickerList">
          <div class="spinner" id="appSpinner"></div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelPicker">${r("x",18)} ${u("cancel")}</button>
        </div>
      </div>
    </div>

    <!-- Settings Modal -->
    <div class="modal-overlay hidden" id="settingsModal">
      <div class="modal-box">
        <h2>${r("settings",18)} ${u("settingsTitle")}</h2>
        <label class="setting-row">
          <div class="setting-info">
            <div class="setting-name">${u("settingMenuFix")}</div>
            <div class="setting-desc">${u("settingMenuFixDesc")}</div>
          </div>
          <input type="checkbox" class="toggle" id="menuFixToggle">
        </label>
        <label class="setting-row">
          <div class="setting-info">
            <div class="setting-name">${u("settingDpadRepeat")}</div>
            <div class="setting-desc">${u("settingDpadRepeatDesc")}</div>
          </div>
          <input type="checkbox" class="toggle" id="dpadRepeatToggle">
        </label>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCloseSettings">${u("close")}</button>
        </div>
      </div>
    </div>

    <!-- Edit App Modal -->
    <div class="modal-overlay hidden" id="editModal">
      <div class="modal-box">
        <h2>${r("app-window",18)} ${u("editTitle")}</h2>
        <div class="edit-icon-row">
          <img id="editIconPreview" class="edit-icon-preview" alt="">
          <label class="btn-cancel edit-upload-btn">${r("upload",16)} ${u("editUpload")}<input type="file" id="editFile" accept="image/*" hidden></label>
        </div>
        <input type="text" id="editName" placeholder="${u("editName")}">
        <div class="modal-row">
          <button class="btn-danger" id="btnDeleteApp">${r("trash-2",18)} ${u("editDelete")}</button>
          <button class="btn-cancel" id="btnCancelEdit">${u("editCancel")}</button>
          <button class="btn-primary" id="btnSaveEdit">${r("check",18)} ${u("editSave")}</button>
        </div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `}function X1(){document.getElementById("statusArea")?.addEventListener("click",n1),document.getElementById("btnForceReconnect")?.addEventListener("click",o1),document.getElementById("btnSettings")?.addEventListener("click",A1),document.getElementById("btnCloseSettings")?.addEventListener("click",P),document.getElementById("menuFixToggle")?.addEventListener("change",(h)=>{x1(h.target.checked)}),document.getElementById("dpadRepeatToggle")?.addEventListener("change",(h)=>{L1(h.target.checked)}),document.getElementById("settingsModal")?.addEventListener("click",(h)=>{if(h.target===h.currentTarget)P()}),document.getElementById("btnDeleteApp")?.addEventListener("click",C1),document.getElementById("btnCancelEdit")?.addEventListener("click",J),document.getElementById("btnSaveEdit")?.addEventListener("click",W),document.getElementById("editFile")?.addEventListener("change",N1),document.getElementById("editName")?.addEventListener("keydown",(h)=>{if(h.key==="Enter")h.preventDefault(),W()}),document.getElementById("editModal")?.addEventListener("click",(h)=>{if(h.target===h.currentTarget)J()}),q.querySelectorAll("[data-key]").forEach((h)=>{let a=h.dataset.key;h.addEventListener("pointerdown",(t)=>{t.preventDefault(),V1(a)}),h.addEventListener("pointerup",(t)=>{t.preventDefault(),j(a)}),h.addEventListener("pointerleave",()=>j(a)),h.addEventListener("pointercancel",()=>j(a))}),document.getElementById("btnText")?.addEventListener("click",d1),document.getElementById("btnCancelText")?.addEventListener("click",i),document.getElementById("btnAction")?.addEventListener("click",U),document.getElementById("textInput")?.addEventListener("input",l),document.getElementById("textInput")?.addEventListener("keydown",(h)=>{if(h.key==="Enter"&&!h.shiftKey)h.preventDefault(),U()}),document.getElementById("btnCancelPicker")?.addEventListener("click",k),document.getElementById("appSearch")?.addEventListener("input",Q1)}f1();J1();X1();I();g();if(window.visualViewport)window.visualViewport.addEventListener("resize",()=>{let h=document.getElementById("textModal");if(h&&!h.classList.contains("hidden"))h.scrollIntoView({block:"start"})});if("serviceWorker"in navigator)navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then((h)=>{h.update().catch(()=>{})}).catch(()=>{});
