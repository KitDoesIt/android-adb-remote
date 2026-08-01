var s={zh:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"已连接",statusDisconnected:"未连接",statusReconnecting:"重连中…",statusChecking:"连接中…",statusAuth:"等待授权",statusError:"错误",statusNoDevice:"未设置设备",statusTapReconnect:"点击重连",statusTapRetry:"点击重试 — 在 TV 上确认",statusTapCheck:"点击检查",authHint1:"⚠️ 等待 TV 授权。请在电视上确认调试授权弹窗。",authHint2:"如未弹出，请在 TV 设置中：撤销 USB 调试授权，然后关闭再重开 ADB 调试。",authForceBtn:"强制重新认证",authApproving:"正在 TV 上确认…",actionBack:"返回",actionHome:"主页",actionMenu:"菜单",quickLaunch:"快捷启动应用",addApp:"添加应用",textInput:"文本输入",textModalTitle:"在 TV 上输入",textPlaceholder:"输入要发送的文本…",clear:"清空",cancel:"取消",send:"发送",pickerTitle:"选择应用",searchPlaceholder:"\uD83D\uDD0D 搜索应用…",noAppsFound:"未找到应用",settingsTitle:"设置",settingMenuFix:"菜单键修复",settingMenuFixDesc:"若菜单键单击不灵敏（需要双击）可开启",settingDpadRepeat:"方向键长按重复",settingDpadRepeatDesc:"长按上下左右时自动连续触发",settingSimLongPress:"模拟长按（操作更稳定）",settingSimLongPressDesc:"短按=普通按下，长按=长按事件；不发送分离的按下/抬起",vibration:"振动反馈",vibStrength:"振动强度",vibStrengthDesc:"基础时长（毫秒），档位越高越强",vibAvailable:"✓ 支持振动（按一次按键后刷新查看结果）",vibWorking:"✓ 振动正常工作",vibBlocked:"✗ 系统拒绝了振动 — 请检查系统设置 → 触摸振动/免打扰",vibUnavailable:"✗ 此设备/浏览器不支持振动（iOS Safari 不支持）",close:"关闭",editTitle:"编辑应用",editName:"应用名称",editUpload:"上传图标",editDelete:"删除",editSave:"保存",editCancel:"取消",toastAdded:"已添加",toastRemoved:"已移除",toastLaunching:"启动中",toastClearing:"清空中…",toastCleared:"已清空",toastSent:"已发送",toastSaved:"已保存",toastConnecting:"连接中…",toastConnected:"✓ 已连接",toastFailed:"✗ 失败",toastForceReconnect:"强制重连中… 请查看 TV",toastApproveOnTv:"\uD83D\uDD10 请查看 TV 屏幕",toastSentFail:"✗ 发送失败",toastLaunchFail:"✗ 启动失败",titleTapLaunch:"点击启动 · 长按移除",volUp:"音量+",volDown:"音量-",prev:"上一个",next:"下一个",rewind:"快退",fastForward:"快进",playPause:"播放/暂停",mute:"静音",up:"上",down:"下",left:"左",right:"右",ok:"确定"},en:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"Connected",statusDisconnected:"Disconnected",statusReconnecting:"Reconnecting…",statusChecking:"Connecting…",statusAuth:"Waiting for approval",statusError:"Error",statusNoDevice:"No device",statusTapReconnect:"Tap to reconnect",statusTapRetry:"Tap to retry — approve on TV",statusTapCheck:"Tap to check",authHint1:"⚠️ Waiting for TV approval. Check the debug authorization dialog on your TV.",authHint2:"If it doesn't appear: revoke USB debugging authorizations, then toggle ADB debugging off/on.",authForceBtn:"Force Re-authenticate",authApproving:"Approve on TV…",actionBack:"Back",actionHome:"Home",actionMenu:"Menu",quickLaunch:"Quick Launch",addApp:"Add App",textInput:"Text Input",textModalTitle:"Type on TV",textPlaceholder:"Enter text to send…",clear:"Clear",cancel:"Cancel",send:"Send",pickerTitle:"Select App",searchPlaceholder:"\uD83D\uDD0D Search apps…",noAppsFound:"No apps found",settingsTitle:"Settings",settingMenuFix:"Menu Key Fix",settingMenuFixDesc:"Enable if the menu key needs a double-tap to respond",settingDpadRepeat:"D-pad Key Repeat",settingDpadRepeatDesc:"Auto-repeat when holding up/down/left/right",settingSimLongPress:"Simulated Long-press (more stable)",settingSimLongPressDesc:"Short tap = normal press, hold = long-press; no separate down/up events",vibration:"Vibration",vibStrength:"Vibration strength",vibStrengthDesc:"Base duration in ms — higher is stronger",vibAvailable:"✓ API supported (press a key, then re-open to see result)",vibWorking:"✓ Vibration works",vibBlocked:"✗ System rejected vibration — check Settings → Touch vibration / DND",vibUnavailable:"✗ Vibration not supported (iOS Safari has no Vibration API)",close:"Close",editTitle:"Edit App",editName:"App name",editUpload:"Upload icon",editDelete:"Delete",editSave:"Save",editCancel:"Cancel",toastAdded:"✓ Added",toastRemoved:"✗ Removed",toastLaunching:"Launching",toastClearing:"Clearing…",toastCleared:"✓ Cleared",toastSent:"✓ Sent",toastSaved:"✓ Saved",toastConnecting:"Connecting…",toastConnected:"✓ Connected",toastFailed:"✗ Failed",toastForceReconnect:"Force reconnecting… check TV",toastApproveOnTv:"\uD83D\uDD10 Look at your TV screen",toastSentFail:"✗ Failed to send",toastLaunchFail:"✗ Failed to launch",titleTapLaunch:"Tap to launch · Long-press to remove",volUp:"Vol+",volDown:"Vol-",prev:"Prev",next:"Next",rewind:"Rewind",fastForward:"FF",playPause:"Play/Pause",mute:"Mute",up:"Up",down:"Down",left:"Left",right:"Right",ok:"OK"}};function t1(){return(navigator.language||navigator.userLanguage||"en").toLowerCase().startsWith("zh")?"zh":"en"}var c1=t1(),o=(h)=>s[c1][h]??s.en[h]??h;function t(h){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${h}</svg>`}var I={"chevron-up":t('<path d="m18 15-6-6-6 6" />'),"chevron-down":t('<path d="m6 9 6 6 6-6" />'),"chevron-left":t('<path d="m15 18-6-6 6-6" />'),"chevron-right":t('<path d="m9 18 6-6-6-6" />'),check:t('<path d="M20 6 9 17l-5-5" />'),circle:t('<circle cx="12" cy="12" r="10" />'),"corner-up-left":t(`<path d="M20 20v-7a4 4 0 0 0-4-4H4" />
  <path d="M9 14 4 9l5-5" />`),home:t(`<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />`),menu:t(`<path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />`),keyboard:t(`<path d="M10 8h.01" />
  <path d="M12 12h.01" />
  <path d="M14 8h.01" />
  <path d="M16 12h.01" />
  <path d="M18 8h.01" />
  <path d="M6 8h.01" />
  <path d="M7 16h10" />
  <path d="M8 12h.01" />
  <rect width="20" height="16" x="2" y="4" rx="2" />`),settings:t(`<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
  <circle cx="12" cy="12" r="3" />`),plus:t(`<path d="M5 12h14" />
  <path d="M12 5v14" />`),"app-window":t(`<rect x="2" y="4" width="20" height="16" rx="2" />
  <path d="M10 4v4" />
  <path d="M2 8h20" />
  <path d="M6 4v4" />`),"trash-2":t(`<path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />`),send:t(`<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
  <path d="m21.854 2.147-10.94 10.939" />`),x:t(`<path d="M18 6 6 18" />
  <path d="m6 6 12 12" />`),search:t(`<path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />`),"volume-2":t(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />
  <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />`),"volume-1":t(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <path d="M16 9a5 5 0 0 1 0 6" />`),"volume-x":t(`<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
  <line x1="22" x2="16" y1="9" y2="15" />
  <line x1="16" x2="22" y1="9" y2="15" />`),"skip-back":t(`<path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
  <path d="M3 20V4" />`),rewind:t(`<path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" />
  <path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" />`),play:t('<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />'),"fast-forward":t(`<path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" />
  <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />`),"skip-forward":t(`<path d="M21 4v16" />
  <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />`),"refresh-cw":t(`<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
  <path d="M8 16H3v5" />`),tv:t(`<path d="m17 2-5 5-5-5" />
  <rect width="20" height="15" x="2" y="7" rx="2" />`),upload:t(`<path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />`)};var n=(h,r=22)=>`<span class="lic">${I[h].replace("<svg",`<svg width="${r}" height="${r}"`)}</span>`,O=[],H=[],l,$=!1,i=!1,q="",g=document.getElementById("app"),L=null;function b(){let h=location.protocol==="https:"?"wss":"ws";L=new WebSocket(`${h}://${location.host}/ws`),L.onopen=()=>{console.log("WS open"),F("connected"),M({favGet:!0})},L.onclose=()=>{L=null,F("disconnected"),setTimeout(b,2000)},L.onmessage=(r)=>{let a=JSON.parse(r.data);if(a.ping)return;if(a.type==="status"){f1(a);return}if(a.type==="apps"){H=a.apps,Y(H);return}if(a.type==="favorites"){O=a.favorites,r1();return}if(a.type==="icons"){v1(a.icons);return}if(a.type==="inputState"){i=a.editable,q=a.text||"",M1();return}if(a.error)D(`✗ ${a.error}`);else if(a.method==="yadb")D(o("toastSent"));else if(a.method==="yadb_clear")D(o("toastCleared"));else if(a.connected!==void 0)D(a.connected?o("toastConnected"):o("toastFailed"))}}function M(h){if(L?.readyState===WebSocket.OPEN)return L.send(JSON.stringify(h)),!0;return!1}function M1(){let h=document.getElementById("btnText");if(!h)return;let r=h.querySelector(".tv-input-dot");if(i){if(h.classList.add("tv-input-active"),!r){let a=document.createElement("span");a.className="tv-input-dot",h.appendChild(a)}}else h.classList.remove("tv-input-active"),r?.remove()}async function v1(h){let r=!1;for(let[a,u]of Object.entries(h))try{let c=atob(u),f=new Uint8Array(c.length);for(let A=0;A<c.length;A++)f[A]=c.charCodeAt(A);await R(a,new Blob([f],{type:"image/png"})),x.delete(a),r=!0}catch{}if(r)r1(),Y(H)}function F(h){let r=document.getElementById("statusDot"),a=document.getElementById("statusLabel"),u=document.getElementById("authHint");switch(h){case"connected":r.className="status-dot on",a.textContent=o("statusConnected"),u.classList.add("hidden"),j(!0),$=!0;break;case"disconnected":r.className="status-dot off",a.textContent=L?o("statusDisconnected"):o("statusReconnecting"),u.classList.add("hidden"),j(!1),$=!1;break;case"auth":r.className="status-dot auth",a.textContent=o("statusAuth"),u.classList.remove("hidden"),j(!1),$=!1;break;case"checking":r.className="status-dot off",a.textContent=o("statusChecking"),u.classList.add("hidden"),j(!1),$=!1;break}}function f1(h){switch(h.adbState){case"connected":F("connected");break;case"auth_required":F("auth");break;case"disconnected":case"no_device":F("disconnected");break}}function j(h){g.querySelectorAll(".dpad-btn:not(.empty), .action-btn, .media-btn, .btn-kbd, .app-chip:not(.add-chip)").forEach((r)=>{r.style.opacity=h?"":"0.4",r.style.pointerEvents=h?"":"none"})}function A1(){F("checking"),M({connect:!0})}function V1(){F("checking"),D(o("toastForceReconnect")),p([30,30,30]),M({forceReconnect:!0})}function D(h){let r=document.getElementById("toast");r.textContent=h,r.classList.add("show"),clearTimeout(l),l=setTimeout(()=>r.classList.remove("show"),2000)}function d(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var W=!0,B=null,K=null,N=null,p1=new Set(["up","down","left","right"]),x1=500,D1=50,L1=150,d1=[25,50,100,125],v={menuFix:!1,dpadRepeat:!0,simLongPress:!1,vibStrength:25};function F1(){try{let h=localStorage.getItem("tv-remote-settings");if(h)v={...v,...JSON.parse(h)}}catch{}}function Z(){try{localStorage.setItem("tv-remote-settings",JSON.stringify(v))}catch{}}function m(){let h=document.getElementById("menuFixToggle"),r=document.getElementById("dpadRepeatToggle"),a=document.getElementById("simLongPressToggle");if(h)h.checked=v.menuFix;if(r)r.checked=v.dpadRepeat;if(a)a.checked=v.simLongPress;W=v.dpadRepeat,document.querySelectorAll(".vib-level-btn").forEach((u)=>{u.classList.toggle("active",Number(u.dataset.level)===v.vibStrength)})}function z1(h){v.menuFix=h,Z(),p(28)}function H1(h){v.dpadRepeat=h,W=h,Z(),p(28)}function N1(h){v.simLongPress=h,Z(),p(28)}function w1(h){v.vibStrength=h,Z(),m(),p(h)}function C1(){m();let h=document.getElementById("vibStatusText");if(!J)h.textContent=o("vibUnavailable");else if(_===!1)h.textContent=o("vibBlocked");else if(_===!0)h.textContent=o("vibWorking");else h.textContent=o("vibAvailable");document.getElementById("settingsModal").classList.remove("hidden")}function y(){document.getElementById("settingsModal").classList.add("hidden")}var J=typeof navigator.vibrate==="function",_=null;function p(h){let r=v.vibStrength/25,a=Array.isArray(h)?h.map((u)=>Math.round(u*r)):Math.round(h*r);try{if(typeof navigator.vibrate==="function")_=navigator.vibrate(a),J=!0;else J=!1}catch{J=!1}}var U=null,P=!1,T=null;function Q1(h){let r=document.querySelector(`[data-key="${h}"]`);if(r)r.classList.add("pressed");if(p(28),v.simLongPress){U=h,P=!1,T=setTimeout(()=>{P=!0,p(20),M({keydown:h})},L1);return}if(v.menuFix&&h==="menu"){M({keyLong:h});return}if(M({keydown:h}),W&&p1.has(h))N=h,K=setTimeout(()=>{if(N===h)B=setInterval(()=>{if(N===h)p(14),M({keydown:h})},D1)},x1)}function G(h){let r=document.querySelector(`[data-key="${h}"]`);if(r)r.classList.remove("pressed");if(v.simLongPress){if(T)clearTimeout(T),T=null;if(U===h)if(P)M({keyup:h});else if(v.menuFix&&h==="menu")M({keyLong:h});else M({key:h});U=null;return}if(v.menuFix&&h==="menu")return;if(N===h)clearTimeout(K),clearInterval(B),K=B=null,N=null,p(20);M({keyup:h})}function $1(){document.getElementById("textModal").classList.remove("hidden");let h=document.getElementById("textInput");if(i&&q)h.value=q;else h.value="";h1(),setTimeout(()=>{h.focus(),h.select(),setTimeout(()=>{document.getElementById("textModal").scrollIntoView({block:"start"})},300)},100)}function h1(){let h=document.getElementById("textInput"),r=document.getElementById("btnAction");if(h.value.trim().length>0)r.innerHTML=`${n("send",18)} ${o("send")}`,r.className="btn-primary";else r.innerHTML=`${n("trash-2",18)} ${o("clear")}`,r.className="btn-cancel"}function E(){if(document.getElementById("textInput").value.trim().length>0)j1();else J1()}function a1(){document.getElementById("textModal").classList.add("hidden"),document.getElementById("textInput").value=""}function j1(){let r=document.getElementById("textInput").value.trim();if(!r)return;p([30,50,30]),M({text:r}),a1()}function J1(){p([25,40,25]),M({clear:!0})}async function T1(h,r){M({favAdd:{pkg:h,label:r}}),D(`${o("toastAdded")}: ${r}`),o1()}function X1(h){M({favDel:h}),D(o("toastRemoved"))}var w="",C=null;async function e(h,r){w=h,C=null,document.getElementById("editName").value=r,document.getElementById("editFile").value="";let a=document.getElementById("editIconPreview"),u=await S(`custom_${h}`);if(u)a.src=URL.createObjectURL(u);else if(x.get(h))a.src=x.get(h);else try{let c=await fetch(`/icons/apps/${encodeURIComponent(h)}.png`);if(c.ok){let f=await c.blob();await R(h,f);let A=URL.createObjectURL(f);x.set(h,A),a.src=A}}catch{}a.classList.remove("hidden"),document.getElementById("editModal").classList.remove("hidden")}function X(){document.getElementById("editModal").classList.add("hidden")}function Z1(){let h=document.getElementById("editFile").files?.[0];if(!h)return;C=h,document.getElementById("editIconPreview").src=URL.createObjectURL(h)}async function k(){let h=document.getElementById("editName").value.trim();if(!h)return;if(C)await R(`custom_${w}`,C),x.set(`custom_${w}`,URL.createObjectURL(C));M({favUpdate:{pkg:w,label:h}}),D(o("toastSaved")),X()}function Y1(){M({favDel:w}),D(o("toastRemoved")),X()}function R1(h,r){M({launch:h}),D(`${o("toastLaunching")}: ${r}`)}function r1(){let h=document.getElementById("favApps"),r=`<button class="app-chip add-chip" id="addAppBtn" title="${o("addApp")}">${n("plus",26)}</button>`;if(!O.length)h.innerHTML=r;else h.innerHTML=O.map((a)=>`
      <button class="app-chip" data-pkg="${d(a.pkg)}" title="${o("titleTapLaunch")}">
        <span class="app-emoji"><img class="app-img" data-pkg="${d(a.pkg)}" alt="" loading="lazy"><span class="app-fallback">${n("app-window",22)}</span></span>
        <span class="app-name">${d(a.label)}</span>
        <span class="delete-badge">${n("x",12)}</span>
      </button>`).join("")+r;document.getElementById("addAppBtn")?.addEventListener("click",G1),h.querySelectorAll(".app-chip:not(.add-chip)").forEach((a)=>{let u=a.dataset.pkg,c=a.querySelector(".app-name")?.textContent||u,f=a.querySelector("img.app-img");if(f)n1(f,u);a.addEventListener("click",()=>{if(!V)R1(u,c)}),a.addEventListener("contextmenu",(z)=>{z.preventDefault(),e(u,c)});let A,V=!1;a.addEventListener("pointerdown",()=>{V=!1,A=setTimeout(()=>{V=!0,e(u,c)},600)}),a.addEventListener("pointerup",()=>{clearTimeout(A)}),a.addEventListener("pointerleave",()=>{clearTimeout(A)}),a.querySelector(".delete-badge")?.addEventListener("click",(z)=>{z.stopPropagation(),X1(u)})})}async function G1(){if(document.getElementById("pickerModal").classList.remove("hidden"),document.getElementById("appSpinner").style.display="block",document.getElementById("appSearch").value="",!H.length)M({appList:!0});else Y(H)}function o1(){document.getElementById("pickerModal").classList.add("hidden")}function O1(){let h=document.getElementById("appSearch").value.toLowerCase();Y(H.filter((r)=>r.label.toLowerCase().includes(h)||r.pkg.toLowerCase().includes(h)))}function Y(h){let r=document.getElementById("appPickerList");if(document.getElementById("appSpinner").style.display="none",!h.length){r.innerHTML=`<div style="padding:20px;text-align:center;color:#999">${o("noAppsFound")}</div>`;return}r.innerHTML=h.map((a)=>`
    <button class="picker-item" data-pkg="${d(a.pkg)}" data-label="${d(a.label)}">
      <span class="picker-ic"><img class="app-img" data-pkg="${d(a.pkg)}" alt="" loading="lazy"><span class="app-fallback">${n("app-window",22)}</span></span>
      <div><div>${d(a.label)}</div><div class="pkg-sub">${d(a.pkg)}</div></div>
    </button>`).join(""),r.querySelectorAll(".picker-item").forEach((a)=>{a.addEventListener("click",()=>T1(a.dataset.pkg,a.dataset.label));let u=a.querySelector("img.app-img");if(u)n1(u,u.dataset.pkg)})}var q1="tv-remote-icons",Q="icons",x=new Map;function u1(){return new Promise((h,r)=>{let a=indexedDB.open(q1,1);a.onupgradeneeded=()=>a.result.createObjectStore(Q,{keyPath:"pkg"}),a.onsuccess=()=>h(a.result),a.onerror=()=>r(a.error)})}function S(h){return new Promise(async(r)=>{try{let c=(await u1()).transaction(Q,"readonly").objectStore(Q).get(h);c.onsuccess=()=>r(c.result?.blob??null),c.onerror=()=>r(null)}catch{r(null)}})}function R(h,r){return new Promise(async(a)=>{try{let c=(await u1()).transaction(Q,"readwrite");c.objectStore(Q).put({pkg:h,blob:r}),c.oncomplete=()=>a(),c.onerror=()=>a()}catch{a()}})}async function n1(h,r){let a=()=>{h.classList.add("hidden"),h.nextElementSibling?.classList.remove("hidden")},u=(V)=>{h.src=V,h.classList.remove("hidden"),h.nextElementSibling?.classList.add("hidden")},c=await S(`custom_${r}`);if(c){let V=x.get(`custom_${r}`);if(!V)V=URL.createObjectURL(c),x.set(`custom_${r}`,V);u(V);return}let f=x.get(r);if(f){u(f);return}let A=await S(r);if(A){f=URL.createObjectURL(A),x.set(r,f),u(f);return}try{let V=await fetch(`/icons/apps/${encodeURIComponent(r)}.png`);if(V.ok){let z=await V.blob();await R(r,z),f=URL.createObjectURL(z),x.set(r,f),u(f);return}}catch{}a()}function B1(){g.innerHTML=`
    <div class="remote-header">
      <h1>${n("tv",22)} TV Remote</h1>
      <div class="header-right">
        <button class="icon-btn" id="btnSettings" title="⚙"><span class="settings-ic">${n("settings",20)}</span></button>
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
      <button class="auth-force-btn" id="btnForceReconnect">${n("refresh-cw",18)} ${o("authForceBtn")}</button>
    </div>
    <div class="main-layout">
      <div class="dpad-col">
        <div class="dpad">
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="up" aria-label="${o("up")}">${n("chevron-up",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="left" aria-label="${o("left")}">${n("chevron-left",30)}</button>
          <button class="dpad-btn ok-btn" data-key="ok" aria-label="${o("ok")}">${n("circle",26)}</button>
          <button class="dpad-btn" data-key="right" aria-label="${o("right")}">${n("chevron-right",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="down" aria-label="${o("down")}">${n("chevron-down",30)}</button>
          <button class="dpad-btn empty"></button>
        </div>
      </div>
      <div class="actions-col">
        <div class="action-grid">
          <button class="action-btn accent-back" data-key="back">${n("corner-up-left",22)}<span>${o("actionBack")}</span></button>
          <button class="action-btn accent-home" data-key="home">${n("home",22)}<span>${o("actionHome")}</span></button>
          <button class="action-btn" data-key="menu">${n("menu",22)}<span>${o("actionMenu")}</span></button>
        </div>
        <div class="media-row">
          <div class="media-group">
            <button class="media-btn" data-key="mute" title="${o("mute")}">${n("volume-x")}</button>
            <button class="media-btn" data-key="voldown" title="${o("volDown")}">${n("volume-1")}</button>
            <button class="media-btn" data-key="volup" title="${o("volUp")}">${n("volume-2")}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-title">${o("quickLaunch")}</div>
    <div class="app-scroll" id="favApps"></div>
    <div class="bottom-bar">
      <button class="btn-kbd" id="btnText">${n("keyboard",20)} ${o("textInput")}</button>
    </div>
    <div class="modal-overlay hidden" id="textModal">
      <div class="modal-box">
        <h2>${n("keyboard",18)} ${o("textModalTitle")}</h2>
        <textarea id="textInput" placeholder="${o("textPlaceholder")}"></textarea>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelText">${n("x",18)} ${o("cancel")}</button>
          <button class="btn-primary" id="btnAction">${n("send",18)} ${o("send")}</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay hidden" id="pickerModal">
      <div class="modal-box">
        <h2>${n("app-window",18)} ${o("pickerTitle")}</h2>
        <input type="text" id="appSearch" placeholder="${o("searchPlaceholder")}">
        <div class="app-picker-list" id="appPickerList">
          <div class="spinner" id="appSpinner"></div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelPicker">${n("x",18)} ${o("cancel")}</button>
        </div>
      </div>
    </div>

    <!-- Settings Modal -->
    <div class="modal-overlay hidden" id="settingsModal">
      <div class="modal-box">
        <h2>${n("settings",18)} ${o("settingsTitle")}</h2>
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
        <div class="setting-row setting-static">
          <div class="setting-info">
            <div class="setting-name">${o("vibration")}</div>
            <div class="setting-desc" id="vibStatusText"></div>
          </div>
          <div class="vib-levels">
            ${d1.map((h)=>`<button class="vib-level-btn" data-level="${h}">${h}</button>`).join("")}
          </div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCloseSettings">${o("close")}</button>
        </div>
      </div>
    </div>

    <!-- Edit App Modal -->
    <div class="modal-overlay hidden" id="editModal">
      <div class="modal-box">
        <h2>${n("app-window",18)} ${o("editTitle")}</h2>
        <div class="edit-icon-row">
          <img id="editIconPreview" class="edit-icon-preview" alt="">
          <label class="btn-cancel edit-upload-btn">${n("upload",16)} ${o("editUpload")}<input type="file" id="editFile" accept="image/*" hidden></label>
        </div>
        <input type="text" id="editName" placeholder="${o("editName")}">
        <div class="modal-row">
          <button class="btn-danger" id="btnDeleteApp">${n("trash-2",18)} ${o("editDelete")}</button>
          <button class="btn-cancel" id="btnCancelEdit">${o("editCancel")}</button>
          <button class="btn-primary" id="btnSaveEdit">${n("check",18)} ${o("editSave")}</button>
        </div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `}function K1(){document.addEventListener("contextmenu",(h)=>h.preventDefault()),document.getElementById("statusArea")?.addEventListener("click",A1),document.getElementById("btnForceReconnect")?.addEventListener("click",V1),document.getElementById("btnSettings")?.addEventListener("click",C1),document.getElementById("btnCloseSettings")?.addEventListener("click",y),document.getElementById("menuFixToggle")?.addEventListener("change",(h)=>{z1(h.target.checked)}),document.getElementById("dpadRepeatToggle")?.addEventListener("change",(h)=>{H1(h.target.checked)}),document.getElementById("simLongPressToggle")?.addEventListener("change",(h)=>{N1(h.target.checked)}),document.querySelectorAll(".vib-level-btn").forEach((h)=>{h.addEventListener("click",()=>w1(Number(h.dataset.level)))}),document.getElementById("settingsModal")?.addEventListener("click",(h)=>{if(h.target===h.currentTarget)y()}),document.getElementById("btnDeleteApp")?.addEventListener("click",Y1),document.getElementById("btnCancelEdit")?.addEventListener("click",X),document.getElementById("btnSaveEdit")?.addEventListener("click",k),document.getElementById("editFile")?.addEventListener("change",Z1),document.getElementById("editName")?.addEventListener("keydown",(h)=>{if(h.key==="Enter")h.preventDefault(),k()}),document.getElementById("editModal")?.addEventListener("click",(h)=>{if(h.target===h.currentTarget)X()}),g.querySelectorAll("[data-key]").forEach((h)=>{let r=h.dataset.key;h.addEventListener("pointerdown",(a)=>{a.preventDefault(),Q1(r)}),h.addEventListener("pointerup",(a)=>{a.preventDefault(),G(r)}),h.addEventListener("pointerleave",()=>G(r)),h.addEventListener("pointercancel",()=>G(r))}),document.getElementById("btnText")?.addEventListener("click",$1),document.getElementById("btnCancelText")?.addEventListener("click",a1),document.getElementById("btnAction")?.addEventListener("click",E),document.getElementById("textInput")?.addEventListener("input",h1),document.getElementById("textInput")?.addEventListener("keydown",(h)=>{if(h.key==="Enter"&&!h.shiftKey)h.preventDefault(),E()}),document.getElementById("btnCancelPicker")?.addEventListener("click",o1),document.getElementById("appSearch")?.addEventListener("input",O1)}F1();B1();K1();m();b();if(window.visualViewport)window.visualViewport.addEventListener("resize",()=>{let h=document.getElementById("textModal");if(h&&!h.classList.contains("hidden"))h.scrollIntoView({block:"start"})});if("serviceWorker"in navigator)navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then((h)=>{h.update().catch(()=>{})}).catch(()=>{});
