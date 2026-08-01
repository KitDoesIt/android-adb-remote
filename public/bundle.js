var q={zh:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"已连接",statusDisconnected:"未连接",statusReconnecting:"重连中…",statusChecking:"连接中…",statusAuth:"等待授权",statusError:"错误",statusNoDevice:"未设置设备",statusTapReconnect:"点击重连",statusTapRetry:"点击重试 — 在 TV 上确认",statusTapCheck:"点击检查",authHint1:"⚠️ 等待 TV 授权。请在电视上确认调试授权弹窗。",authHint2:"如未弹出，请在 TV 设置中：撤销 USB 调试授权，然后关闭再重开 ADB 调试。",authForceBtn:"强制重新认证",authApproving:"正在 TV 上确认…",actionBack:"返回",actionHome:"主页",actionMenu:"菜单",quickLaunch:"快捷启动应用",addApp:"添加应用",textInput:"文本输入",textModalTitle:"在 TV 上输入",textPlaceholder:"输入要发送的文本…",clear:"清空",cancel:"取消",send:"发送",pickerTitle:"选择应用",searchPlaceholder:"\uD83D\uDD0D 搜索应用…",noAppsFound:"未找到应用",settingsTitle:"设置",settingMenuFix:"菜单键修复",settingMenuFixDesc:"若菜单键单击不灵敏（需要双击）可开启",settingDpadRepeat:"方向键长按重复",settingDpadRepeatDesc:"长按上下左右时自动连续触发",vibration:"振动反馈",vibAvailable:"✓ 此设备支持振动",vibUnavailable:"✗ 此设备/浏览器不支持振动（iOS Safari 不支持）",close:"关闭",editTitle:"编辑应用",editName:"应用名称",editUpload:"上传图标",editDelete:"删除",editSave:"保存",editCancel:"取消",toastAdded:"已添加",toastRemoved:"已移除",toastLaunching:"启动中",toastClearing:"清空中…",toastCleared:"已清空",toastSent:"已发送",toastSaved:"已保存",toastConnecting:"连接中…",toastConnected:"✓ 已连接",toastFailed:"✗ 失败",toastForceReconnect:"强制重连中… 请查看 TV",toastApproveOnTv:"\uD83D\uDD10 请查看 TV 屏幕",toastSentFail:"✗ 发送失败",toastLaunchFail:"✗ 启动失败",titleTapLaunch:"点击启动 · 长按移除",volUp:"音量+",volDown:"音量-",prev:"上一个",next:"下一个",rewind:"快退",fastForward:"快进",playPause:"播放/暂停",mute:"静音",up:"上",down:"下",left:"左",right:"右",ok:"确定"},en:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"Connected",statusDisconnected:"Disconnected",statusReconnecting:"Reconnecting…",statusChecking:"Connecting…",statusAuth:"Waiting for approval",statusError:"Error",statusNoDevice:"No device",statusTapReconnect:"Tap to reconnect",statusTapRetry:"Tap to retry — approve on TV",statusTapCheck:"Tap to check",authHint1:"⚠️ Waiting for TV approval. Check the debug authorization dialog on your TV.",authHint2:"If it doesn't appear: revoke USB debugging authorizations, then toggle ADB debugging off/on.",authForceBtn:"Force Re-authenticate",authApproving:"Approve on TV…",actionBack:"Back",actionHome:"Home",actionMenu:"Menu",quickLaunch:"Quick Launch",addApp:"Add App",textInput:"Text Input",textModalTitle:"Type on TV",textPlaceholder:"Enter text to send…",clear:"Clear",cancel:"Cancel",send:"Send",pickerTitle:"Select App",searchPlaceholder:"\uD83D\uDD0D Search apps…",noAppsFound:"No apps found",settingsTitle:"Settings",settingMenuFix:"Menu Key Fix",settingMenuFixDesc:"Enable if the menu key needs a double-tap to respond",settingDpadRepeat:"D-pad Key Repeat",settingDpadRepeatDesc:"Auto-repeat when holding up/down/left/right",vibration:"Vibration",vibAvailable:"✓ Vibration supported on this device",vibUnavailable:"✗ Vibration not supported (iOS Safari has no Vibration API)",close:"Close",editTitle:"Edit App",editName:"App name",editUpload:"Upload icon",editDelete:"Delete",editSave:"Save",editCancel:"Cancel",toastAdded:"✓ Added",toastRemoved:"✗ Removed",toastLaunching:"Launching",toastClearing:"Clearing…",toastCleared:"✓ Cleared",toastSent:"✓ Sent",toastSaved:"✓ Saved",toastConnecting:"Connecting…",toastConnected:"✓ Connected",toastFailed:"✗ Failed",toastForceReconnect:"Force reconnecting… check TV",toastApproveOnTv:"\uD83D\uDD10 Look at your TV screen",toastSentFail:"✗ Failed to send",toastLaunchFail:"✗ Failed to launch",titleTapLaunch:"Tap to launch · Long-press to remove",volUp:"Vol+",volDown:"Vol-",prev:"Prev",next:"Next",rewind:"Rewind",fastForward:"FF",playPause:"Play/Pause",mute:"Mute",up:"Up",down:"Down",left:"Left",right:"Right",ok:"OK"}};function h1(){return(navigator.language||navigator.userLanguage||"en").toLowerCase().startsWith("zh")?"zh":"en"}var t1=h1(),r=(a)=>q[t1][a]??q.en[a]??a;function n(a){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${a}</svg>`}var S={"chevron-up":n('<path d="m18 15-6-6-6 6" />'),"chevron-down":n('<path d="m6 9 6 6 6-6" />'),"chevron-left":n('<path d="m15 18-6-6 6-6" />'),"chevron-right":n('<path d="m9 18 6-6-6-6" />'),check:n('<path d="M20 6 9 17l-5-5" />'),circle:n('<circle cx="12" cy="12" r="10" />'),"corner-up-left":n(`<path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  <path d="M9 14 4 9l5-5" />`),home:n(`<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />`),menu:n(`<path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />`),keyboard:n(`<path d="M10 8h.01" />
  <path d="M12 12h.01" />
  <path d="M14 8h.01" />
  <path d="M16 12h.01" />
  <path d="M18 8h.01" />
  <path d="M6 8h.01" />
  <path d="M7 16h10" />
  <path d="M8 12h.01" />
  <rect width="20" height="16" x="2" y="4" rx="2" />`),settings:n(`<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />`),plus:n(`<path d="M5 12h14" />
  <path d="M12 5v14" />`),"app-window":n(`<rect x="2" y="4" width="20" height="16" rx="2" />
  <path d="M10 4v4" />
  <path d="M2 8h20" />
  <path d="M6 4v4" />`),"trash-2":n(`<path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />`),send:n(`<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
  <path d="m21.854 2.147-10.94 10.939" />`),x:n(`<path d="M18 6 6 18" />
  <path d="m6 6 12 12" />`),search:n(`<path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />`),"volume-2":n(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />
  <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />`),"volume-1":n(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />`),"volume-x":n(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <line x1="22" x2="16" y1="9" y2="15" />
  <line x1="16" x2="22" y1="9" y2="15" />`),"skip-back":n(`<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
  <path d="M3 20V4" />`),rewind:n(`<path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" />
  <path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" />`),play:n('<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />'),"fast-forward":n(`<path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" />
  <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />`),"skip-forward":n(`<path d="M21 4v16" />
  <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />`),"refresh-cw":n(`<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
  <path d="M8 16H3v5" />`),tv:n(`<path d="m17 2-5 5-5-5" />
  <rect width="20" height="15" x="2" y="7" rx="2" />`),upload:n(`<path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />`)};var u=(a,h=22)=>`<span class="lic">${S[a].replace("<svg",`<svg width="${h}" height="${h}"`)}</span>`,O=[],H=[],B,Q=!1,s=!1,R="",K=document.getElementById("app"),L=null;function W(){let a=location.protocol==="https:"?"wss":"ws";L=new WebSocket(`${a}://${location.host}/ws`),L.onopen=()=>{console.log("WS open"),z("connected"),c({favGet:!0})},L.onclose=()=>{L=null,z("disconnected"),setTimeout(W,2000)},L.onmessage=(h)=>{let t=JSON.parse(h.data);if(t.ping)return;if(t.type==="status"){n1(t);return}if(t.type==="apps"){H=t.apps,X(H);return}if(t.type==="favorites"){O=t.favorites,e();return}if(t.type==="icons"){u1(t.icons);return}if(t.type==="inputState"){s=t.editable,R=t.text||"",r1();return}if(t.error)x(`✗ ${t.error}`);else if(t.method==="yadb")x(r("toastSent"));else if(t.method==="yadb_clear")x(r("toastCleared"));else if(t.connected!==void 0)x(t.connected?r("toastConnected"):r("toastFailed"))}}function c(a){if(L?.readyState===WebSocket.OPEN)return L.send(JSON.stringify(a)),!0;return!1}function r1(){let a=document.getElementById("btnText");if(!a)return;let h=a.querySelector(".tv-input-dot");if(s){if(a.classList.add("tv-input-active"),!h){let t=document.createElement("span");t.className="tv-input-dot",a.appendChild(t)}}else a.classList.remove("tv-input-active"),h?.remove()}async function u1(a){let h=!1;for(let[t,o]of Object.entries(a))try{let M=atob(o),v=new Uint8Array(M.length);for(let p=0;p<M.length;p++)v[p]=M.charCodeAt(p);await Z(t,new Blob([v],{type:"image/png"})),V.delete(t),h=!0}catch{}if(h)e(),X(H)}function z(a){let h=document.getElementById("statusDot"),t=document.getElementById("statusLabel"),o=document.getElementById("authHint");switch(a){case"connected":h.className="status-dot on",t.textContent=r("statusConnected"),o.classList.add("hidden"),$(!0),Q=!0;break;case"disconnected":h.className="status-dot off",t.textContent=L?r("statusDisconnected"):r("statusReconnecting"),o.classList.add("hidden"),$(!1),Q=!1;break;case"auth":h.className="status-dot auth",t.textContent=r("statusAuth"),o.classList.remove("hidden"),$(!1),Q=!1;break;case"checking":h.className="status-dot off",t.textContent=r("statusChecking"),o.classList.add("hidden"),$(!1),Q=!1;break}}function n1(a){switch(a.adbState){case"connected":z("connected");break;case"auth_required":z("auth");break;case"disconnected":case"no_device":z("disconnected");break}}function $(a){K.querySelectorAll(".dpad-btn:not(.empty), .action-btn, .media-btn, .btn-kbd, .app-chip:not(.add-chip)").forEach((h)=>{h.style.opacity=a?"":"0.4",h.style.pointerEvents=a?"":"none"})}function o1(){z("checking"),c({connect:!0})}function M1(){z("checking"),x(r("toastForceReconnect")),F([30,30,30]),c({forceReconnect:!0})}function x(a){let h=document.getElementById("toast");h.textContent=a,h.classList.add("show"),clearTimeout(B),B=setTimeout(()=>h.classList.remove("show"),2000)}function d(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var _=!0,Y=null,G=null,N=null,v1=new Set(["up","down","left","right"]),c1=500,p1=50,A={menuFix:!1,dpadRepeat:!0};function f1(){try{let a=localStorage.getItem("tv-remote-settings");if(a)A={...A,...JSON.parse(a)}}catch{}}function g(){try{localStorage.setItem("tv-remote-settings",JSON.stringify(A))}catch{}}function l(){let a=document.getElementById("menuFixToggle"),h=document.getElementById("dpadRepeatToggle");if(a)a.checked=A.menuFix;if(h)h.checked=A.dpadRepeat;_=A.dpadRepeat}function V1(a){A.menuFix=a,g(),F(12)}function x1(a){A.dpadRepeat=a,_=a,g(),F(12)}function A1(){l();let a=document.getElementById("vibStatusText");a.textContent=typeof navigator.vibrate==="function"?r("vibAvailable"):r("vibUnavailable"),document.getElementById("settingsModal").classList.remove("hidden")}function P(){document.getElementById("settingsModal").classList.add("hidden")}function F(a){try{navigator.vibrate?.(a)}catch{}}function L1(a){let h=document.querySelector(`[data-key="${a}"]`);if(h)h.classList.add("pressed");if(F(12),A.menuFix&&a==="menu"){c({keyLong:a});return}if(c({keydown:a}),_&&v1.has(a))N=a,G=setTimeout(()=>{if(N===a)Y=setInterval(()=>{if(N===a)F(6),c({keydown:a})},p1)},c1)}function j(a){let h=document.querySelector(`[data-key="${a}"]`);if(h)h.classList.remove("pressed");if(A.menuFix&&a==="menu")return;if(N===a)clearTimeout(G),clearInterval(Y),G=Y=null,N=null,F(8);c({keyup:a})}function d1(){document.getElementById("textModal").classList.remove("hidden");let a=document.getElementById("textInput");if(s&&R)a.value=R;else a.value="";E(),setTimeout(()=>{a.focus(),a.select(),setTimeout(()=>{document.getElementById("textModal").scrollIntoView({block:"start"})},300)},100)}function E(){let a=document.getElementById("textInput"),h=document.getElementById("btnAction");if(a.value.trim().length>0)h.innerHTML=`${u("send",18)} ${r("send")}`,h.className="btn-primary";else h.innerHTML=`${u("trash-2",18)} ${r("clear")}`,h.className="btn-cancel"}function U(){if(document.getElementById("textInput").value.trim().length>0)F1();else z1()}function I(){document.getElementById("textModal").classList.add("hidden"),document.getElementById("textInput").value=""}function F1(){let h=document.getElementById("textInput").value.trim();if(!h)return;F([15,25,15]),c({text:h}),I()}function z1(){F([10,20,10]),c({clear:!0})}async function D1(a,h){c({favAdd:{pkg:a,label:h}}),x(`${r("toastAdded")}: ${h}`),k()}function H1(a){c({favDel:a}),x(r("toastRemoved"))}var C="",w=null;async function y(a,h){C=a,w=null,document.getElementById("editName").value=h,document.getElementById("editFile").value="";let t=document.getElementById("editIconPreview"),o=await i(`custom_${a}`);if(o)t.src=URL.createObjectURL(o);else if(V.get(a))t.src=V.get(a);else try{let M=await fetch(`/icons/apps/${encodeURIComponent(a)}.png`);if(M.ok){let v=await M.blob();await Z(a,v);let p=URL.createObjectURL(v);V.set(a,p),t.src=p}}catch{}t.classList.remove("hidden"),document.getElementById("editModal").classList.remove("hidden")}function J(){document.getElementById("editModal").classList.add("hidden")}function N1(){let a=document.getElementById("editFile").files?.[0];if(!a)return;w=a,document.getElementById("editIconPreview").src=URL.createObjectURL(a)}async function m(){let a=document.getElementById("editName").value.trim();if(!a)return;if(w)await Z(`custom_${C}`,w),V.set(`custom_${C}`,URL.createObjectURL(w));c({favUpdate:{pkg:C,label:a}}),x(r("toastSaved")),J()}function C1(){c({favDel:C}),x(r("toastRemoved")),J()}function w1(a,h){c({launch:a}),x(`${r("toastLaunching")}: ${h}`)}function e(){let a=document.getElementById("favApps"),h=`<button class="app-chip add-chip" id="addAppBtn" title="${r("addApp")}">${u("plus",26)}</button>`;if(!O.length)a.innerHTML=h;else a.innerHTML=O.map((t)=>`
      <button class="app-chip" data-pkg="${d(t.pkg)}" title="${r("titleTapLaunch")}">
        <span class="app-emoji"><img class="app-img" data-pkg="${d(t.pkg)}" alt="" loading="lazy"><span class="app-fallback">${u("app-window",22)}</span></span>
        <span class="app-name">${d(t.label)}</span>
        <span class="delete-badge">${u("x",12)}</span>
      </button>`).join("")+h;document.getElementById("addAppBtn")?.addEventListener("click",T1),a.querySelectorAll(".app-chip:not(.add-chip)").forEach((t)=>{let o=t.dataset.pkg,M=t.querySelector(".app-name")?.textContent||o,v=t.querySelector("img.app-img");if(v)a1(v,o);t.addEventListener("click",()=>{if(!f)w1(o,M)}),t.addEventListener("contextmenu",(D)=>{D.preventDefault(),y(o,M)});let p,f=!1;t.addEventListener("pointerdown",()=>{f=!1,p=setTimeout(()=>{f=!0,y(o,M)},600)}),t.addEventListener("pointerup",()=>{clearTimeout(p)}),t.addEventListener("pointerleave",()=>{clearTimeout(p)}),t.querySelector(".delete-badge")?.addEventListener("click",(D)=>{D.stopPropagation(),H1(o)})})}async function T1(){if(document.getElementById("pickerModal").classList.remove("hidden"),document.getElementById("appSpinner").style.display="block",document.getElementById("appSearch").value="",!H.length)c({appList:!0});else X(H)}function k(){document.getElementById("pickerModal").classList.add("hidden")}function Q1(){let a=document.getElementById("appSearch").value.toLowerCase();X(H.filter((h)=>h.label.toLowerCase().includes(a)||h.pkg.toLowerCase().includes(a)))}function X(a){let h=document.getElementById("appPickerList");if(document.getElementById("appSpinner").style.display="none",!a.length){h.innerHTML=`<div style="padding:20px;text-align:center;color:#999">${r("noAppsFound")}</div>`;return}h.innerHTML=a.map((t)=>`
    <button class="picker-item" data-pkg="${d(t.pkg)}" data-label="${d(t.label)}">
      <span class="picker-ic"><img class="app-img" data-pkg="${d(t.pkg)}" alt="" loading="lazy"><span class="app-fallback">${u("app-window",22)}</span></span>
      <div><div>${d(t.label)}</div><div class="pkg-sub">${d(t.pkg)}</div></div>
    </button>`).join(""),h.querySelectorAll(".picker-item").forEach((t)=>{t.addEventListener("click",()=>D1(t.dataset.pkg,t.dataset.label));let o=t.querySelector("img.app-img");if(o)a1(o,o.dataset.pkg)})}var $1="tv-remote-icons",T="icons",V=new Map;function b(){return new Promise((a,h)=>{let t=indexedDB.open($1,1);t.onupgradeneeded=()=>t.result.createObjectStore(T,{keyPath:"pkg"}),t.onsuccess=()=>a(t.result),t.onerror=()=>h(t.error)})}function i(a){return new Promise(async(h)=>{try{let M=(await b()).transaction(T,"readonly").objectStore(T).get(a);M.onsuccess=()=>h(M.result?.blob??null),M.onerror=()=>h(null)}catch{h(null)}})}function Z(a,h){return new Promise(async(t)=>{try{let M=(await b()).transaction(T,"readwrite");M.objectStore(T).put({pkg:a,blob:h}),M.oncomplete=()=>t(),M.onerror=()=>t()}catch{t()}})}async function a1(a,h){let t=()=>{a.classList.add("hidden"),a.nextElementSibling?.classList.remove("hidden")},o=(f)=>{a.src=f,a.classList.remove("hidden"),a.nextElementSibling?.classList.add("hidden")},M=await i(`custom_${h}`);if(M){let f=V.get(`custom_${h}`);if(!f)f=URL.createObjectURL(M),V.set(`custom_${h}`,f);o(f);return}let v=V.get(h);if(v){o(v);return}let p=await i(h);if(p){v=URL.createObjectURL(p),V.set(h,v),o(v);return}try{let f=await fetch(`/icons/apps/${encodeURIComponent(h)}.png`);if(f.ok){let D=await f.blob();await Z(h,D),v=URL.createObjectURL(D),V.set(h,v),o(v);return}}catch{}t()}function J1(){K.innerHTML=`
    <div class="remote-header">
      <h1>${u("tv",22)} TV Remote</h1>
      <div class="header-right">
        <button class="icon-btn" id="btnSettings" title="⚙"><span class="settings-ic">${u("settings",20)}</span></button>
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
      <button class="auth-force-btn" id="btnForceReconnect">${u("refresh-cw",18)} ${r("authForceBtn")}</button>
    </div>
    <div class="main-layout">
      <div class="dpad-col">
        <div class="dpad">
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="up" aria-label="${r("up")}">${u("chevron-up",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="left" aria-label="${r("left")}">${u("chevron-left",30)}</button>
          <button class="dpad-btn ok-btn" data-key="ok" aria-label="${r("ok")}">${u("circle",26)}</button>
          <button class="dpad-btn" data-key="right" aria-label="${r("right")}">${u("chevron-right",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="down" aria-label="${r("down")}">${u("chevron-down",30)}</button>
          <button class="dpad-btn empty"></button>
        </div>
      </div>
      <div class="actions-col">
        <div class="action-grid">
          <button class="action-btn accent-back" data-key="back">${u("corner-up-left",22)}<span>${r("actionBack")}</span></button>
          <button class="action-btn accent-home" data-key="home">${u("home",22)}<span>${r("actionHome")}</span></button>
          <button class="action-btn" data-key="menu">${u("menu",22)}<span>${r("actionMenu")}</span></button>
        </div>
        <div class="media-row">
          <div class="media-group">
            <button class="media-btn" data-key="mute" title="${r("mute")}">${u("volume-x")}</button>
            <button class="media-btn" data-key="voldown" title="${r("volDown")}">${u("volume-1")}</button>
            <button class="media-btn" data-key="volup" title="${r("volUp")}">${u("volume-2")}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-title">${r("quickLaunch")}</div>
    <div class="app-scroll" id="favApps"></div>
    <div class="bottom-bar">
      <button class="btn-kbd" id="btnText">${u("keyboard",20)} ${r("textInput")}</button>
    </div>
    <div class="modal-overlay hidden" id="textModal">
      <div class="modal-box">
        <h2>${u("keyboard",18)} ${r("textModalTitle")}</h2>
        <textarea id="textInput" placeholder="${r("textPlaceholder")}"></textarea>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelText">${u("x",18)} ${r("cancel")}</button>
          <button class="btn-primary" id="btnAction">${u("send",18)} ${r("send")}</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay hidden" id="pickerModal">
      <div class="modal-box">
        <h2>${u("app-window",18)} ${r("pickerTitle")}</h2>
        <input type="text" id="appSearch" placeholder="${r("searchPlaceholder")}">
        <div class="app-picker-list" id="appPickerList">
          <div class="spinner" id="appSpinner"></div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelPicker">${u("x",18)} ${r("cancel")}</button>
        </div>
      </div>
    </div>

    <!-- Settings Modal -->
    <div class="modal-overlay hidden" id="settingsModal">
      <div class="modal-box">
        <h2>${u("settings",18)} ${r("settingsTitle")}</h2>
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
        <div class="setting-row setting-static" id="vibStatus">
          <div class="setting-info">
            <div class="setting-name">${r("vibration")}</div>
            <div class="setting-desc" id="vibStatusText"></div>
          </div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCloseSettings">${r("close")}</button>
        </div>
      </div>
    </div>

    <!-- Edit App Modal -->
    <div class="modal-overlay hidden" id="editModal">
      <div class="modal-box">
        <h2>${u("app-window",18)} ${r("editTitle")}</h2>
        <div class="edit-icon-row">
          <img id="editIconPreview" class="edit-icon-preview" alt="">
          <label class="btn-cancel edit-upload-btn">${u("upload",16)} ${r("editUpload")}<input type="file" id="editFile" accept="image/*" hidden></label>
        </div>
        <input type="text" id="editName" placeholder="${r("editName")}">
        <div class="modal-row">
          <button class="btn-danger" id="btnDeleteApp">${u("trash-2",18)} ${r("editDelete")}</button>
          <button class="btn-cancel" id="btnCancelEdit">${r("editCancel")}</button>
          <button class="btn-primary" id="btnSaveEdit">${u("check",18)} ${r("editSave")}</button>
        </div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `}function X1(){document.addEventListener("contextmenu",(a)=>a.preventDefault()),document.getElementById("statusArea")?.addEventListener("click",o1),document.getElementById("btnForceReconnect")?.addEventListener("click",M1),document.getElementById("btnSettings")?.addEventListener("click",A1),document.getElementById("btnCloseSettings")?.addEventListener("click",P),document.getElementById("menuFixToggle")?.addEventListener("change",(a)=>{V1(a.target.checked)}),document.getElementById("dpadRepeatToggle")?.addEventListener("change",(a)=>{x1(a.target.checked)}),document.getElementById("settingsModal")?.addEventListener("click",(a)=>{if(a.target===a.currentTarget)P()}),document.getElementById("btnDeleteApp")?.addEventListener("click",C1),document.getElementById("btnCancelEdit")?.addEventListener("click",J),document.getElementById("btnSaveEdit")?.addEventListener("click",m),document.getElementById("editFile")?.addEventListener("change",N1),document.getElementById("editName")?.addEventListener("keydown",(a)=>{if(a.key==="Enter")a.preventDefault(),m()}),document.getElementById("editModal")?.addEventListener("click",(a)=>{if(a.target===a.currentTarget)J()}),K.querySelectorAll("[data-key]").forEach((a)=>{let h=a.dataset.key;a.addEventListener("pointerdown",(t)=>{t.preventDefault(),L1(h)}),a.addEventListener("pointerup",(t)=>{t.preventDefault(),j(h)}),a.addEventListener("pointerleave",()=>j(h)),a.addEventListener("pointercancel",()=>j(h))}),document.getElementById("btnText")?.addEventListener("click",d1),document.getElementById("btnCancelText")?.addEventListener("click",I),document.getElementById("btnAction")?.addEventListener("click",U),document.getElementById("textInput")?.addEventListener("input",E),document.getElementById("textInput")?.addEventListener("keydown",(a)=>{if(a.key==="Enter"&&!a.shiftKey)a.preventDefault(),U()}),document.getElementById("btnCancelPicker")?.addEventListener("click",k),document.getElementById("appSearch")?.addEventListener("input",Q1)}f1();J1();X1();l();W();if(window.visualViewport)window.visualViewport.addEventListener("resize",()=>{let a=document.getElementById("textModal");if(a&&!a.classList.contains("hidden"))a.scrollIntoView({block:"start"})});if("serviceWorker"in navigator)navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then((a)=>{a.update().catch(()=>{})}).catch(()=>{});
