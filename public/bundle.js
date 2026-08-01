var S={zh:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"已连接",statusDisconnected:"未连接",statusReconnecting:"重连中…",statusChecking:"连接中…",statusAuth:"等待授权",statusError:"错误",statusNoDevice:"未设置设备",statusTapReconnect:"点击重连",statusTapRetry:"点击重试 — 在 TV 上确认",statusTapCheck:"点击检查",authHint1:"⚠️ 等待 TV 授权。请在电视上确认调试授权弹窗。",authHint2:"如未弹出，请在 TV 设置中：撤销 USB 调试授权，然后关闭再重开 ADB 调试。",authForceBtn:"强制重新认证",authApproving:"正在 TV 上确认…",actionBack:"返回",actionHome:"主页",actionMenu:"菜单",quickLaunch:"快捷启动应用",addApp:"添加应用",textInput:"文本输入",textModalTitle:"在 TV 上输入",textPlaceholder:"输入要发送的文本…",clear:"清空",cancel:"取消",send:"发送",pickerTitle:"选择应用",searchPlaceholder:"\uD83D\uDD0D 搜索应用…",noAppsFound:"未找到应用",settingsTitle:"设置",settingMenuFix:"菜单键修复",settingMenuFixDesc:"若菜单键单击不灵敏（需要双击）可开启",settingDpadRepeat:"方向键长按重复",settingDpadRepeatDesc:"长按上下左右时自动连续触发",vibration:"振动反馈",vibAvailable:"✓ 支持振动（按一次按键后刷新查看结果）",vibWorking:"✓ 振动正常工作",vibBlocked:"✗ 系统拒绝了振动 — 请检查系统设置 → 触摸振动/免打扰",vibUnavailable:"✗ 此设备/浏览器不支持振动（iOS Safari 不支持）",close:"关闭",editTitle:"编辑应用",editName:"应用名称",editUpload:"上传图标",editDelete:"删除",editSave:"保存",editCancel:"取消",toastAdded:"已添加",toastRemoved:"已移除",toastLaunching:"启动中",toastClearing:"清空中…",toastCleared:"已清空",toastSent:"已发送",toastSaved:"已保存",toastConnecting:"连接中…",toastConnected:"✓ 已连接",toastFailed:"✗ 失败",toastForceReconnect:"强制重连中… 请查看 TV",toastApproveOnTv:"\uD83D\uDD10 请查看 TV 屏幕",toastSentFail:"✗ 发送失败",toastLaunchFail:"✗ 启动失败",titleTapLaunch:"点击启动 · 长按移除",volUp:"音量+",volDown:"音量-",prev:"上一个",next:"下一个",rewind:"快退",fastForward:"快进",playPause:"播放/暂停",mute:"静音",up:"上",down:"下",left:"左",right:"右",ok:"确定"},en:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"Connected",statusDisconnected:"Disconnected",statusReconnecting:"Reconnecting…",statusChecking:"Connecting…",statusAuth:"Waiting for approval",statusError:"Error",statusNoDevice:"No device",statusTapReconnect:"Tap to reconnect",statusTapRetry:"Tap to retry — approve on TV",statusTapCheck:"Tap to check",authHint1:"⚠️ Waiting for TV approval. Check the debug authorization dialog on your TV.",authHint2:"If it doesn't appear: revoke USB debugging authorizations, then toggle ADB debugging off/on.",authForceBtn:"Force Re-authenticate",authApproving:"Approve on TV…",actionBack:"Back",actionHome:"Home",actionMenu:"Menu",quickLaunch:"Quick Launch",addApp:"Add App",textInput:"Text Input",textModalTitle:"Type on TV",textPlaceholder:"Enter text to send…",clear:"Clear",cancel:"Cancel",send:"Send",pickerTitle:"Select App",searchPlaceholder:"\uD83D\uDD0D Search apps…",noAppsFound:"No apps found",settingsTitle:"Settings",settingMenuFix:"Menu Key Fix",settingMenuFixDesc:"Enable if the menu key needs a double-tap to respond",settingDpadRepeat:"D-pad Key Repeat",settingDpadRepeatDesc:"Auto-repeat when holding up/down/left/right",vibration:"Vibration",vibAvailable:"✓ API supported (press a key, then re-open to see result)",vibWorking:"✓ Vibration works",vibBlocked:"✗ System rejected vibration — check Settings → Touch vibration / DND",vibUnavailable:"✗ Vibration not supported (iOS Safari has no Vibration API)",close:"Close",editTitle:"Edit App",editName:"App name",editUpload:"Upload icon",editDelete:"Delete",editSave:"Save",editCancel:"Cancel",toastAdded:"✓ Added",toastRemoved:"✗ Removed",toastLaunching:"Launching",toastClearing:"Clearing…",toastCleared:"✓ Cleared",toastSent:"✓ Sent",toastSaved:"✓ Saved",toastConnecting:"Connecting…",toastConnected:"✓ Connected",toastFailed:"✗ Failed",toastForceReconnect:"Force reconnecting… check TV",toastApproveOnTv:"\uD83D\uDD10 Look at your TV screen",toastSentFail:"✗ Failed to send",toastLaunchFail:"✗ Failed to launch",titleTapLaunch:"Tap to launch · Long-press to remove",volUp:"Vol+",volDown:"Vol-",prev:"Prev",next:"Next",rewind:"Rewind",fastForward:"FF",playPause:"Play/Pause",mute:"Mute",up:"Up",down:"Down",left:"Left",right:"Right",ok:"OK"}};function t1(){return(navigator.language||navigator.userLanguage||"en").toLowerCase().startsWith("zh")?"zh":"en"}var n1=t1(),t=(a)=>S[n1][a]??S.en[a]??a;function o(a){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${a}</svg>`}var y={"chevron-up":o('<path d="m18 15-6-6-6 6" />'),"chevron-down":o('<path d="m6 9 6 6 6-6" />'),"chevron-left":o('<path d="m15 18-6-6 6-6" />'),"chevron-right":o('<path d="m9 18 6-6-6-6" />'),check:o('<path d="M20 6 9 17l-5-5" />'),circle:o('<circle cx="12" cy="12" r="10" />'),"corner-up-left":o(`<path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  <path d="M9 14 4 9l5-5" />`),home:o(`<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />`),menu:o(`<path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />`),keyboard:o(`<path d="M10 8h.01" />
  <path d="M12 12h.01" />
  <path d="M14 8h.01" />
  <path d="M16 12h.01" />
  <path d="M18 8h.01" />
  <path d="M6 8h.01" />
  <path d="M7 16h10" />
  <path d="M8 12h.01" />
  <rect width="20" height="16" x="2" y="4" rx="2" />`),settings:o(`<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />`),plus:o(`<path d="M5 12h14" />
  <path d="M12 5v14" />`),"app-window":o(`<rect x="2" y="4" width="20" height="16" rx="2" />
  <path d="M10 4v4" />
  <path d="M2 8h20" />
  <path d="M6 4v4" />`),"trash-2":o(`<path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />`),send:o(`<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
  <path d="m21.854 2.147-10.94 10.939" />`),x:o(`<path d="M18 6 6 18" />
  <path d="m6 6 12 12" />`),search:o(`<path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />`),"volume-2":o(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />
  <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />`),"volume-1":o(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />`),"volume-x":o(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <line x1="22" x2="16" y1="9" y2="15" />
  <line x1="16" x2="22" y1="9" y2="15" />`),"skip-back":o(`<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
  <path d="M3 20V4" />`),rewind:o(`<path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" />
  <path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" />`),play:o('<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />'),"fast-forward":o(`<path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" />
  <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />`),"skip-forward":o(`<path d="M21 4v16" />
  <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />`),"refresh-cw":o(`<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
  <path d="M8 16H3v5" />`),tv:o(`<path d="m17 2-5 5-5-5" />
  <rect width="20" height="15" x="2" y="7" rx="2" />`),upload:o(`<path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />`)};var n=(a,h=22)=>`<span class="lic">${y[a].replace("<svg",`<svg width="${h}" height="${h}"`)}</span>`,i=[],H=[],P,Q=!1,_=!1,R="",q=document.getElementById("app"),L=null;function l(){let a=location.protocol==="https:"?"wss":"ws";L=new WebSocket(`${a}://${location.host}/ws`),L.onopen=()=>{console.log("WS open"),z("connected"),v({favGet:!0})},L.onclose=()=>{L=null,z("disconnected"),setTimeout(l,2000)},L.onmessage=(h)=>{let r=JSON.parse(h.data);if(r.ping)return;if(r.type==="status"){M1(r);return}if(r.type==="apps"){H=r.apps,X(H);return}if(r.type==="favorites"){i=r.favorites,b();return}if(r.type==="icons"){u1(r.icons);return}if(r.type==="inputState"){_=r.editable,R=r.text||"",o1();return}if(r.error)p(`✗ ${r.error}`);else if(r.method==="yadb")p(t("toastSent"));else if(r.method==="yadb_clear")p(t("toastCleared"));else if(r.connected!==void 0)p(r.connected?t("toastConnected"):t("toastFailed"))}}function v(a){if(L?.readyState===WebSocket.OPEN)return L.send(JSON.stringify(a)),!0;return!1}function o1(){let a=document.getElementById("btnText");if(!a)return;let h=a.querySelector(".tv-input-dot");if(_){if(a.classList.add("tv-input-active"),!h){let r=document.createElement("span");r.className="tv-input-dot",a.appendChild(r)}}else a.classList.remove("tv-input-active"),h?.remove()}async function u1(a){let h=!1;for(let[r,u]of Object.entries(a))try{let M=atob(u),c=new Uint8Array(M.length);for(let f=0;f<M.length;f++)c[f]=M.charCodeAt(f);await Z(r,new Blob([c],{type:"image/png"})),V.delete(r),h=!0}catch{}if(h)b(),X(H)}function z(a){let h=document.getElementById("statusDot"),r=document.getElementById("statusLabel"),u=document.getElementById("authHint");switch(a){case"connected":h.className="status-dot on",r.textContent=t("statusConnected"),u.classList.add("hidden"),$(!0),Q=!0;break;case"disconnected":h.className="status-dot off",r.textContent=L?t("statusDisconnected"):t("statusReconnecting"),u.classList.add("hidden"),$(!1),Q=!1;break;case"auth":h.className="status-dot auth",r.textContent=t("statusAuth"),u.classList.remove("hidden"),$(!1),Q=!1;break;case"checking":h.className="status-dot off",r.textContent=t("statusChecking"),u.classList.add("hidden"),$(!1),Q=!1;break}}function M1(a){switch(a.adbState){case"connected":z("connected");break;case"auth_required":z("auth");break;case"disconnected":case"no_device":z("disconnected");break}}function $(a){q.querySelectorAll(".dpad-btn:not(.empty), .action-btn, .media-btn, .btn-kbd, .app-chip:not(.add-chip)").forEach((h)=>{h.style.opacity=a?"":"0.4",h.style.pointerEvents=a?"":"none"})}function c1(){z("checking"),v({connect:!0})}function v1(){z("checking"),p(t("toastForceReconnect")),F([30,30,30]),v({forceReconnect:!0})}function p(a){let h=document.getElementById("toast");h.textContent=a,h.classList.add("show"),clearTimeout(P),P=setTimeout(()=>h.classList.remove("show"),2000)}function d(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var B=!0,Y=null,G=null,N=null,f1=new Set(["up","down","left","right"]),A1=500,V1=50,x={menuFix:!1,dpadRepeat:!0};function p1(){try{let a=localStorage.getItem("tv-remote-settings");if(a)x={...x,...JSON.parse(a)}}catch{}}function I(){try{localStorage.setItem("tv-remote-settings",JSON.stringify(x))}catch{}}function E(){let a=document.getElementById("menuFixToggle"),h=document.getElementById("dpadRepeatToggle");if(a)a.checked=x.menuFix;if(h)h.checked=x.dpadRepeat;B=x.dpadRepeat}function x1(a){x.menuFix=a,I(),F(28)}function L1(a){x.dpadRepeat=a,B=a,I(),F(28)}function d1(){E();let a=document.getElementById("vibStatusText");if(!j)a.textContent=t("vibUnavailable");else if(O===!1)a.textContent=t("vibBlocked");else if(O===!0)a.textContent=t("vibWorking");else a.textContent=t("vibAvailable");document.getElementById("settingsModal").classList.remove("hidden")}function U(){document.getElementById("settingsModal").classList.add("hidden")}var j=typeof navigator.vibrate==="function",O=null;function F(a){try{if(typeof navigator.vibrate==="function")O=navigator.vibrate(a),j=!0;else j=!1}catch{j=!1}}function F1(a){let h=document.querySelector(`[data-key="${a}"]`);if(h)h.classList.add("pressed");if(F(28),x.menuFix&&a==="menu"){v({keyLong:a});return}if(v({keydown:a}),B&&f1.has(a))N=a,G=setTimeout(()=>{if(N===a)Y=setInterval(()=>{if(N===a)F(14),v({keydown:a})},V1)},A1)}function s(a){let h=document.querySelector(`[data-key="${a}"]`);if(h)h.classList.remove("pressed");if(x.menuFix&&a==="menu")return;if(N===a)clearTimeout(G),clearInterval(Y),G=Y=null,N=null,F(20);v({keyup:a})}function z1(){document.getElementById("textModal").classList.remove("hidden");let a=document.getElementById("textInput");if(_&&R)a.value=R;else a.value="";e(),setTimeout(()=>{a.focus(),a.select(),setTimeout(()=>{document.getElementById("textModal").scrollIntoView({block:"start"})},300)},100)}function e(){let a=document.getElementById("textInput"),h=document.getElementById("btnAction");if(a.value.trim().length>0)h.innerHTML=`${n("send",18)} ${t("send")}`,h.className="btn-primary";else h.innerHTML=`${n("trash-2",18)} ${t("clear")}`,h.className="btn-cancel"}function W(){if(document.getElementById("textInput").value.trim().length>0)D1();else H1()}function k(){document.getElementById("textModal").classList.add("hidden"),document.getElementById("textInput").value=""}function D1(){let h=document.getElementById("textInput").value.trim();if(!h)return;F([30,50,30]),v({text:h}),k()}function H1(){F([25,40,25]),v({clear:!0})}async function N1(a,h){v({favAdd:{pkg:a,label:h}}),p(`${t("toastAdded")}: ${h}`),a1()}function w1(a){v({favDel:a}),p(t("toastRemoved"))}var w="",C=null;async function m(a,h){w=a,C=null,document.getElementById("editName").value=h,document.getElementById("editFile").value="";let r=document.getElementById("editIconPreview"),u=await K(`custom_${a}`);if(u)r.src=URL.createObjectURL(u);else if(V.get(a))r.src=V.get(a);else try{let M=await fetch(`/icons/apps/${encodeURIComponent(a)}.png`);if(M.ok){let c=await M.blob();await Z(a,c);let f=URL.createObjectURL(c);V.set(a,f),r.src=f}}catch{}r.classList.remove("hidden"),document.getElementById("editModal").classList.remove("hidden")}function J(){document.getElementById("editModal").classList.add("hidden")}function C1(){let a=document.getElementById("editFile").files?.[0];if(!a)return;C=a,document.getElementById("editIconPreview").src=URL.createObjectURL(a)}async function g(){let a=document.getElementById("editName").value.trim();if(!a)return;if(C)await Z(`custom_${w}`,C),V.set(`custom_${w}`,URL.createObjectURL(C));v({favUpdate:{pkg:w,label:a}}),p(t("toastSaved")),J()}function T1(){v({favDel:w}),p(t("toastRemoved")),J()}function Q1(a,h){v({launch:a}),p(`${t("toastLaunching")}: ${h}`)}function b(){let a=document.getElementById("favApps"),h=`<button class="app-chip add-chip" id="addAppBtn" title="${t("addApp")}">${n("plus",26)}</button>`;if(!i.length)a.innerHTML=h;else a.innerHTML=i.map((r)=>`
      <button class="app-chip" data-pkg="${d(r.pkg)}" title="${t("titleTapLaunch")}">
        <span class="app-emoji"><img class="app-img" data-pkg="${d(r.pkg)}" alt="" loading="lazy"><span class="app-fallback">${n("app-window",22)}</span></span>
        <span class="app-name">${d(r.label)}</span>
        <span class="delete-badge">${n("x",12)}</span>
      </button>`).join("")+h;document.getElementById("addAppBtn")?.addEventListener("click",$1),a.querySelectorAll(".app-chip:not(.add-chip)").forEach((r)=>{let u=r.dataset.pkg,M=r.querySelector(".app-name")?.textContent||u,c=r.querySelector("img.app-img");if(c)r1(c,u);r.addEventListener("click",()=>{if(!A)Q1(u,M)}),r.addEventListener("contextmenu",(D)=>{D.preventDefault(),m(u,M)});let f,A=!1;r.addEventListener("pointerdown",()=>{A=!1,f=setTimeout(()=>{A=!0,m(u,M)},600)}),r.addEventListener("pointerup",()=>{clearTimeout(f)}),r.addEventListener("pointerleave",()=>{clearTimeout(f)}),r.querySelector(".delete-badge")?.addEventListener("click",(D)=>{D.stopPropagation(),w1(u)})})}async function $1(){if(document.getElementById("pickerModal").classList.remove("hidden"),document.getElementById("appSpinner").style.display="block",document.getElementById("appSearch").value="",!H.length)v({appList:!0});else X(H)}function a1(){document.getElementById("pickerModal").classList.add("hidden")}function j1(){let a=document.getElementById("appSearch").value.toLowerCase();X(H.filter((h)=>h.label.toLowerCase().includes(a)||h.pkg.toLowerCase().includes(a)))}function X(a){let h=document.getElementById("appPickerList");if(document.getElementById("appSpinner").style.display="none",!a.length){h.innerHTML=`<div style="padding:20px;text-align:center;color:#999">${t("noAppsFound")}</div>`;return}h.innerHTML=a.map((r)=>`
    <button class="picker-item" data-pkg="${d(r.pkg)}" data-label="${d(r.label)}">
      <span class="picker-ic"><img class="app-img" data-pkg="${d(r.pkg)}" alt="" loading="lazy"><span class="app-fallback">${n("app-window",22)}</span></span>
      <div><div>${d(r.label)}</div><div class="pkg-sub">${d(r.pkg)}</div></div>
    </button>`).join(""),h.querySelectorAll(".picker-item").forEach((r)=>{r.addEventListener("click",()=>N1(r.dataset.pkg,r.dataset.label));let u=r.querySelector("img.app-img");if(u)r1(u,u.dataset.pkg)})}var J1="tv-remote-icons",T="icons",V=new Map;function h1(){return new Promise((a,h)=>{let r=indexedDB.open(J1,1);r.onupgradeneeded=()=>r.result.createObjectStore(T,{keyPath:"pkg"}),r.onsuccess=()=>a(r.result),r.onerror=()=>h(r.error)})}function K(a){return new Promise(async(h)=>{try{let M=(await h1()).transaction(T,"readonly").objectStore(T).get(a);M.onsuccess=()=>h(M.result?.blob??null),M.onerror=()=>h(null)}catch{h(null)}})}function Z(a,h){return new Promise(async(r)=>{try{let M=(await h1()).transaction(T,"readwrite");M.objectStore(T).put({pkg:a,blob:h}),M.oncomplete=()=>r(),M.onerror=()=>r()}catch{r()}})}async function r1(a,h){let r=()=>{a.classList.add("hidden"),a.nextElementSibling?.classList.remove("hidden")},u=(A)=>{a.src=A,a.classList.remove("hidden"),a.nextElementSibling?.classList.add("hidden")},M=await K(`custom_${h}`);if(M){let A=V.get(`custom_${h}`);if(!A)A=URL.createObjectURL(M),V.set(`custom_${h}`,A);u(A);return}let c=V.get(h);if(c){u(c);return}let f=await K(h);if(f){c=URL.createObjectURL(f),V.set(h,c),u(c);return}try{let A=await fetch(`/icons/apps/${encodeURIComponent(h)}.png`);if(A.ok){let D=await A.blob();await Z(h,D),c=URL.createObjectURL(D),V.set(h,c),u(c);return}}catch{}r()}function X1(){q.innerHTML=`
    <div class="remote-header">
      <h1>${n("tv",22)} TV Remote</h1>
      <div class="header-right">
        <button class="icon-btn" id="btnSettings" title="⚙"><span class="settings-ic">${n("settings",20)}</span></button>
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
      <button class="auth-force-btn" id="btnForceReconnect">${n("refresh-cw",18)} ${t("authForceBtn")}</button>
    </div>
    <div class="main-layout">
      <div class="dpad-col">
        <div class="dpad">
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="up" aria-label="${t("up")}">${n("chevron-up",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="left" aria-label="${t("left")}">${n("chevron-left",30)}</button>
          <button class="dpad-btn ok-btn" data-key="ok" aria-label="${t("ok")}">${n("circle",26)}</button>
          <button class="dpad-btn" data-key="right" aria-label="${t("right")}">${n("chevron-right",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="down" aria-label="${t("down")}">${n("chevron-down",30)}</button>
          <button class="dpad-btn empty"></button>
        </div>
      </div>
      <div class="actions-col">
        <div class="action-grid">
          <button class="action-btn accent-back" data-key="back">${n("corner-up-left",22)}<span>${t("actionBack")}</span></button>
          <button class="action-btn accent-home" data-key="home">${n("home",22)}<span>${t("actionHome")}</span></button>
          <button class="action-btn" data-key="menu">${n("menu",22)}<span>${t("actionMenu")}</span></button>
        </div>
        <div class="media-row">
          <div class="media-group">
            <button class="media-btn" data-key="mute" title="${t("mute")}">${n("volume-x")}</button>
            <button class="media-btn" data-key="voldown" title="${t("volDown")}">${n("volume-1")}</button>
            <button class="media-btn" data-key="volup" title="${t("volUp")}">${n("volume-2")}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-title">${t("quickLaunch")}</div>
    <div class="app-scroll" id="favApps"></div>
    <div class="bottom-bar">
      <button class="btn-kbd" id="btnText">${n("keyboard",20)} ${t("textInput")}</button>
    </div>
    <div class="modal-overlay hidden" id="textModal">
      <div class="modal-box">
        <h2>${n("keyboard",18)} ${t("textModalTitle")}</h2>
        <textarea id="textInput" placeholder="${t("textPlaceholder")}"></textarea>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelText">${n("x",18)} ${t("cancel")}</button>
          <button class="btn-primary" id="btnAction">${n("send",18)} ${t("send")}</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay hidden" id="pickerModal">
      <div class="modal-box">
        <h2>${n("app-window",18)} ${t("pickerTitle")}</h2>
        <input type="text" id="appSearch" placeholder="${t("searchPlaceholder")}">
        <div class="app-picker-list" id="appPickerList">
          <div class="spinner" id="appSpinner"></div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelPicker">${n("x",18)} ${t("cancel")}</button>
        </div>
      </div>
    </div>

    <!-- Settings Modal -->
    <div class="modal-overlay hidden" id="settingsModal">
      <div class="modal-box">
        <h2>${n("settings",18)} ${t("settingsTitle")}</h2>
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
        <div class="setting-row setting-static" id="vibStatus">
          <div class="setting-info">
            <div class="setting-name">${t("vibration")}</div>
            <div class="setting-desc" id="vibStatusText"></div>
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
        <h2>${n("app-window",18)} ${t("editTitle")}</h2>
        <div class="edit-icon-row">
          <img id="editIconPreview" class="edit-icon-preview" alt="">
          <label class="btn-cancel edit-upload-btn">${n("upload",16)} ${t("editUpload")}<input type="file" id="editFile" accept="image/*" hidden></label>
        </div>
        <input type="text" id="editName" placeholder="${t("editName")}">
        <div class="modal-row">
          <button class="btn-danger" id="btnDeleteApp">${n("trash-2",18)} ${t("editDelete")}</button>
          <button class="btn-cancel" id="btnCancelEdit">${t("editCancel")}</button>
          <button class="btn-primary" id="btnSaveEdit">${n("check",18)} ${t("editSave")}</button>
        </div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `}function Z1(){document.addEventListener("contextmenu",(a)=>a.preventDefault()),document.getElementById("statusArea")?.addEventListener("click",c1),document.getElementById("btnForceReconnect")?.addEventListener("click",v1),document.getElementById("btnSettings")?.addEventListener("click",d1),document.getElementById("btnCloseSettings")?.addEventListener("click",U),document.getElementById("menuFixToggle")?.addEventListener("change",(a)=>{x1(a.target.checked)}),document.getElementById("dpadRepeatToggle")?.addEventListener("change",(a)=>{L1(a.target.checked)}),document.getElementById("settingsModal")?.addEventListener("click",(a)=>{if(a.target===a.currentTarget)U()}),document.getElementById("btnDeleteApp")?.addEventListener("click",T1),document.getElementById("btnCancelEdit")?.addEventListener("click",J),document.getElementById("btnSaveEdit")?.addEventListener("click",g),document.getElementById("editFile")?.addEventListener("change",C1),document.getElementById("editName")?.addEventListener("keydown",(a)=>{if(a.key==="Enter")a.preventDefault(),g()}),document.getElementById("editModal")?.addEventListener("click",(a)=>{if(a.target===a.currentTarget)J()}),q.querySelectorAll("[data-key]").forEach((a)=>{let h=a.dataset.key;a.addEventListener("pointerdown",(r)=>{r.preventDefault(),F1(h)}),a.addEventListener("pointerup",(r)=>{r.preventDefault(),s(h)}),a.addEventListener("pointerleave",()=>s(h)),a.addEventListener("pointercancel",()=>s(h))}),document.getElementById("btnText")?.addEventListener("click",z1),document.getElementById("btnCancelText")?.addEventListener("click",k),document.getElementById("btnAction")?.addEventListener("click",W),document.getElementById("textInput")?.addEventListener("input",e),document.getElementById("textInput")?.addEventListener("keydown",(a)=>{if(a.key==="Enter"&&!a.shiftKey)a.preventDefault(),W()}),document.getElementById("btnCancelPicker")?.addEventListener("click",a1),document.getElementById("appSearch")?.addEventListener("input",j1)}p1();X1();Z1();E();l();if(window.visualViewport)window.visualViewport.addEventListener("resize",()=>{let a=document.getElementById("textModal");if(a&&!a.classList.contains("hidden"))a.scrollIntoView({block:"start"})});if("serviceWorker"in navigator)navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then((a)=>{a.update().catch(()=>{})}).catch(()=>{});
