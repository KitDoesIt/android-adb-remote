var E={zh:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"已连接",statusDisconnected:"未连接",statusReconnecting:"重连中…",statusChecking:"连接中…",statusAuth:"等待授权",statusError:"错误",statusNoDevice:"未设置设备",statusTapReconnect:"点击重连",statusTapRetry:"点击重试 — 在 TV 上确认",statusTapCheck:"点击检查",authHint1:"⚠️ 等待 TV 授权。请在电视上确认调试授权弹窗。",authHint2:"如未弹出，请在 TV 设置中：撤销 USB 调试授权，然后关闭再重开 ADB 调试。",authForceBtn:"强制重新认证",authApproving:"正在 TV 上确认…",actionBack:"返回",actionHome:"主页",actionMenu:"菜单",quickLaunch:"快捷启动应用",addApp:"添加应用",textInput:"文本输入",textModalTitle:"在 TV 上输入",textPlaceholder:"输入要发送的文本…",clear:"清空",cancel:"取消",send:"发送",pickerTitle:"选择应用",searchPlaceholder:"\uD83D\uDD0D 搜索应用…",noAppsFound:"未找到应用",settingsTitle:"设置",settingMenuFix:"菜单键修复",settingMenuFixDesc:"若菜单键单击不灵敏（需要双击）可开启",settingDpadRepeat:"方向键长按重复",settingDpadRepeatDesc:"长按上下左右时自动连续触发",settingSimLongPress:"模拟长按（操作更稳定）",settingSimLongPressDesc:"短按=普通按下，长按=长按事件；不发送分离的按下/抬起",vibration:"振动反馈",vibStrength:"振动强度",vibStrengthDesc:"基础时长（毫秒），档位越高越强",vibAvailable:"✓ 支持振动（按一次按键后刷新查看结果）",vibWorking:"✓ 振动正常工作",vibBlocked:"✗ 系统拒绝了振动 — 请检查系统设置 → 触摸振动/免打扰",vibUnavailable:"✗ 此设备/浏览器不支持振动（iOS Safari 不支持）",close:"关闭",editTitle:"编辑应用",editName:"应用名称",editUpload:"上传图标",editDelete:"删除",editSave:"保存",editCancel:"取消",toastAdded:"已添加",toastRemoved:"已移除",toastLaunching:"启动中",toastClearing:"清空中…",toastCleared:"已清空",toastSent:"已发送",toastSaved:"已保存",toastConnecting:"连接中…",toastConnected:"✓ 已连接",toastFailed:"✗ 失败",toastForceReconnect:"强制重连中… 请查看 TV",toastApproveOnTv:"\uD83D\uDD10 请查看 TV 屏幕",toastSentFail:"✗ 发送失败",toastLaunchFail:"✗ 启动失败",titleTapLaunch:"点击启动 · 长按移除",volUp:"音量+",volDown:"音量-",prev:"上一个",next:"下一个",rewind:"快退",fastForward:"快进",playPause:"播放/暂停",mute:"静音",up:"上",down:"下",left:"左",right:"右",ok:"确定"},en:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"Connected",statusDisconnected:"Disconnected",statusReconnecting:"Reconnecting…",statusChecking:"Connecting…",statusAuth:"Waiting for approval",statusError:"Error",statusNoDevice:"No device",statusTapReconnect:"Tap to reconnect",statusTapRetry:"Tap to retry — approve on TV",statusTapCheck:"Tap to check",authHint1:"⚠️ Waiting for TV approval. Check the debug authorization dialog on your TV.",authHint2:"If it doesn't appear: revoke USB debugging authorizations, then toggle ADB debugging off/on.",authForceBtn:"Force Re-authenticate",authApproving:"Approve on TV…",actionBack:"Back",actionHome:"Home",actionMenu:"Menu",quickLaunch:"Quick Launch",addApp:"Add App",textInput:"Text Input",textModalTitle:"Type on TV",textPlaceholder:"Enter text to send…",clear:"Clear",cancel:"Cancel",send:"Send",pickerTitle:"Select App",searchPlaceholder:"\uD83D\uDD0D Search apps…",noAppsFound:"No apps found",settingsTitle:"Settings",settingMenuFix:"Menu Key Fix",settingMenuFixDesc:"Enable if the menu key needs a double-tap to respond",settingDpadRepeat:"D-pad Key Repeat",settingDpadRepeatDesc:"Auto-repeat when holding up/down/left/right",settingSimLongPress:"Simulated Long-press (more stable)",settingSimLongPressDesc:"Short tap = normal press, hold = long-press; no separate down/up events",vibration:"Vibration",vibStrength:"Vibration strength",vibStrengthDesc:"Base duration in ms — higher is stronger",vibAvailable:"✓ API supported (press a key, then re-open to see result)",vibWorking:"✓ Vibration works",vibBlocked:"✗ System rejected vibration — check Settings → Touch vibration / DND",vibUnavailable:"✗ Vibration not supported (iOS Safari has no Vibration API)",close:"Close",editTitle:"Edit App",editName:"App name",editUpload:"Upload icon",editDelete:"Delete",editSave:"Save",editCancel:"Cancel",toastAdded:"✓ Added",toastRemoved:"✗ Removed",toastLaunching:"Launching",toastClearing:"Clearing…",toastCleared:"✓ Cleared",toastSent:"✓ Sent",toastSaved:"✓ Saved",toastConnecting:"Connecting…",toastConnected:"✓ Connected",toastFailed:"✗ Failed",toastForceReconnect:"Force reconnecting… check TV",toastApproveOnTv:"\uD83D\uDD10 Look at your TV screen",toastSentFail:"✗ Failed to send",toastLaunchFail:"✗ Failed to launch",titleTapLaunch:"Tap to launch · Long-press to remove",volUp:"Vol+",volDown:"Vol-",prev:"Prev",next:"Next",rewind:"Rewind",fastForward:"FF",playPause:"Play/Pause",mute:"Mute",up:"Up",down:"Down",left:"Left",right:"Right",ok:"OK"}};function V1(){return(navigator.language||navigator.userLanguage||"en").toLowerCase().startsWith("zh")?"zh":"en"}var p1=V1(),u=(h)=>E[p1][h]??E.en[h]??h;function o(h){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${h}</svg>`}var s={"chevron-up":o('<path d="m18 15-6-6-6 6" />'),"chevron-down":o('<path d="m6 9 6 6 6-6" />'),"chevron-left":o('<path d="m15 18-6-6 6-6" />'),"chevron-right":o('<path d="m9 18 6-6-6-6" />'),check:o('<path d="M20 6 9 17l-5-5" />'),circle:o('<circle cx="12" cy="12" r="10" />'),"corner-up-left":o(`<path d="M20 20v-7a4 4 0 0 0-4-4H4" />
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
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />`)};var M=(h,a=22)=>`<span class="lic">${s[h].replace("<svg",`<svg width="${a}" height="${a}"`)}</span>`,d=[],w=[],k,j=!1,m=!1,B="",I=document.getElementById("app"),L=null;function n1(){let h=location.protocol==="https:"?"wss":"ws";L=new WebSocket(`${h}://${location.host}/ws`),L.onopen=()=>{console.log("WS open"),H("connected")},L.onclose=()=>{L=null,H("disconnected"),setTimeout(n1,2000)},L.onmessage=(a)=>{let n=JSON.parse(a.data);if(n.ping)return;if(n.type==="status"){v1(n);return}if(n.type==="apps"){w=n.apps,O(w);return}if(n.type==="icons"){d1(n.icons);return}if(n.type==="inputState"){m=n.editable,B=n.text||"",x1();return}if(n.error)D(`✗ ${n.error}`);else if(n.method==="yadb")D(u("toastSent"));else if(n.method==="yadb_clear")D(u("toastCleared"));else if(n.connected!==void 0)D(n.connected?u("toastConnected"):u("toastFailed"))}}function p(h){if(L?.readyState===WebSocket.OPEN)return L.send(JSON.stringify(h)),!0;return!1}function x1(){let h=document.getElementById("btnText");if(!h)return;let a=h.querySelector(".tv-input-dot");if(m){if(h.classList.add("tv-input-active"),!a){let n=document.createElement("span");n.className="tv-input-dot",h.appendChild(n)}}else h.classList.remove("tv-input-active"),a?.remove()}async function d1(h){let a=!1;for(let[n,r]of Object.entries(h))try{let c=atob(r),A=new Uint8Array(c.length);for(let V=0;V<c.length;V++)A[V]=c.charCodeAt(V);await Y(n,new Blob([A],{type:"image/png"})),z.delete(n),a=!0}catch{}if(a)$(),O(w)}function H(h){let a=document.getElementById("statusDot"),n=document.getElementById("statusLabel"),r=document.getElementById("authHint");switch(h){case"connected":a.className="status-dot on",n.textContent=u("statusConnected"),r.classList.add("hidden"),J(!0),j=!0;break;case"disconnected":a.className="status-dot off",n.textContent=L?u("statusDisconnected"):u("statusReconnecting"),r.classList.add("hidden"),J(!1),j=!1;break;case"auth":a.className="status-dot auth",n.textContent=u("statusAuth"),r.classList.remove("hidden"),J(!1),j=!1;break;case"checking":a.className="status-dot off",n.textContent=u("statusChecking"),r.classList.add("hidden"),J(!1),j=!1;break}}function v1(h){switch(h.adbState){case"connected":H("connected");break;case"auth_required":H("auth");break;case"disconnected":case"no_device":H("disconnected");break}}function J(h){I.querySelectorAll(".dpad-btn:not(.empty), .action-btn, .media-btn, .btn-kbd, .app-chip:not(.add-chip)").forEach((a)=>{a.style.opacity=h?"":"0.4",a.style.pointerEvents=h?"":"none"})}function z1(){H("checking"),p({connect:!0})}function D1(){H("checking"),D(u("toastForceReconnect")),v([30,30,30]),p({forceReconnect:!0})}function D(h){let a=document.getElementById("toast");a.textContent=h,a.classList.add("show"),clearTimeout(k),k=setTimeout(()=>a.classList.remove("show"),2000)}function f(h){return h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var i=!0,S=null,U=null,F=null,W=new Set(["up","down","left","right"]),L1=500,f1=50,H1=150,N1=[25,50,100,125],t={menuFix:!1,dpadRepeat:!0,simLongPress:!1,vibStrength:25};function w1(){try{let h=localStorage.getItem("tv-remote-settings");if(h)t={...t,...JSON.parse(h)}}catch{}}function G(){try{localStorage.setItem("tv-remote-settings",JSON.stringify(t))}catch{}}function y(){let h=document.getElementById("menuFixToggle"),a=document.getElementById("dpadRepeatToggle"),n=document.getElementById("simLongPressToggle");if(h)h.checked=t.menuFix;if(a)a.checked=t.dpadRepeat;if(n)n.checked=t.simLongPress;i=t.dpadRepeat,document.querySelectorAll(".vib-level-btn").forEach((r)=>{r.classList.toggle("active",Number(r.dataset.level)===t.vibStrength)})}function F1(h){t.menuFix=h,G(),v(28)}function C1(h){t.dpadRepeat=h,i=h,G(),v(28)}function Q1(h){t.simLongPress=h,G(),v(28)}function T1(h){t.vibStrength=h,G(),y(),v(h)}function $1(){y();let h=document.getElementById("vibStatusText");if(!X)h.textContent=u("vibUnavailable");else if(K===!1)h.textContent=u("vibBlocked");else if(K===!0)h.textContent=u("vibWorking");else h.textContent=u("vibAvailable");document.getElementById("settingsModal").classList.remove("hidden")}function b(){document.getElementById("settingsModal").classList.add("hidden")}var X=typeof navigator.vibrate==="function",K=null;function v(h){let a=t.vibStrength/25,n=Array.isArray(h)?h.map((r)=>Math.round(r*a)):Math.round(h*a);try{if(typeof navigator.vibrate==="function")K=navigator.vibrate(n),X=!0;else X=!1}catch{X=!1}}var _=null,P=!1,Z=null;function j1(h){let a=document.querySelector(`[data-key="${h}"]`);if(a)a.classList.add("pressed");if(v(28),t.simLongPress&&!W.has(h)){_=h,P=!1,Z=setTimeout(()=>{P=!0,v(20),p({keydown:h})},H1);return}if(t.menuFix&&h==="menu"){p({keyLong:h});return}if(p({keydown:h}),i&&W.has(h))F=h,U=setTimeout(()=>{if(F===h)S=setInterval(()=>{if(F===h)v(14),p({keydown:h})},f1)},L1)}function q(h){let a=document.querySelector(`[data-key="${h}"]`);if(a)a.classList.remove("pressed");if(t.simLongPress&&!W.has(h)){if(Z)clearTimeout(Z),Z=null;if(_===h)if(P)p({keyup:h});else if(t.menuFix&&h==="menu")p({keyLong:h});else p({key:h});_=null;return}if(t.menuFix&&h==="menu")return;if(F===h)clearTimeout(U),clearInterval(S),U=S=null,F=null,v(20);p({keyup:h})}function J1(){document.getElementById("textModal").classList.remove("hidden");let h=document.getElementById("textInput");if(m&&B)h.value=B;else h.value="";u1(),setTimeout(()=>{h.focus(),h.select(),setTimeout(()=>{document.getElementById("textModal").scrollIntoView({block:"start"})},300)},100)}function u1(){let h=document.getElementById("textInput"),a=document.getElementById("btnAction");if(h.value.trim().length>0)a.innerHTML=`${M("send",18)} ${u("send")}`,a.className="btn-primary";else a.innerHTML=`${M("trash-2",18)} ${u("clear")}`,a.className="btn-cancel"}function e(){if(document.getElementById("textInput").value.trim().length>0)X1();else Z1()}function r1(){document.getElementById("textModal").classList.add("hidden"),document.getElementById("textInput").value=""}function X1(){let a=document.getElementById("textInput").value.trim();if(!a)return;v([30,50,30]),p({text:a}),r1()}function Z1(){v([25,40,25]),p({clear:!0})}var M1="tv-remote-favorites";function R1(){try{return JSON.parse(localStorage.getItem(M1)||"[]")}catch{return[]}}function l(h){try{localStorage.setItem(M1,JSON.stringify(h))}catch{}}function G1(h,a){if(!d.find((n)=>n.pkg===h))d.push({pkg:h,label:a}),l(d),$();D(`${u("toastAdded")}: ${a}`),c1()}function o1(h){d=d.filter((a)=>a.pkg!==h),l(d),$(),D(u("toastRemoved"))}var C="",Q=null;async function h1(h,a){C=h,Q=null,document.getElementById("editName").value=a,document.getElementById("editFile").value="";let n=document.getElementById("editIconPreview"),r=await g(`custom_${h}`);if(r)n.src=URL.createObjectURL(r);else if(z.get(h))n.src=z.get(h);else try{let c=await fetch(`/icons/apps/${encodeURIComponent(h)}.png`);if(c.ok){let A=await c.blob();await Y(h,A);let V=URL.createObjectURL(A);z.set(h,V),n.src=V}}catch{}n.classList.remove("hidden"),document.getElementById("editModal").classList.remove("hidden")}function R(){document.getElementById("editModal").classList.add("hidden")}function O1(){let h=document.getElementById("editFile").files?.[0];if(!h)return;Q=h,document.getElementById("editIconPreview").src=URL.createObjectURL(h)}async function a1(){let h=document.getElementById("editName").value.trim();if(!h)return;if(Q)await Y(`custom_${C}`,Q),z.set(`custom_${C}`,URL.createObjectURL(Q));let a=d.find((n)=>n.pkg===C);if(a)a.label=h;l(d),$(),D(u("toastSaved")),R()}function Y1(){o1(C),R()}function q1(h,a){p({launch:h}),D(`${u("toastLaunching")}: ${a}`)}function $(){let h=document.getElementById("favApps"),a=`<button class="app-chip add-chip" id="addAppBtn" title="${u("addApp")}">${M("plus",26)}</button>`;if(!d.length)h.innerHTML=a;else h.innerHTML=d.map((n)=>`
      <button class="app-chip" data-pkg="${f(n.pkg)}" title="${u("titleTapLaunch")}">
        <span class="app-emoji"><img class="app-img" data-pkg="${f(n.pkg)}" alt="" loading="lazy"><span class="app-fallback">${M("app-window",22)}</span></span>
        <span class="app-name">${f(n.label)}</span>
        <span class="delete-badge">${M("x",12)}</span>
      </button>`).join("")+a;document.getElementById("addAppBtn")?.addEventListener("click",B1),h.querySelectorAll(".app-chip:not(.add-chip)").forEach((n)=>{let r=n.dataset.pkg,c=n.querySelector(".app-name")?.textContent||r,A=n.querySelector("img.app-img");if(A)A1(A,r);n.addEventListener("click",()=>{if(!x)q1(r,c)}),n.addEventListener("contextmenu",(N)=>{N.preventDefault(),h1(r,c)});let V,x=!1;n.addEventListener("pointerdown",()=>{x=!1,V=setTimeout(()=>{x=!0,h1(r,c)},600)}),n.addEventListener("pointerup",()=>{clearTimeout(V)}),n.addEventListener("pointerleave",()=>{clearTimeout(V)}),n.querySelector(".delete-badge")?.addEventListener("click",(N)=>{N.stopPropagation(),o1(r)})})}async function B1(){if(document.getElementById("pickerModal").classList.remove("hidden"),document.getElementById("appSpinner").style.display="block",document.getElementById("appSearch").value="",!w.length)p({appList:!0});else O(w)}function c1(){document.getElementById("pickerModal").classList.add("hidden")}function S1(){let h=document.getElementById("appSearch").value.toLowerCase();O(w.filter((a)=>a.label.toLowerCase().includes(h)||a.pkg.toLowerCase().includes(h)))}function O(h){let a=document.getElementById("appPickerList");if(document.getElementById("appSpinner").style.display="none",!h.length){a.innerHTML=`<div style="padding:20px;text-align:center;color:#999">${u("noAppsFound")}</div>`;return}a.innerHTML=h.map((n)=>`
    <button class="picker-item" data-pkg="${f(n.pkg)}" data-label="${f(n.label)}">
      <span class="picker-ic"><img class="app-img" data-pkg="${f(n.pkg)}" alt="" loading="lazy"><span class="app-fallback">${M("app-window",22)}</span></span>
      <div><div>${f(n.label)}</div><div class="pkg-sub">${f(n.pkg)}</div></div>
    </button>`).join(""),a.querySelectorAll(".picker-item").forEach((n)=>{n.addEventListener("click",()=>G1(n.dataset.pkg,n.dataset.label));let r=n.querySelector("img.app-img");if(r)A1(r,r.dataset.pkg)})}var U1="tv-remote-icons",T="icons",z=new Map;function t1(){return new Promise((h,a)=>{let n=indexedDB.open(U1,1);n.onupgradeneeded=()=>n.result.createObjectStore(T,{keyPath:"pkg"}),n.onsuccess=()=>h(n.result),n.onerror=()=>a(n.error)})}function g(h){return new Promise(async(a)=>{try{let c=(await t1()).transaction(T,"readonly").objectStore(T).get(h);c.onsuccess=()=>a(c.result?.blob??null),c.onerror=()=>a(null)}catch{a(null)}})}function Y(h,a){return new Promise(async(n)=>{try{let c=(await t1()).transaction(T,"readwrite");c.objectStore(T).put({pkg:h,blob:a}),c.oncomplete=()=>n(),c.onerror=()=>n()}catch{n()}})}async function A1(h,a){let n=()=>{h.classList.add("hidden"),h.nextElementSibling?.classList.remove("hidden")},r=(x)=>{h.src=x,h.classList.remove("hidden"),h.nextElementSibling?.classList.add("hidden")},c=await g(`custom_${a}`);if(c){let x=z.get(`custom_${a}`);if(!x)x=URL.createObjectURL(c),z.set(`custom_${a}`,x);r(x);return}let A=z.get(a);if(A){r(A);return}let V=await g(a);if(V){A=URL.createObjectURL(V),z.set(a,A),r(A);return}try{let x=await fetch(`/icons/apps/${encodeURIComponent(a)}.png`);if(x.ok){let N=await x.blob();await Y(a,N),A=URL.createObjectURL(N),z.set(a,A),r(A);return}}catch{}n()}function W1(){I.innerHTML=`
    <div class="remote-header">
      <h1>${M("tv",22)} TV Remote</h1>
      <div class="header-right">
        <button class="icon-btn" id="btnSettings" title="⚙"><span class="settings-ic">${M("settings",20)}</span></button>
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
      <button class="auth-force-btn" id="btnForceReconnect">${M("refresh-cw",18)} ${u("authForceBtn")}</button>
    </div>
    <div class="main-layout">
      <div class="dpad-col">
        <div class="dpad">
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="up" aria-label="${u("up")}">${M("chevron-up",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="left" aria-label="${u("left")}">${M("chevron-left",30)}</button>
          <button class="dpad-btn ok-btn" data-key="ok" aria-label="${u("ok")}">${M("circle",26)}</button>
          <button class="dpad-btn" data-key="right" aria-label="${u("right")}">${M("chevron-right",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="down" aria-label="${u("down")}">${M("chevron-down",30)}</button>
          <button class="dpad-btn empty"></button>
        </div>
      </div>
      <div class="actions-col">
        <div class="action-grid">
          <button class="action-btn accent-back" data-key="back">${M("corner-up-left",22)}<span>${u("actionBack")}</span></button>
          <button class="action-btn accent-home" data-key="home">${M("home",22)}<span>${u("actionHome")}</span></button>
          <button class="action-btn" data-key="menu">${M("menu",22)}<span>${u("actionMenu")}</span></button>
        </div>
        <div class="media-row">
          <div class="media-group">
            <button class="media-btn" data-key="mute" title="${u("mute")}">${M("volume-x")}</button>
            <button class="media-btn" data-key="voldown" title="${u("volDown")}">${M("volume-1")}</button>
            <button class="media-btn" data-key="volup" title="${u("volUp")}">${M("volume-2")}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-title">${u("quickLaunch")}</div>
    <div class="app-scroll" id="favApps"></div>
    <div class="bottom-bar">
      <button class="btn-kbd" id="btnText">${M("keyboard",20)} ${u("textInput")}</button>
    </div>
    <div class="modal-overlay hidden" id="textModal">
      <div class="modal-box">
        <h2>${M("keyboard",18)} ${u("textModalTitle")}</h2>
        <textarea id="textInput" placeholder="${u("textPlaceholder")}"></textarea>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelText">${M("x",18)} ${u("cancel")}</button>
          <button class="btn-primary" id="btnAction">${M("send",18)} ${u("send")}</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay hidden" id="pickerModal">
      <div class="modal-box">
        <h2>${M("app-window",18)} ${u("pickerTitle")}</h2>
        <input type="text" id="appSearch" placeholder="${u("searchPlaceholder")}">
        <div class="app-picker-list" id="appPickerList">
          <div class="spinner" id="appSpinner"></div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelPicker">${M("x",18)} ${u("cancel")}</button>
        </div>
      </div>
    </div>

    <!-- Settings Modal -->
    <div class="modal-overlay hidden" id="settingsModal">
      <div class="modal-box">
        <h2>${M("settings",18)} ${u("settingsTitle")}</h2>
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
        <label class="setting-row">
          <div class="setting-info">
            <div class="setting-name">${u("settingSimLongPress")}</div>
            <div class="setting-desc">${u("settingSimLongPressDesc")}</div>
          </div>
          <input type="checkbox" class="toggle" id="simLongPressToggle">
        </label>
        <div class="setting-row setting-static vib-col">
          <div class="setting-name">${u("vibration")}</div>
          <div class="vib-levels">
            ${N1.map((h)=>`<button class="vib-level-btn" data-level="${h}">${h}</button>`).join("")}
          </div>
          <div class="setting-desc" id="vibStatusText"></div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCloseSettings">${u("close")}</button>
        </div>
      </div>
    </div>

    <!-- Edit App Modal -->
    <div class="modal-overlay hidden" id="editModal">
      <div class="modal-box">
        <h2>${M("app-window",18)} ${u("editTitle")}</h2>
        <div class="edit-icon-row">
          <img id="editIconPreview" class="edit-icon-preview" alt="">
          <label class="btn-cancel edit-upload-btn">${M("upload",16)} ${u("editUpload")}<input type="file" id="editFile" accept="image/*" hidden></label>
        </div>
        <input type="text" id="editName" placeholder="${u("editName")}">
        <div class="modal-row">
          <button class="btn-danger" id="btnDeleteApp">${M("trash-2",18)} ${u("editDelete")}</button>
          <button class="btn-cancel" id="btnCancelEdit">${u("editCancel")}</button>
          <button class="btn-primary" id="btnSaveEdit">${M("check",18)} ${u("editSave")}</button>
        </div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `}function K1(){document.addEventListener("contextmenu",(h)=>h.preventDefault()),document.getElementById("statusArea")?.addEventListener("click",z1),document.getElementById("btnForceReconnect")?.addEventListener("click",D1),document.getElementById("btnSettings")?.addEventListener("click",$1),document.getElementById("btnCloseSettings")?.addEventListener("click",b),document.getElementById("menuFixToggle")?.addEventListener("change",(h)=>{F1(h.target.checked)}),document.getElementById("dpadRepeatToggle")?.addEventListener("change",(h)=>{C1(h.target.checked)}),document.getElementById("simLongPressToggle")?.addEventListener("change",(h)=>{Q1(h.target.checked)}),document.querySelectorAll(".vib-level-btn").forEach((h)=>{h.addEventListener("click",()=>T1(Number(h.dataset.level)))}),document.getElementById("settingsModal")?.addEventListener("click",(h)=>{if(h.target===h.currentTarget)b()}),document.getElementById("btnDeleteApp")?.addEventListener("click",Y1),document.getElementById("btnCancelEdit")?.addEventListener("click",R),document.getElementById("btnSaveEdit")?.addEventListener("click",a1),document.getElementById("editFile")?.addEventListener("change",O1),document.getElementById("editName")?.addEventListener("keydown",(h)=>{if(h.key==="Enter")h.preventDefault(),a1()}),document.getElementById("editModal")?.addEventListener("click",(h)=>{if(h.target===h.currentTarget)R()}),I.querySelectorAll("[data-key]").forEach((h)=>{let a=h.dataset.key;h.addEventListener("pointerdown",(n)=>{n.preventDefault(),j1(a)}),h.addEventListener("pointerup",(n)=>{n.preventDefault(),q(a)}),h.addEventListener("pointerleave",()=>q(a)),h.addEventListener("pointercancel",()=>q(a))}),document.getElementById("btnText")?.addEventListener("click",J1),document.getElementById("btnCancelText")?.addEventListener("click",r1),document.getElementById("btnAction")?.addEventListener("click",e),document.getElementById("textInput")?.addEventListener("input",u1),document.getElementById("textInput")?.addEventListener("keydown",(h)=>{if(h.key==="Enter"&&!h.shiftKey)h.preventDefault(),e()}),document.getElementById("btnCancelPicker")?.addEventListener("click",c1),document.getElementById("appSearch")?.addEventListener("input",S1)}w1();d=R1();W1();K1();y();$();n1();if(window.visualViewport)window.visualViewport.addEventListener("resize",()=>{let h=document.getElementById("textModal");if(h&&!h.classList.contains("hidden"))h.scrollIntoView({block:"start"})});if("serviceWorker"in navigator)navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then((h)=>{h.update().catch(()=>{})}).catch(()=>{});
