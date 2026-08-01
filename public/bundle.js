var I={zh:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"已连接",statusDisconnected:"未连接",statusReconnecting:"重连中…",statusChecking:"连接中…",statusAuth:"等待授权",statusError:"错误",statusNoDevice:"未设置设备",statusTapReconnect:"点击重连",statusTapRetry:"点击重试 — 在 TV 上确认",statusTapCheck:"点击检查",authHint1:"⚠️ 等待 TV 授权。请在电视上确认调试授权弹窗。",authHint2:"如未弹出，请在 TV 设置中：撤销 USB 调试授权，然后关闭再重开 ADB 调试。",authForceBtn:"强制重新认证",authApproving:"正在 TV 上确认…",actionBack:"返回",actionHome:"主页",actionMenu:"菜单",quickLaunch:"快捷启动应用",addApp:"添加应用",textInput:"文本输入",textModalTitle:"在 TV 上输入",textPlaceholder:"输入要发送的文本…",clear:"清空",cancel:"取消",send:"发送",pickerTitle:"选择应用",searchPlaceholder:"\uD83D\uDD0D 搜索应用…",noAppsFound:"未找到应用",settingsTitle:"设置",settingMenuFix:"菜单键修复",settingMenuFixDesc:"若菜单键单击不灵敏（需要双击）可开启",settingDpadRepeat:"方向键长按重复",settingDpadRepeatDesc:"长按上下左右时自动连续触发",settingSimLongPress:"模拟长按（操作更稳定）",settingSimLongPressDesc:"短按=普通按下，长按=长按事件；不发送分离的按下/抬起",vibration:"振动反馈",vibStrength:"振动强度",vibStrengthDesc:"基础时长（毫秒），档位越高越强",vibAvailable:"✓ 支持振动（按一次按键后刷新查看结果）",vibWorking:"✓ 振动正常工作",vibBlocked:"✗ 系统拒绝了振动 — 请检查系统设置 → 触摸振动/免打扰",vibUnavailable:"✗ 此设备/浏览器不支持振动（iOS Safari 不支持）",close:"关闭",editTitle:"编辑应用",editName:"应用名称",editUpload:"上传图标",editDelete:"删除",editSave:"保存",editCancel:"取消",toastAdded:"已添加",toastRemoved:"已移除",toastLaunching:"启动中",toastClearing:"清空中…",toastCleared:"已清空",toastSent:"已发送",toastSaved:"已保存",toastConnecting:"连接中…",toastConnected:"✓ 已连接",toastFailed:"✗ 失败",toastForceReconnect:"强制重连中… 请查看 TV",toastApproveOnTv:"\uD83D\uDD10 请查看 TV 屏幕",toastSentFail:"✗ 发送失败",toastLaunchFail:"✗ 启动失败",titleTapLaunch:"点击启动 · 长按移除",volUp:"音量+",volDown:"音量-",prev:"上一个",next:"下一个",rewind:"快退",fastForward:"快进",playPause:"播放/暂停",mute:"静音",up:"上",down:"下",left:"左",right:"右",ok:"确定"},en:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"Connected",statusDisconnected:"Disconnected",statusReconnecting:"Reconnecting…",statusChecking:"Connecting…",statusAuth:"Waiting for approval",statusError:"Error",statusNoDevice:"No device",statusTapReconnect:"Tap to reconnect",statusTapRetry:"Tap to retry — approve on TV",statusTapCheck:"Tap to check",authHint1:"⚠️ Waiting for TV approval. Check the debug authorization dialog on your TV.",authHint2:"If it doesn't appear: revoke USB debugging authorizations, then toggle ADB debugging off/on.",authForceBtn:"Force Re-authenticate",authApproving:"Approve on TV…",actionBack:"Back",actionHome:"Home",actionMenu:"Menu",quickLaunch:"Quick Launch",addApp:"Add App",textInput:"Text Input",textModalTitle:"Type on TV",textPlaceholder:"Enter text to send…",clear:"Clear",cancel:"Cancel",send:"Send",pickerTitle:"Select App",searchPlaceholder:"\uD83D\uDD0D Search apps…",noAppsFound:"No apps found",settingsTitle:"Settings",settingMenuFix:"Menu Key Fix",settingMenuFixDesc:"Enable if the menu key needs a double-tap to respond",settingDpadRepeat:"D-pad Key Repeat",settingDpadRepeatDesc:"Auto-repeat when holding up/down/left/right",settingSimLongPress:"Simulated Long-press (more stable)",settingSimLongPressDesc:"Short tap = normal press, hold = long-press; no separate down/up events",vibration:"Vibration",vibStrength:"Vibration strength",vibStrengthDesc:"Base duration in ms — higher is stronger",vibAvailable:"✓ API supported (press a key, then re-open to see result)",vibWorking:"✓ Vibration works",vibBlocked:"✗ System rejected vibration — check Settings → Touch vibration / DND",vibUnavailable:"✗ Vibration not supported (iOS Safari has no Vibration API)",close:"Close",editTitle:"Edit App",editName:"App name",editUpload:"Upload icon",editDelete:"Delete",editSave:"Save",editCancel:"Cancel",toastAdded:"✓ Added",toastRemoved:"✗ Removed",toastLaunching:"Launching",toastClearing:"Clearing…",toastCleared:"✓ Cleared",toastSent:"✓ Sent",toastSaved:"✓ Saved",toastConnecting:"Connecting…",toastConnected:"✓ Connected",toastFailed:"✗ Failed",toastForceReconnect:"Force reconnecting… check TV",toastApproveOnTv:"\uD83D\uDD10 Look at your TV screen",toastSentFail:"✗ Failed to send",toastLaunchFail:"✗ Failed to launch",titleTapLaunch:"Tap to launch · Long-press to remove",volUp:"Vol+",volDown:"Vol-",prev:"Prev",next:"Next",rewind:"Rewind",fastForward:"FF",playPause:"Play/Pause",mute:"Mute",up:"Up",down:"Down",left:"Left",right:"Right",ok:"OK"}};function t1(){return(navigator.language||navigator.userLanguage||"en").toLowerCase().startsWith("zh")?"zh":"en"}var M1=t1(),o=(h)=>I[M1][h]??I.en[h]??h;function c(h){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${h}</svg>`}var E={"chevron-up":c('<path d="m18 15-6-6-6 6" />'),"chevron-down":c('<path d="m6 9 6 6 6-6" />'),"chevron-left":c('<path d="m15 18-6-6 6-6" />'),"chevron-right":c('<path d="m9 18 6-6-6-6" />'),check:c('<path d="M20 6 9 17l-5-5" />'),circle:c('<circle cx="12" cy="12" r="10" />'),"corner-up-left":c(`<path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  <path d="M9 14 4 9l5-5" />`),home:c(`<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />`),menu:c(`<path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />`),keyboard:c(`<path d="M10 8h.01" />
  <path d="M12 12h.01" />
  <path d="M14 8h.01" />
  <path d="M16 12h.01" />
  <path d="M18 8h.01" />
  <path d="M6 8h.01" />
  <path d="M7 16h10" />
  <path d="M8 12h.01" />
  <rect width="20" height="16" x="2" y="4" rx="2" />`),settings:c(`<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />`),plus:c(`<path d="M5 12h14" />
  <path d="M12 5v14" />`),"app-window":c(`<rect x="2" y="4" width="20" height="16" rx="2" />
  <path d="M10 4v4" />
  <path d="M2 8h20" />
  <path d="M6 4v4" />`),"trash-2":c(`<path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />`),send:c(`<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
  <path d="m21.854 2.147-10.94 10.939" />`),x:c(`<path d="M18 6 6 18" />
  <path d="m6 6 12 12" />`),search:c(`<path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />`),"volume-2":c(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />
  <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />`),"volume-1":c(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />`),"volume-x":c(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <line x1="22" x2="16" y1="9" y2="15" />
  <line x1="16" x2="22" y1="9" y2="15" />`),"skip-back":c(`<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
  <path d="M3 20V4" />`),rewind:c(`<path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" />
  <path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" />`),play:c('<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />'),"fast-forward":c(`<path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" />
  <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />`),"skip-forward":c(`<path d="M21 4v16" />
  <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />`),"refresh-cw":c(`<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
  <path d="M8 16H3v5" />`),tv:c(`<path d="m17 2-5 5-5-5" />
  <rect width="20" height="15" x="2" y="7" rx="2" />`),upload:c(`<path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />`)};var u=(h,a=22)=>`<span class="lic">${E[h].replace("<svg",`<svg width="${a}" height="${a}"`)}</span>`,Y=[],H=[],l,$=!1,S=!1,q="",W=document.getElementById("app"),d=null;function h1(){let h=location.protocol==="https:"?"wss":"ws";d=new WebSocket(`${h}://${location.host}/ws`),d.onopen=()=>{console.log("WS open"),z("connected"),M({favGet:!0})},d.onclose=()=>{d=null,z("disconnected"),setTimeout(h1,2000)},d.onmessage=(a)=>{let r=JSON.parse(a.data);if(r.ping)return;if(r.type==="status"){A1(r);return}if(r.type==="apps"){H=r.apps,R(H);return}if(r.type==="favorites"){Y=r.favorites,o1();return}if(r.type==="icons"){f1(r.icons);return}if(r.type==="inputState"){S=r.editable,q=r.text||"",v1();return}if(r.error)L(`✗ ${r.error}`);else if(r.method==="yadb")L(o("toastSent"));else if(r.method==="yadb_clear")L(o("toastCleared"));else if(r.connected!==void 0)L(r.connected?o("toastConnected"):o("toastFailed"))}}function M(h){if(d?.readyState===WebSocket.OPEN)return d.send(JSON.stringify(h)),!0;return!1}function v1(){let h=document.getElementById("btnText");if(!h)return;let a=h.querySelector(".tv-input-dot");if(S){if(h.classList.add("tv-input-active"),!a){let r=document.createElement("span");r.className="tv-input-dot",h.appendChild(r)}}else h.classList.remove("tv-input-active"),a?.remove()}async function f1(h){let a=!1;for(let[r,n]of Object.entries(h))try{let t=atob(n),f=new Uint8Array(t.length);for(let A=0;A<t.length;A++)f[A]=t.charCodeAt(A);await G(r,new Blob([f],{type:"image/png"})),p.delete(r),a=!0}catch{}if(a)o1(),R(H)}function z(h){let a=document.getElementById("statusDot"),r=document.getElementById("statusLabel"),n=document.getElementById("authHint");switch(h){case"connected":a.className="status-dot on",r.textContent=o("statusConnected"),n.classList.add("hidden"),j(!0),$=!0;break;case"disconnected":a.className="status-dot off",r.textContent=d?o("statusDisconnected"):o("statusReconnecting"),n.classList.add("hidden"),j(!1),$=!1;break;case"auth":a.className="status-dot auth",r.textContent=o("statusAuth"),n.classList.remove("hidden"),j(!1),$=!1;break;case"checking":a.className="status-dot off",r.textContent=o("statusChecking"),n.classList.add("hidden"),j(!1),$=!1;break}}function A1(h){switch(h.adbState){case"connected":z("connected");break;case"auth_required":z("auth");break;case"disconnected":case"no_device":z("disconnected");break}}function j(h){W.querySelectorAll(".dpad-btn:not(.empty), .action-btn, .media-btn, .btn-kbd, .app-chip:not(.add-chip)").forEach((a)=>{a.style.opacity=h?"":"0.4",a.style.pointerEvents=h?"":"none"})}function V1(){z("checking"),M({connect:!0})}function x1(){z("checking"),L(o("toastForceReconnect")),x([30,30,30]),M({forceReconnect:!0})}function L(h){let a=document.getElementById("toast");a.textContent=h,a.classList.add("show"),clearTimeout(l),l=setTimeout(()=>a.classList.remove("show"),2000)}function F(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var m=!0,B=null,K=null,N=null,U=new Set(["up","down","left","right"]),p1=500,L1=50,d1=150,F1=[25,50,100,125],v={menuFix:!1,dpadRepeat:!0,simLongPress:!1,vibStrength:25};function z1(){try{let h=localStorage.getItem("tv-remote-settings");if(h)v={...v,...JSON.parse(h)}}catch{}}function Z(){try{localStorage.setItem("tv-remote-settings",JSON.stringify(v))}catch{}}function s(){let h=document.getElementById("menuFixToggle"),a=document.getElementById("dpadRepeatToggle"),r=document.getElementById("simLongPressToggle");if(h)h.checked=v.menuFix;if(a)a.checked=v.dpadRepeat;if(r)r.checked=v.simLongPress;m=v.dpadRepeat,document.querySelectorAll(".vib-level-btn").forEach((n)=>{n.classList.toggle("active",Number(n.dataset.level)===v.vibStrength)})}function D1(h){v.menuFix=h,Z(),x(28)}function H1(h){v.dpadRepeat=h,m=h,Z(),x(28)}function N1(h){v.simLongPress=h,Z(),x(28)}function w1(h){v.vibStrength=h,Z(),s(),x(h)}function C1(){s();let h=document.getElementById("vibStatusText");if(!J)h.textContent=o("vibUnavailable");else if(_===!1)h.textContent=o("vibBlocked");else if(_===!0)h.textContent=o("vibWorking");else h.textContent=o("vibAvailable");document.getElementById("settingsModal").classList.remove("hidden")}function y(){document.getElementById("settingsModal").classList.add("hidden")}var J=typeof navigator.vibrate==="function",_=null;function x(h){let a=v.vibStrength/25,r=Array.isArray(h)?h.map((n)=>Math.round(n*a)):Math.round(h*a);try{if(typeof navigator.vibrate==="function")_=navigator.vibrate(r),J=!0;else J=!1}catch{J=!1}}var i=null,P=!1,T=null;function Q1(h){let a=document.querySelector(`[data-key="${h}"]`);if(a)a.classList.add("pressed");if(x(28),v.simLongPress&&!U.has(h)){i=h,P=!1,T=setTimeout(()=>{P=!0,x(20),M({keydown:h})},d1);return}if(v.menuFix&&h==="menu"){M({keyLong:h});return}if(M({keydown:h}),m&&U.has(h))N=h,K=setTimeout(()=>{if(N===h)B=setInterval(()=>{if(N===h)x(14),M({keydown:h})},L1)},p1)}function O(h){let a=document.querySelector(`[data-key="${h}"]`);if(a)a.classList.remove("pressed");if(v.simLongPress&&!U.has(h)){if(T)clearTimeout(T),T=null;if(i===h)if(P)M({keyup:h});else if(v.menuFix&&h==="menu")M({keyLong:h});else M({key:h});i=null;return}if(v.menuFix&&h==="menu")return;if(N===h)clearTimeout(K),clearInterval(B),K=B=null,N=null,x(20);M({keyup:h})}function $1(){document.getElementById("textModal").classList.remove("hidden");let h=document.getElementById("textInput");if(S&&q)h.value=q;else h.value="";a1(),setTimeout(()=>{h.focus(),h.select(),setTimeout(()=>{document.getElementById("textModal").scrollIntoView({block:"start"})},300)},100)}function a1(){let h=document.getElementById("textInput"),a=document.getElementById("btnAction");if(h.value.trim().length>0)a.innerHTML=`${u("send",18)} ${o("send")}`,a.className="btn-primary";else a.innerHTML=`${u("trash-2",18)} ${o("clear")}`,a.className="btn-cancel"}function k(){if(document.getElementById("textInput").value.trim().length>0)j1();else J1()}function r1(){document.getElementById("textModal").classList.add("hidden"),document.getElementById("textInput").value=""}function j1(){let a=document.getElementById("textInput").value.trim();if(!a)return;x([30,50,30]),M({text:a}),r1()}function J1(){x([25,40,25]),M({clear:!0})}async function T1(h,a){M({favAdd:{pkg:h,label:a}}),L(`${o("toastAdded")}: ${a}`),n1()}function X1(h){M({favDel:h}),L(o("toastRemoved"))}var w="",C=null;async function b(h,a){w=h,C=null,document.getElementById("editName").value=a,document.getElementById("editFile").value="";let r=document.getElementById("editIconPreview"),n=await g(`custom_${h}`);if(n)r.src=URL.createObjectURL(n);else if(p.get(h))r.src=p.get(h);else try{let t=await fetch(`/icons/apps/${encodeURIComponent(h)}.png`);if(t.ok){let f=await t.blob();await G(h,f);let A=URL.createObjectURL(f);p.set(h,A),r.src=A}}catch{}r.classList.remove("hidden"),document.getElementById("editModal").classList.remove("hidden")}function X(){document.getElementById("editModal").classList.add("hidden")}function Z1(){let h=document.getElementById("editFile").files?.[0];if(!h)return;C=h,document.getElementById("editIconPreview").src=URL.createObjectURL(h)}async function e(){let h=document.getElementById("editName").value.trim();if(!h)return;if(C)await G(`custom_${w}`,C),p.set(`custom_${w}`,URL.createObjectURL(C));M({favUpdate:{pkg:w,label:h}}),L(o("toastSaved")),X()}function R1(){M({favDel:w}),L(o("toastRemoved")),X()}function G1(h,a){M({launch:h}),L(`${o("toastLaunching")}: ${a}`)}function o1(){let h=document.getElementById("favApps"),a=`<button class="app-chip add-chip" id="addAppBtn" title="${o("addApp")}">${u("plus",26)}</button>`;if(!Y.length)h.innerHTML=a;else h.innerHTML=Y.map((r)=>`
      <button class="app-chip" data-pkg="${F(r.pkg)}" title="${o("titleTapLaunch")}">
        <span class="app-emoji"><img class="app-img" data-pkg="${F(r.pkg)}" alt="" loading="lazy"><span class="app-fallback">${u("app-window",22)}</span></span>
        <span class="app-name">${F(r.label)}</span>
        <span class="delete-badge">${u("x",12)}</span>
      </button>`).join("")+a;document.getElementById("addAppBtn")?.addEventListener("click",O1),h.querySelectorAll(".app-chip:not(.add-chip)").forEach((r)=>{let n=r.dataset.pkg,t=r.querySelector(".app-name")?.textContent||n,f=r.querySelector("img.app-img");if(f)c1(f,n);r.addEventListener("click",()=>{if(!V)G1(n,t)}),r.addEventListener("contextmenu",(D)=>{D.preventDefault(),b(n,t)});let A,V=!1;r.addEventListener("pointerdown",()=>{V=!1,A=setTimeout(()=>{V=!0,b(n,t)},600)}),r.addEventListener("pointerup",()=>{clearTimeout(A)}),r.addEventListener("pointerleave",()=>{clearTimeout(A)}),r.querySelector(".delete-badge")?.addEventListener("click",(D)=>{D.stopPropagation(),X1(n)})})}async function O1(){if(document.getElementById("pickerModal").classList.remove("hidden"),document.getElementById("appSpinner").style.display="block",document.getElementById("appSearch").value="",!H.length)M({appList:!0});else R(H)}function n1(){document.getElementById("pickerModal").classList.add("hidden")}function Y1(){let h=document.getElementById("appSearch").value.toLowerCase();R(H.filter((a)=>a.label.toLowerCase().includes(h)||a.pkg.toLowerCase().includes(h)))}function R(h){let a=document.getElementById("appPickerList");if(document.getElementById("appSpinner").style.display="none",!h.length){a.innerHTML=`<div style="padding:20px;text-align:center;color:#999">${o("noAppsFound")}</div>`;return}a.innerHTML=h.map((r)=>`
    <button class="picker-item" data-pkg="${F(r.pkg)}" data-label="${F(r.label)}">
      <span class="picker-ic"><img class="app-img" data-pkg="${F(r.pkg)}" alt="" loading="lazy"><span class="app-fallback">${u("app-window",22)}</span></span>
      <div><div>${F(r.label)}</div><div class="pkg-sub">${F(r.pkg)}</div></div>
    </button>`).join(""),a.querySelectorAll(".picker-item").forEach((r)=>{r.addEventListener("click",()=>T1(r.dataset.pkg,r.dataset.label));let n=r.querySelector("img.app-img");if(n)c1(n,n.dataset.pkg)})}var q1="tv-remote-icons",Q="icons",p=new Map;function u1(){return new Promise((h,a)=>{let r=indexedDB.open(q1,1);r.onupgradeneeded=()=>r.result.createObjectStore(Q,{keyPath:"pkg"}),r.onsuccess=()=>h(r.result),r.onerror=()=>a(r.error)})}function g(h){return new Promise(async(a)=>{try{let t=(await u1()).transaction(Q,"readonly").objectStore(Q).get(h);t.onsuccess=()=>a(t.result?.blob??null),t.onerror=()=>a(null)}catch{a(null)}})}function G(h,a){return new Promise(async(r)=>{try{let t=(await u1()).transaction(Q,"readwrite");t.objectStore(Q).put({pkg:h,blob:a}),t.oncomplete=()=>r(),t.onerror=()=>r()}catch{r()}})}async function c1(h,a){let r=()=>{h.classList.add("hidden"),h.nextElementSibling?.classList.remove("hidden")},n=(V)=>{h.src=V,h.classList.remove("hidden"),h.nextElementSibling?.classList.add("hidden")},t=await g(`custom_${a}`);if(t){let V=p.get(`custom_${a}`);if(!V)V=URL.createObjectURL(t),p.set(`custom_${a}`,V);n(V);return}let f=p.get(a);if(f){n(f);return}let A=await g(a);if(A){f=URL.createObjectURL(A),p.set(a,f),n(f);return}try{let V=await fetch(`/icons/apps/${encodeURIComponent(a)}.png`);if(V.ok){let D=await V.blob();await G(a,D),f=URL.createObjectURL(D),p.set(a,f),n(f);return}}catch{}r()}function B1(){W.innerHTML=`
    <div class="remote-header">
      <h1>${u("tv",22)} TV Remote</h1>
      <div class="header-right">
        <button class="icon-btn" id="btnSettings" title="⚙"><span class="settings-ic">${u("settings",20)}</span></button>
        <div class="status-area" id="statusArea" title="${o("statusTapReconnect")}">
          <span class="status-label" id="statusLabel">${o("statusChecking")}</span>
          <div class="status-dot" id="statusDot"></div>
        </div>
      </div>
    </div>
    <div class="auth-hint hidden" id="authHint">
      <div class="auth-hint-text">
        ${o("authHint1")}<br>
        ${o("authHint2")}
      </div>
      <button class="auth-force-btn" id="btnForceReconnect">${u("refresh-cw",18)} ${o("authForceBtn")}</button>
    </div>
    <div class="main-layout">
      <div class="dpad-col">
        <div class="dpad">
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="up" aria-label="${o("up")}">${u("chevron-up",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="left" aria-label="${o("left")}">${u("chevron-left",30)}</button>
          <button class="dpad-btn ok-btn" data-key="ok" aria-label="${o("ok")}">${u("circle",26)}</button>
          <button class="dpad-btn" data-key="right" aria-label="${o("right")}">${u("chevron-right",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="down" aria-label="${o("down")}">${u("chevron-down",30)}</button>
          <button class="dpad-btn empty"></button>
        </div>
      </div>
      <div class="actions-col">
        <div class="action-grid">
          <button class="action-btn accent-back" data-key="back">${u("corner-up-left",22)}<span>${o("actionBack")}</span></button>
          <button class="action-btn accent-home" data-key="home">${u("home",22)}<span>${o("actionHome")}</span></button>
          <button class="action-btn" data-key="menu">${u("menu",22)}<span>${o("actionMenu")}</span></button>
        </div>
        <div class="media-row">
          <div class="media-group">
            <button class="media-btn" data-key="mute" title="${o("mute")}">${u("volume-x")}</button>
            <button class="media-btn" data-key="voldown" title="${o("volDown")}">${u("volume-1")}</button>
            <button class="media-btn" data-key="volup" title="${o("volUp")}">${u("volume-2")}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-title">${o("quickLaunch")}</div>
    <div class="app-scroll" id="favApps"></div>
    <div class="bottom-bar">
      <button class="btn-kbd" id="btnText">${u("keyboard",20)} ${o("textInput")}</button>
    </div>
    <div class="modal-overlay hidden" id="textModal">
      <div class="modal-box">
        <h2>${u("keyboard",18)} ${o("textModalTitle")}</h2>
        <textarea id="textInput" placeholder="${o("textPlaceholder")}"></textarea>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelText">${u("x",18)} ${o("cancel")}</button>
          <button class="btn-primary" id="btnAction">${u("send",18)} ${o("send")}</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay hidden" id="pickerModal">
      <div class="modal-box">
        <h2>${u("app-window",18)} ${o("pickerTitle")}</h2>
        <input type="text" id="appSearch" placeholder="${o("searchPlaceholder")}">
        <div class="app-picker-list" id="appPickerList">
          <div class="spinner" id="appSpinner"></div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelPicker">${u("x",18)} ${o("cancel")}</button>
        </div>
      </div>
    </div>

    <!-- Settings Modal -->
    <div class="modal-overlay hidden" id="settingsModal">
      <div class="modal-box">
        <h2>${u("settings",18)} ${o("settingsTitle")}</h2>
        <label class="setting-row">
          <div class="setting-info">
            <div class="setting-name">${o("settingMenuFix")}</div>
            <div class="setting-desc">${o("settingMenuFixDesc")}</div>
          </div>
          <input type="checkbox" class="toggle" id="menuFixToggle">
        </label>
        <label class="setting-row">
          <div class="setting-info">
            <div class="setting-name">${o("settingDpadRepeat")}</div>
            <div class="setting-desc">${o("settingDpadRepeatDesc")}</div>
          </div>
          <input type="checkbox" class="toggle" id="dpadRepeatToggle">
        </label>
        <label class="setting-row">
          <div class="setting-info">
            <div class="setting-name">${o("settingSimLongPress")}</div>
            <div class="setting-desc">${o("settingSimLongPressDesc")}</div>
          </div>
          <input type="checkbox" class="toggle" id="simLongPressToggle">
        </label>
        <div class="setting-row setting-static vib-col">
          <div class="setting-name">${o("vibration")}</div>
          <div class="vib-levels">
            ${F1.map((h)=>`<button class="vib-level-btn" data-level="${h}">${h}</button>`).join("")}
          </div>
          <div class="setting-desc" id="vibStatusText"></div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCloseSettings">${o("close")}</button>
        </div>
      </div>
    </div>

    <!-- Edit App Modal -->
    <div class="modal-overlay hidden" id="editModal">
      <div class="modal-box">
        <h2>${u("app-window",18)} ${o("editTitle")}</h2>
        <div class="edit-icon-row">
          <img id="editIconPreview" class="edit-icon-preview" alt="">
          <label class="btn-cancel edit-upload-btn">${u("upload",16)} ${o("editUpload")}<input type="file" id="editFile" accept="image/*" hidden></label>
        </div>
        <input type="text" id="editName" placeholder="${o("editName")}">
        <div class="modal-row">
          <button class="btn-danger" id="btnDeleteApp">${u("trash-2",18)} ${o("editDelete")}</button>
          <button class="btn-cancel" id="btnCancelEdit">${o("editCancel")}</button>
          <button class="btn-primary" id="btnSaveEdit">${u("check",18)} ${o("editSave")}</button>
        </div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `}function K1(){document.addEventListener("contextmenu",(a)=>a.preventDefault());let h=0;document.addEventListener("touchstart",(a)=>{h=a.touches[0]?.clientY??0},{passive:!0}),document.addEventListener("touchmove",(a)=>{let r=a.touches[0]?.clientY??0;if(document.documentElement.scrollTop<=0&&document.body.scrollTop<=0&&r>h&&a.cancelable)a.preventDefault()},{passive:!1}),document.getElementById("statusArea")?.addEventListener("click",V1),document.getElementById("btnForceReconnect")?.addEventListener("click",x1),document.getElementById("btnSettings")?.addEventListener("click",C1),document.getElementById("btnCloseSettings")?.addEventListener("click",y),document.getElementById("menuFixToggle")?.addEventListener("change",(a)=>{D1(a.target.checked)}),document.getElementById("dpadRepeatToggle")?.addEventListener("change",(a)=>{H1(a.target.checked)}),document.getElementById("simLongPressToggle")?.addEventListener("change",(a)=>{N1(a.target.checked)}),document.querySelectorAll(".vib-level-btn").forEach((a)=>{a.addEventListener("click",()=>w1(Number(a.dataset.level)))}),document.getElementById("settingsModal")?.addEventListener("click",(a)=>{if(a.target===a.currentTarget)y()}),document.getElementById("btnDeleteApp")?.addEventListener("click",R1),document.getElementById("btnCancelEdit")?.addEventListener("click",X),document.getElementById("btnSaveEdit")?.addEventListener("click",e),document.getElementById("editFile")?.addEventListener("change",Z1),document.getElementById("editName")?.addEventListener("keydown",(a)=>{if(a.key==="Enter")a.preventDefault(),e()}),document.getElementById("editModal")?.addEventListener("click",(a)=>{if(a.target===a.currentTarget)X()}),W.querySelectorAll("[data-key]").forEach((a)=>{let r=a.dataset.key;a.addEventListener("pointerdown",(n)=>{n.preventDefault(),Q1(r)}),a.addEventListener("pointerup",(n)=>{n.preventDefault(),O(r)}),a.addEventListener("pointerleave",()=>O(r)),a.addEventListener("pointercancel",()=>O(r))}),document.getElementById("btnText")?.addEventListener("click",$1),document.getElementById("btnCancelText")?.addEventListener("click",r1),document.getElementById("btnAction")?.addEventListener("click",k),document.getElementById("textInput")?.addEventListener("input",a1),document.getElementById("textInput")?.addEventListener("keydown",(a)=>{if(a.key==="Enter"&&!a.shiftKey)a.preventDefault(),k()}),document.getElementById("btnCancelPicker")?.addEventListener("click",n1),document.getElementById("appSearch")?.addEventListener("input",Y1)}z1();B1();K1();s();h1();if(window.visualViewport)window.visualViewport.addEventListener("resize",()=>{let h=document.getElementById("textModal");if(h&&!h.classList.contains("hidden"))h.scrollIntoView({block:"start"})});if("serviceWorker"in navigator)navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then((h)=>{h.update().catch(()=>{})}).catch(()=>{});
