var l={zh:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"已连接",statusDisconnected:"未连接",statusReconnecting:"重连中…",statusChecking:"连接中…",statusAuth:"等待授权",statusError:"错误",statusNoDevice:"未设置设备",statusTapReconnect:"点击重连",statusTapRetry:"点击重试 — 在 TV 上确认",statusTapCheck:"点击检查",authHint1:"⚠️ 等待 TV 授权。请在电视上确认调试授权弹窗。",authHint2:"如未弹出，请在 TV 设置中：撤销 USB 调试授权，然后关闭再重开 ADB 调试。",authForceBtn:"强制重新认证",authApproving:"正在 TV 上确认…",actionBack:"返回",actionHome:"主页",actionMenu:"菜单",quickLaunch:"快捷启动应用",addApp:"添加应用",textInput:"文本输入",textModalTitle:"在 TV 上输入",textPlaceholder:"输入要发送的文本…",clear:"清空",cancel:"取消",send:"发送",pickerTitle:"选择应用",searchPlaceholder:"\uD83D\uDD0D 搜索应用…",noAppsFound:"未找到应用",settingsTitle:"设置",settingMenuFix:"菜单键修复",settingMenuFixDesc:"若菜单键单击不灵敏（需要双击）可开启",settingDpadRepeat:"方向键长按重复",settingDpadRepeatDesc:"长按上下左右时自动连续触发",settingSimLongPress:"模拟长按（操作更稳定）",settingSimLongPressDesc:"短按=普通按下，长按=长按事件；不发送分离的按下/抬起",vibration:"振动反馈",vibStrength:"振动强度",vibStrengthDesc:"基础时长（毫秒），档位越高越强",vibAvailable:"✓ 支持振动（按一次按键后刷新查看结果）",vibWorking:"✓ 振动正常工作",vibBlocked:"✗ 系统拒绝了振动 — 请检查系统设置 → 触摸振动/免打扰",vibUnavailable:"✗ 此设备/浏览器不支持振动（iOS Safari 不支持）",close:"关闭",editTitle:"编辑应用",editName:"应用名称",editUpload:"上传图标",editDelete:"删除",editSave:"保存",editCancel:"取消",toastAdded:"已添加",toastRemoved:"已移除",toastLaunching:"启动中",toastClearing:"清空中…",toastCleared:"已清空",toastSent:"已发送",toastSaved:"已保存",toastConnecting:"连接中…",toastConnected:"✓ 已连接",toastFailed:"✗ 失败",toastForceReconnect:"强制重连中… 请查看 TV",toastApproveOnTv:"\uD83D\uDD10 请查看 TV 屏幕",toastSentFail:"✗ 发送失败",toastLaunchFail:"✗ 启动失败",titleTapLaunch:"点击启动 · 长按移除",volUp:"音量+",volDown:"音量-",prev:"上一个",next:"下一个",rewind:"快退",fastForward:"快进",playPause:"播放/暂停",mute:"静音",up:"上",down:"下",left:"左",right:"右",ok:"确定"},en:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"Connected",statusDisconnected:"Disconnected",statusReconnecting:"Reconnecting…",statusChecking:"Connecting…",statusAuth:"Waiting for approval",statusError:"Error",statusNoDevice:"No device",statusTapReconnect:"Tap to reconnect",statusTapRetry:"Tap to retry — approve on TV",statusTapCheck:"Tap to check",authHint1:"⚠️ Waiting for TV approval. Check the debug authorization dialog on your TV.",authHint2:"If it doesn't appear: revoke USB debugging authorizations, then toggle ADB debugging off/on.",authForceBtn:"Force Re-authenticate",authApproving:"Approve on TV…",actionBack:"Back",actionHome:"Home",actionMenu:"Menu",quickLaunch:"Quick Launch",addApp:"Add App",textInput:"Text Input",textModalTitle:"Type on TV",textPlaceholder:"Enter text to send…",clear:"Clear",cancel:"Cancel",send:"Send",pickerTitle:"Select App",searchPlaceholder:"\uD83D\uDD0D Search apps…",noAppsFound:"No apps found",settingsTitle:"Settings",settingMenuFix:"Menu Key Fix",settingMenuFixDesc:"Enable if the menu key needs a double-tap to respond",settingDpadRepeat:"D-pad Key Repeat",settingDpadRepeatDesc:"Auto-repeat when holding up/down/left/right",settingSimLongPress:"Simulated Long-press (more stable)",settingSimLongPressDesc:"Short tap = normal press, hold = long-press; no separate down/up events",vibration:"Vibration",vibStrength:"Vibration strength",vibStrengthDesc:"Base duration in ms — higher is stronger",vibAvailable:"✓ API supported (press a key, then re-open to see result)",vibWorking:"✓ Vibration works",vibBlocked:"✗ System rejected vibration — check Settings → Touch vibration / DND",vibUnavailable:"✗ Vibration not supported (iOS Safari has no Vibration API)",close:"Close",editTitle:"Edit App",editName:"App name",editUpload:"Upload icon",editDelete:"Delete",editSave:"Save",editCancel:"Cancel",toastAdded:"✓ Added",toastRemoved:"✗ Removed",toastLaunching:"Launching",toastClearing:"Clearing…",toastCleared:"✓ Cleared",toastSent:"✓ Sent",toastSaved:"✓ Saved",toastConnecting:"Connecting…",toastConnected:"✓ Connected",toastFailed:"✗ Failed",toastForceReconnect:"Force reconnecting… check TV",toastApproveOnTv:"\uD83D\uDD10 Look at your TV screen",toastSentFail:"✗ Failed to send",toastLaunchFail:"✗ Failed to launch",titleTapLaunch:"Tap to launch · Long-press to remove",volUp:"Vol+",volDown:"Vol-",prev:"Prev",next:"Next",rewind:"Rewind",fastForward:"FF",playPause:"Play/Pause",mute:"Mute",up:"Up",down:"Down",left:"Left",right:"Right",ok:"OK"}};function x1(){return(navigator.language||navigator.userLanguage||"en").toLowerCase().startsWith("zh")?"zh":"en"}var d1=x1(),r=(h)=>l[d1][h]??l.en[h]??h;function c(h){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${h}</svg>`}var i={"chevron-up":c('<path d="m18 15-6-6-6 6" />'),"chevron-down":c('<path d="m6 9 6 6 6-6" />'),"chevron-left":c('<path d="m15 18-6-6 6-6" />'),"chevron-right":c('<path d="m9 18 6-6-6-6" />'),check:c('<path d="M20 6 9 17l-5-5" />'),circle:c('<circle cx="12" cy="12" r="10" />'),"corner-up-left":c(`<path d="M20 20v-7a4 4 0 0 0-4-4H4" />
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
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />`)};var M=(h,a=22)=>`<span class="lic">${i[h].replace("<svg",`<svg width="${a}" height="${a}"`)}</span>`,d=[],w=[],b,J=!1,y=!1,B="",E=document.getElementById("app"),p=null;function u1(){let h=location.protocol==="https:"?"wss":"ws";p=new WebSocket(`${h}://${location.host}/ws`),p.onopen=()=>{console.log("WS open"),N("connected")},p.onclose=()=>{p=null,N("disconnected"),setTimeout(u1,2000)},p.onmessage=(a)=>{let u=JSON.parse(a.data);if(u.ping)return;if(u.type==="status"){D1(u);return}if(u.type==="apps"){w=u.apps,Y(w);return}if(u.type==="icons"){z1(u.icons);return}if(u.type==="inputState"){y=u.editable,B=u.text||"",v1();return}if(u.error)f(`✗ ${u.error}`);else if(u.method==="yadb")f(r("toastSent"));else if(u.method==="yadb_clear")f(r("toastCleared"));else if(u.connected!==void 0)f(u.connected?r("toastConnected"):r("toastFailed"))}}function V(h){if(p?.readyState===WebSocket.OPEN)return p.send(JSON.stringify(h)),!0;return!1}function v1(){let h=document.getElementById("btnText");if(!h)return;let a=h.querySelector(".tv-input-dot");if(y){if(h.classList.add("tv-input-active"),!a){let u=document.createElement("span");u.className="tv-input-dot",h.appendChild(u)}}else h.classList.remove("tv-input-active"),a?.remove()}async function z1(h){let a=!1;for(let[u,n]of Object.entries(h))try{let t=atob(n),z=new Uint8Array(t.length);for(let H=0;H<t.length;H++)z[H]=t.charCodeAt(H);let D=new Blob([z],{type:"image/png"});G.set(u,D);let o=x.get(u);if(x.set(u,URL.createObjectURL(D)),o?.startsWith("blob:"))URL.revokeObjectURL(o);a=!0}catch{}if(a)j(),Y(w)}function N(h){let a=document.getElementById("statusDot"),u=document.getElementById("statusLabel"),n=document.getElementById("authHint");switch(h){case"connected":a.className="status-dot on",u.textContent=r("statusConnected"),n.classList.add("hidden"),X(!0),J=!0;break;case"disconnected":a.className="status-dot off",u.textContent=p?r("statusDisconnected"):r("statusReconnecting"),n.classList.add("hidden"),X(!1),J=!1;break;case"auth":a.className="status-dot auth",u.textContent=r("statusAuth"),n.classList.remove("hidden"),X(!1),J=!1;break;case"checking":a.className="status-dot off",u.textContent=r("statusChecking"),n.classList.add("hidden"),X(!1),J=!1;break}}function D1(h){switch(h.adbState){case"connected":N("connected");break;case"auth_required":N("auth");break;case"disconnected":case"no_device":N("disconnected");break}}function X(h){E.querySelectorAll(".dpad-btn:not(.empty), .action-btn, .media-btn, .btn-kbd, .app-chip:not(.add-chip)").forEach((a)=>{a.style.opacity=h?"":"0.4",a.style.pointerEvents=h?"":"none"})}function f1(){N("checking"),V({connect:!0})}function H1(){N("checking"),f(r("toastForceReconnect")),v([30,30,30]),V({forceReconnect:!0})}function f(h){let a=document.getElementById("toast");a.textContent=h,a.classList.add("show"),clearTimeout(b),b=setTimeout(()=>a.classList.remove("show"),2000)}function L(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var m=!0,S=null,W=null,F=null,K=new Set(["up","down","left","right"]),p1=500,L1=50,N1=150,w1=[25,50,100,125],A={menuFix:!1,dpadRepeat:!0,simLongPress:!1,vibStrength:25};function F1(){try{let h=localStorage.getItem("tv-remote-settings");if(h)A={...A,...JSON.parse(h)}}catch{}}function O(){try{localStorage.setItem("tv-remote-settings",JSON.stringify(A))}catch{}}function g(){let h=document.getElementById("menuFixToggle"),a=document.getElementById("dpadRepeatToggle"),u=document.getElementById("simLongPressToggle");if(h)h.checked=A.menuFix;if(a)a.checked=A.dpadRepeat;if(u)u.checked=A.simLongPress;m=A.dpadRepeat,document.querySelectorAll(".vib-level-btn").forEach((n)=>{n.classList.toggle("active",Number(n.dataset.level)===A.vibStrength)})}function Q1(h){A.menuFix=h,O(),v(28)}function T1(h){A.dpadRepeat=h,m=h,O(),v(28)}function $1(h){A.simLongPress=h,O(),v(28)}function j1(h){A.vibStrength=h,O(),g(),v(h)}function J1(){g();let h=document.getElementById("vibStatusText");if(!Z)h.textContent=r("vibUnavailable");else if(P===!1)h.textContent=r("vibBlocked");else if(P===!0)h.textContent=r("vibWorking");else h.textContent=r("vibAvailable");document.getElementById("settingsModal").classList.remove("hidden")}function k(){document.getElementById("settingsModal").classList.add("hidden")}var Z=typeof navigator.vibrate==="function",P=null;function v(h){let a=A.vibStrength/25,u=Array.isArray(h)?h.map((n)=>Math.round(n*a)):Math.round(h*a);try{if(typeof navigator.vibrate==="function")P=navigator.vibrate(u),Z=!0;else Z=!1}catch{Z=!1}}var U=null,_=!1,C=null;function X1(h){let a=document.querySelector(`[data-key="${h}"]`);if(a)a.classList.add("pressed");if(v(28),A.simLongPress&&!K.has(h)){U=h,_=!1,C=setTimeout(()=>{_=!0,v(20),V({keydown:h})},N1);return}if(A.menuFix&&h==="menu"){V({keyLong:h});return}if(V({keydown:h}),m&&K.has(h))F=h,W=setTimeout(()=>{if(F===h)S=setInterval(()=>{if(F===h)v(14),V({keydown:h})},L1)},p1)}function q(h){let a=document.querySelector(`[data-key="${h}"]`);if(a)a.classList.remove("pressed");if(A.simLongPress&&!K.has(h)){if(C)clearTimeout(C),C=null;if(U===h)if(_)V({keyup:h});else if(A.menuFix&&h==="menu")V({keyLong:h});else V({key:h});U=null;return}if(A.menuFix&&h==="menu")return;if(F===h)clearTimeout(W),clearInterval(S),W=S=null,F=null,v(20);V({keyup:h})}function Z1(){document.getElementById("textModal").classList.remove("hidden");let h=document.getElementById("textInput");if(y&&B)h.value=B;else h.value="";r1(),setTimeout(()=>{h.focus(),h.select(),setTimeout(()=>{document.getElementById("textModal").scrollIntoView({block:"start"})},300)},100)}function r1(){let h=document.getElementById("textInput"),a=document.getElementById("btnAction");if(h.value.trim().length>0)a.innerHTML=`${M("send",18)} ${r("send")}`,a.className="btn-primary";else a.innerHTML=`${M("trash-2",18)} ${r("clear")}`,a.className="btn-cancel"}function e(){if(document.getElementById("textInput").value.trim().length>0)C1();else R1()}function n1(){document.getElementById("textModal").classList.add("hidden"),document.getElementById("textInput").value=""}function C1(){let a=document.getElementById("textInput").value.trim();if(!a)return;v([30,50,30]),V({text:a}),n1()}function R1(){v([25,40,25]),V({clear:!0})}var M1="tv-remote-favorites";function G1(){try{return JSON.parse(localStorage.getItem(M1)||"[]")}catch{return[]}}function s(h){try{localStorage.setItem(M1,JSON.stringify(h))}catch{}}function O1(h,a){if(!d.find((u)=>u.pkg===h))d.push({pkg:h,label:a}),s(d),j();Y1(h),f(`${r("toastAdded")}: ${a}`),t1()}async function Y1(h){let a=G.get(h);if(a)try{await A1(h,a)}catch{}}function c1(h){d=d.filter((a)=>a.pkg!==h),s(d),j(),f(r("toastRemoved"))}var Q="",T=null;async function h1(h,a){Q=h,T=null,document.getElementById("editName").value=a,document.getElementById("editFile").value="";let u=document.getElementById("editIconPreview"),n=await I(`custom_${h}`);if(n)u.src=URL.createObjectURL(n);else if(x.get(`snap_${h}`))u.src=x.get(`snap_${h}`);else if(x.get(h))u.src=x.get(h);else if(G.get(h))u.src=URL.createObjectURL(G.get(h));u.classList.remove("hidden"),document.getElementById("editModal").classList.remove("hidden")}function R(){document.getElementById("editModal").classList.add("hidden")}function q1(){let h=document.getElementById("editFile").files?.[0];if(!h)return;T=h,document.getElementById("editIconPreview").src=URL.createObjectURL(h)}async function a1(){let h=document.getElementById("editName").value.trim();if(!h)return;if(T)await A1(`custom_${Q}`,T),x.set(`custom_${Q}`,URL.createObjectURL(T));let a=d.find((u)=>u.pkg===Q);if(a)a.label=h;s(d),j(),f(r("toastSaved")),R()}function B1(){c1(Q),R()}function S1(h,a){V({launch:h}),f(`${r("toastLaunching")}: ${a}`)}function j(){let h=document.getElementById("favApps"),a=`<button class="app-chip add-chip" id="addAppBtn" title="${r("addApp")}">${M("plus",26)}</button>`;if(!d.length)h.innerHTML=a;else h.innerHTML=d.map((u)=>`
      <button class="app-chip" data-pkg="${L(u.pkg)}" title="${r("titleTapLaunch")}">
        <span class="app-emoji"><img class="app-img" data-pkg="${L(u.pkg)}" alt="" loading="lazy"><span class="app-fallback">${M("app-window",22)}</span></span>
        <span class="app-name">${L(u.label)}</span>
        <span class="delete-badge">${M("x",12)}</span>
      </button>`).join("")+a;document.getElementById("addAppBtn")?.addEventListener("click",W1),h.querySelectorAll(".app-chip:not(.add-chip)").forEach((u)=>{let n=u.dataset.pkg,t=u.querySelector(".app-name")?.textContent||n,z=u.querySelector("img.app-img");if(z)U1(z,n);u.addEventListener("click",()=>{if(!o)S1(n,t)}),u.addEventListener("contextmenu",(H)=>{H.preventDefault(),h1(n,t)});let D,o=!1;u.addEventListener("pointerdown",()=>{o=!1,D=setTimeout(()=>{o=!0,h1(n,t)},600)}),u.addEventListener("pointerup",()=>{clearTimeout(D)}),u.addEventListener("pointerleave",()=>{clearTimeout(D)}),u.querySelector(".delete-badge")?.addEventListener("click",(H)=>{H.stopPropagation(),c1(n)})})}async function W1(){if(document.getElementById("pickerModal").classList.remove("hidden"),document.getElementById("appSpinner").style.display="block",document.getElementById("appSearch").value="",!w.length)V({appList:!0});else Y(w)}function t1(){document.getElementById("pickerModal").classList.add("hidden")}function K1(){let h=document.getElementById("appSearch").value.toLowerCase();Y(w.filter((a)=>a.label.toLowerCase().includes(h)||a.pkg.toLowerCase().includes(h)))}function Y(h){let a=document.getElementById("appPickerList");if(document.getElementById("appSpinner").style.display="none",!h.length){a.innerHTML=`<div style="padding:20px;text-align:center;color:#999">${r("noAppsFound")}</div>`;return}a.innerHTML=h.map((u)=>`
    <button class="picker-item" data-pkg="${L(u.pkg)}" data-label="${L(u.label)}">
      <span class="picker-ic"><img class="app-img" data-pkg="${L(u.pkg)}" alt="" loading="lazy"><span class="app-fallback">${M("app-window",22)}</span></span>
      <div><div>${L(u.label)}</div><div class="pkg-sub">${L(u.pkg)}</div></div>
    </button>`).join(""),a.querySelectorAll(".picker-item").forEach((u)=>{u.addEventListener("click",()=>O1(u.dataset.pkg,u.dataset.label));let n=u.querySelector("img.app-img");if(n)V1(n,n.dataset.pkg)})}var P1="tv-remote-icons",$="icons",x=new Map,G=new Map;function o1(){return new Promise((h,a)=>{let u=indexedDB.open(P1,1);u.onupgradeneeded=()=>u.result.createObjectStore($,{keyPath:"pkg"}),u.onsuccess=()=>h(u.result),u.onerror=()=>a(u.error)})}function I(h){return new Promise(async(a)=>{try{let t=(await o1()).transaction($,"readonly").objectStore($).get(h);t.onsuccess=()=>a(t.result?.blob??null),t.onerror=()=>a(null)}catch{a(null)}})}function A1(h,a){return new Promise(async(u)=>{try{let t=(await o1()).transaction($,"readwrite");t.objectStore($).put({pkg:h,blob:a}),t.oncomplete=()=>u(),t.onerror=()=>u()}catch{u()}})}async function U1(h,a){let u=()=>{h.classList.add("hidden"),h.nextElementSibling?.classList.remove("hidden")},n=(o)=>{h.src=o,h.classList.remove("hidden"),h.nextElementSibling?.classList.add("hidden")},t=await I(`custom_${a}`);if(t){let o=x.get(`custom_${a}`);if(!o)o=URL.createObjectURL(t),x.set(`custom_${a}`,o);n(o);return}let z=await I(a);if(z){let o=x.get(`snap_${a}`);if(!o)o=URL.createObjectURL(z),x.set(`snap_${a}`,o);n(o);return}let D=x.get(a);if(D){n(D);return}await V1(h,a)}async function V1(h,a){let u=()=>{h.classList.add("hidden"),h.nextElementSibling?.classList.remove("hidden")},n=(z)=>{h.src=z,h.classList.remove("hidden"),h.nextElementSibling?.classList.add("hidden")},t=x.get(a);if(t){n(t);return}u()}function _1(){E.innerHTML=`
    <div class="remote-header">
      <h1>${M("tv",22)} TV Remote</h1>
      <div class="header-right">
        <button class="icon-btn" id="btnSettings" title="⚙"><span class="settings-ic">${M("settings",20)}</span></button>
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
      <button class="auth-force-btn" id="btnForceReconnect">${M("refresh-cw",18)} ${r("authForceBtn")}</button>
    </div>
    <div class="main-layout">
      <div class="dpad-col">
        <div class="dpad">
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="up" aria-label="${r("up")}">${M("chevron-up",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="left" aria-label="${r("left")}">${M("chevron-left",30)}</button>
          <button class="dpad-btn ok-btn" data-key="ok" aria-label="${r("ok")}">${M("circle",26)}</button>
          <button class="dpad-btn" data-key="right" aria-label="${r("right")}">${M("chevron-right",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="down" aria-label="${r("down")}">${M("chevron-down",30)}</button>
          <button class="dpad-btn empty"></button>
        </div>
      </div>
      <div class="actions-col">
        <div class="action-grid">
          <button class="action-btn accent-back" data-key="back">${M("corner-up-left",22)}<span>${r("actionBack")}</span></button>
          <button class="action-btn accent-home" data-key="home">${M("home",22)}<span>${r("actionHome")}</span></button>
          <button class="action-btn" data-key="menu">${M("menu",22)}<span>${r("actionMenu")}</span></button>
        </div>
        <div class="media-row">
          <div class="media-group">
            <button class="media-btn" data-key="mute" title="${r("mute")}">${M("volume-x")}</button>
            <button class="media-btn" data-key="voldown" title="${r("volDown")}">${M("volume-1")}</button>
            <button class="media-btn" data-key="volup" title="${r("volUp")}">${M("volume-2")}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-title">${r("quickLaunch")}</div>
    <div class="app-scroll" id="favApps"></div>
    <div class="bottom-bar">
      <button class="btn-kbd" id="btnText">${M("keyboard",20)} ${r("textInput")}</button>
    </div>
    <div class="modal-overlay hidden" id="textModal">
      <div class="modal-box">
        <h2>${M("keyboard",18)} ${r("textModalTitle")}</h2>
        <textarea id="textInput" placeholder="${r("textPlaceholder")}"></textarea>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelText">${M("x",18)} ${r("cancel")}</button>
          <button class="btn-primary" id="btnAction">${M("send",18)} ${r("send")}</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay hidden" id="pickerModal">
      <div class="modal-box">
        <h2>${M("app-window",18)} ${r("pickerTitle")}</h2>
        <input type="text" id="appSearch" placeholder="${r("searchPlaceholder")}">
        <div class="spinner" id="appSpinner"></div>
        <div class="app-picker-list" id="appPickerList"></div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelPicker">${M("x",18)} ${r("cancel")}</button>
        </div>
      </div>
    </div>

    <!-- Settings Modal -->
    <div class="modal-overlay hidden" id="settingsModal">
      <div class="modal-box">
        <h2>${M("settings",18)} ${r("settingsTitle")}</h2>
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
        <label class="setting-row">
          <div class="setting-info">
            <div class="setting-name">${r("settingSimLongPress")}</div>
            <div class="setting-desc">${r("settingSimLongPressDesc")}</div>
          </div>
          <input type="checkbox" class="toggle" id="simLongPressToggle">
        </label>
        <div class="setting-row setting-static vib-col">
          <div class="setting-name">${r("vibration")}</div>
          <div class="vib-levels">
            ${w1.map((h)=>`<button class="vib-level-btn" data-level="${h}">${h}</button>`).join("")}
          </div>
          <div class="setting-desc" id="vibStatusText"></div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCloseSettings">${r("close")}</button>
        </div>
      </div>
    </div>

    <!-- Edit App Modal -->
    <div class="modal-overlay hidden" id="editModal">
      <div class="modal-box">
        <h2>${M("app-window",18)} ${r("editTitle")}</h2>
        <div class="edit-icon-row">
          <img id="editIconPreview" class="edit-icon-preview" alt="">
          <label class="btn-cancel edit-upload-btn">${M("upload",16)} ${r("editUpload")}<input type="file" id="editFile" accept="image/*" hidden></label>
        </div>
        <input type="text" id="editName" placeholder="${r("editName")}">
        <div class="modal-row">
          <button class="btn-danger" id="btnDeleteApp">${M("trash-2",18)} ${r("editDelete")}</button>
          <button class="btn-cancel" id="btnCancelEdit">${r("editCancel")}</button>
          <button class="btn-primary" id="btnSaveEdit">${M("check",18)} ${r("editSave")}</button>
        </div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `}function I1(){document.addEventListener("contextmenu",(h)=>h.preventDefault()),document.getElementById("statusArea")?.addEventListener("click",f1),document.getElementById("btnForceReconnect")?.addEventListener("click",H1),document.getElementById("btnSettings")?.addEventListener("click",J1),document.getElementById("btnCloseSettings")?.addEventListener("click",k),document.getElementById("menuFixToggle")?.addEventListener("change",(h)=>{Q1(h.target.checked)}),document.getElementById("dpadRepeatToggle")?.addEventListener("change",(h)=>{T1(h.target.checked)}),document.getElementById("simLongPressToggle")?.addEventListener("change",(h)=>{$1(h.target.checked)}),document.querySelectorAll(".vib-level-btn").forEach((h)=>{h.addEventListener("click",()=>j1(Number(h.dataset.level)))}),document.getElementById("settingsModal")?.addEventListener("click",(h)=>{if(h.target===h.currentTarget)k()}),document.getElementById("btnDeleteApp")?.addEventListener("click",B1),document.getElementById("btnCancelEdit")?.addEventListener("click",R),document.getElementById("btnSaveEdit")?.addEventListener("click",a1),document.getElementById("editFile")?.addEventListener("change",q1),document.getElementById("editName")?.addEventListener("keydown",(h)=>{if(h.key==="Enter")h.preventDefault(),a1()}),document.getElementById("editModal")?.addEventListener("click",(h)=>{if(h.target===h.currentTarget)R()}),E.querySelectorAll("[data-key]").forEach((h)=>{let a=h.dataset.key;h.addEventListener("pointerdown",(u)=>{u.preventDefault(),X1(a)}),h.addEventListener("pointerup",(u)=>{u.preventDefault(),q(a)}),h.addEventListener("pointerleave",()=>q(a)),h.addEventListener("pointercancel",()=>q(a))}),document.getElementById("btnText")?.addEventListener("click",Z1),document.getElementById("btnCancelText")?.addEventListener("click",n1),document.getElementById("btnAction")?.addEventListener("click",e),document.getElementById("textInput")?.addEventListener("input",r1),document.getElementById("textInput")?.addEventListener("keydown",(h)=>{if(h.key==="Enter"&&!h.shiftKey)h.preventDefault(),e()}),document.getElementById("btnCancelPicker")?.addEventListener("click",t1),document.getElementById("appSearch")?.addEventListener("input",K1)}F1();d=G1();_1();I1();g();j();u1();if(window.visualViewport)window.visualViewport.addEventListener("resize",()=>{let h=document.getElementById("textModal");if(h&&!h.classList.contains("hidden"))h.scrollIntoView({block:"start"})});if("serviceWorker"in navigator)navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then((h)=>{h.update().catch(()=>{})}).catch(()=>{});
