var s={zh:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"已连接",statusDisconnected:"未连接",statusReconnecting:"重连中…",statusChecking:"连接中…",statusAuth:"等待授权",statusError:"错误",statusNoDevice:"未设置设备",statusTapReconnect:"点击重连",statusTapRetry:"点击重试 — 在 TV 上确认",statusTapCheck:"点击检查",authHint1:"⚠️ 等待 TV 授权。请在电视上确认调试授权弹窗。",authHint2:"如未弹出，请在 TV 设置中：撤销 USB 调试授权，然后关闭再重开 ADB 调试。",authForceBtn:"强制重新认证",authApproving:"正在 TV 上确认…",actionBack:"返回",actionHome:"主页",actionMenu:"菜单",quickLaunch:"快捷启动应用",addApp:"添加应用",textInput:"文本输入",textModalTitle:"在 TV 上输入",textPlaceholder:"输入要发送的文本…",clear:"清空",cancel:"取消",send:"发送",pickerTitle:"选择应用",searchPlaceholder:"\uD83D\uDD0D 搜索应用…",noAppsFound:"未找到应用",settingsTitle:"设置",settingMenuFix:"菜单键修复",settingMenuFixDesc:"若菜单键单击不灵敏（需要双击）可开启",settingDpadRepeat:"方向键长按重复",settingDpadRepeatDesc:"长按上下左右时自动连续触发",settingSimLongPress:"模拟长按（操作更稳定）",settingSimLongPressDesc:"短按=普通按下，长按=长按事件；不发送分离的按下/抬起",vibration:"振动反馈",vibAvailable:"✓ 支持振动（按一次按键后刷新查看结果）",vibWorking:"✓ 振动正常工作",vibBlocked:"✗ 系统拒绝了振动 — 请检查系统设置 → 触摸振动/免打扰",vibUnavailable:"✗ 此设备/浏览器不支持振动（iOS Safari 不支持）",close:"关闭",editTitle:"编辑应用",editName:"应用名称",editUpload:"上传图标",editDelete:"删除",editSave:"保存",editCancel:"取消",toastAdded:"已添加",toastRemoved:"已移除",toastLaunching:"启动中",toastClearing:"清空中…",toastCleared:"已清空",toastSent:"已发送",toastSaved:"已保存",toastConnecting:"连接中…",toastConnected:"✓ 已连接",toastFailed:"✗ 失败",toastForceReconnect:"强制重连中… 请查看 TV",toastApproveOnTv:"\uD83D\uDD10 请查看 TV 屏幕",toastSentFail:"✗ 发送失败",toastLaunchFail:"✗ 启动失败",titleTapLaunch:"点击启动 · 长按移除",volUp:"音量+",volDown:"音量-",prev:"上一个",next:"下一个",rewind:"快退",fastForward:"快进",playPause:"播放/暂停",mute:"静音",up:"上",down:"下",left:"左",right:"右",ok:"确定"},en:{appTitle:"\uD83D\uDCFA TV Remote",statusConnected:"Connected",statusDisconnected:"Disconnected",statusReconnecting:"Reconnecting…",statusChecking:"Connecting…",statusAuth:"Waiting for approval",statusError:"Error",statusNoDevice:"No device",statusTapReconnect:"Tap to reconnect",statusTapRetry:"Tap to retry — approve on TV",statusTapCheck:"Tap to check",authHint1:"⚠️ Waiting for TV approval. Check the debug authorization dialog on your TV.",authHint2:"If it doesn't appear: revoke USB debugging authorizations, then toggle ADB debugging off/on.",authForceBtn:"Force Re-authenticate",authApproving:"Approve on TV…",actionBack:"Back",actionHome:"Home",actionMenu:"Menu",quickLaunch:"Quick Launch",addApp:"Add App",textInput:"Text Input",textModalTitle:"Type on TV",textPlaceholder:"Enter text to send…",clear:"Clear",cancel:"Cancel",send:"Send",pickerTitle:"Select App",searchPlaceholder:"\uD83D\uDD0D Search apps…",noAppsFound:"No apps found",settingsTitle:"Settings",settingMenuFix:"Menu Key Fix",settingMenuFixDesc:"Enable if the menu key needs a double-tap to respond",settingDpadRepeat:"D-pad Key Repeat",settingDpadRepeatDesc:"Auto-repeat when holding up/down/left/right",settingSimLongPress:"Simulated Long-press (more stable)",settingSimLongPressDesc:"Short tap = normal press, hold = long-press; no separate down/up events",vibration:"Vibration",vibAvailable:"✓ API supported (press a key, then re-open to see result)",vibWorking:"✓ Vibration works",vibBlocked:"✗ System rejected vibration — check Settings → Touch vibration / DND",vibUnavailable:"✗ Vibration not supported (iOS Safari has no Vibration API)",close:"Close",editTitle:"Edit App",editName:"App name",editUpload:"Upload icon",editDelete:"Delete",editSave:"Save",editCancel:"Cancel",toastAdded:"✓ Added",toastRemoved:"✗ Removed",toastLaunching:"Launching",toastClearing:"Clearing…",toastCleared:"✓ Cleared",toastSent:"✓ Sent",toastSaved:"✓ Saved",toastConnecting:"Connecting…",toastConnected:"✓ Connected",toastFailed:"✗ Failed",toastForceReconnect:"Force reconnecting… check TV",toastApproveOnTv:"\uD83D\uDD10 Look at your TV screen",toastSentFail:"✗ Failed to send",toastLaunchFail:"✗ Failed to launch",titleTapLaunch:"Tap to launch · Long-press to remove",volUp:"Vol+",volDown:"Vol-",prev:"Prev",next:"Next",rewind:"Rewind",fastForward:"FF",playPause:"Play/Pause",mute:"Mute",up:"Up",down:"Down",left:"Left",right:"Right",ok:"OK"}};function c1(){return(navigator.language||navigator.userLanguage||"en").toLowerCase().startsWith("zh")?"zh":"en"}var M1=c1(),o=(a)=>s[M1][a]??s.en[a]??a;function n(a){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${a}</svg>`}var g={"chevron-up":n('<path d="m18 15-6-6-6 6" />'),"chevron-down":n('<path d="m6 9 6 6 6-6" />'),"chevron-left":n('<path d="m15 18-6-6 6-6" />'),"chevron-right":n('<path d="m9 18 6-6-6-6" />'),check:n('<path d="M20 6 9 17l-5-5" />'),circle:n('<circle cx="12" cy="12" r="10" />'),"corner-up-left":n(`<path d="M20 20v-7a4 4 0 0 0-4-4H4" />
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
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />`)};var t=(a,r=22)=>`<span class="lic">${g[a].replace("<svg",`<svg width="${r}" height="${r}"`)}</span>`,T=[],H=[],m,$=!1,U=!1,O="",P=document.getElementById("app"),d=null;function b(){let a=location.protocol==="https:"?"wss":"ws";d=new WebSocket(`${a}://${location.host}/ws`),d.onopen=()=>{console.log("WS open"),F("connected"),M({favGet:!0})},d.onclose=()=>{d=null,F("disconnected"),setTimeout(b,2000)},d.onmessage=(r)=>{let h=JSON.parse(r.data);if(h.ping)return;if(h.type==="status"){f1(h);return}if(h.type==="apps"){H=h.apps,Y(H);return}if(h.type==="favorites"){T=h.favorites,o1();return}if(h.type==="icons"){p1(h.icons);return}if(h.type==="inputState"){U=h.editable,O=h.text||"",v1();return}if(h.error)x(`✗ ${h.error}`);else if(h.method==="yadb")x(o("toastSent"));else if(h.method==="yadb_clear")x(o("toastCleared"));else if(h.connected!==void 0)x(h.connected?o("toastConnected"):o("toastFailed"))}}function M(a){if(d?.readyState===WebSocket.OPEN)return d.send(JSON.stringify(a)),!0;return!1}function v1(){let a=document.getElementById("btnText");if(!a)return;let r=a.querySelector(".tv-input-dot");if(U){if(a.classList.add("tv-input-active"),!r){let h=document.createElement("span");h.className="tv-input-dot",a.appendChild(h)}}else a.classList.remove("tv-input-active"),r?.remove()}async function p1(a){let r=!1;for(let[h,u]of Object.entries(a))try{let c=atob(u),v=new Uint8Array(c.length);for(let f=0;f<c.length;f++)v[f]=c.charCodeAt(f);await G(h,new Blob([v],{type:"image/png"})),A.delete(h),r=!0}catch{}if(r)o1(),Y(H)}function F(a){let r=document.getElementById("statusDot"),h=document.getElementById("statusLabel"),u=document.getElementById("authHint");switch(a){case"connected":r.className="status-dot on",h.textContent=o("statusConnected"),u.classList.add("hidden"),j(!0),$=!0;break;case"disconnected":r.className="status-dot off",h.textContent=d?o("statusDisconnected"):o("statusReconnecting"),u.classList.add("hidden"),j(!1),$=!1;break;case"auth":r.className="status-dot auth",h.textContent=o("statusAuth"),u.classList.remove("hidden"),j(!1),$=!1;break;case"checking":r.className="status-dot off",h.textContent=o("statusChecking"),u.classList.add("hidden"),j(!1),$=!1;break}}function f1(a){switch(a.adbState){case"connected":F("connected");break;case"auth_required":F("auth");break;case"disconnected":case"no_device":F("disconnected");break}}function j(a){P.querySelectorAll(".dpad-btn:not(.empty), .action-btn, .media-btn, .btn-kbd, .app-chip:not(.add-chip)").forEach((r)=>{r.style.opacity=a?"":"0.4",r.style.pointerEvents=a?"":"none"})}function V1(){F("checking"),M({connect:!0})}function A1(){F("checking"),x(o("toastForceReconnect")),L([30,30,30]),M({forceReconnect:!0})}function x(a){let r=document.getElementById("toast");r.textContent=a,r.classList.add("show"),clearTimeout(m),m=setTimeout(()=>r.classList.remove("show"),2000)}function D(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var W=!0,q=null,_=null,N=null,x1=new Set(["up","down","left","right"]),y=500,L1=50,p={menuFix:!1,dpadRepeat:!0,simLongPress:!1};function d1(){try{let a=localStorage.getItem("tv-remote-settings");if(a)p={...p,...JSON.parse(a)}}catch{}}function i(){try{localStorage.setItem("tv-remote-settings",JSON.stringify(p))}catch{}}function a1(){let a=document.getElementById("menuFixToggle"),r=document.getElementById("dpadRepeatToggle"),h=document.getElementById("simLongPressToggle");if(a)a.checked=p.menuFix;if(r)r.checked=p.dpadRepeat;if(h)h.checked=p.simLongPress;W=p.dpadRepeat}function D1(a){p.menuFix=a,i(),L(28)}function F1(a){p.dpadRepeat=a,W=a,i(),L(28)}function z1(a){p.simLongPress=a,i(),L(28)}function H1(){a1();let a=document.getElementById("vibStatusText");if(!J)a.textContent=o("vibUnavailable");else if(S===!1)a.textContent=o("vibBlocked");else if(S===!0)a.textContent=o("vibWorking");else a.textContent=o("vibAvailable");document.getElementById("settingsModal").classList.remove("hidden")}function I(){document.getElementById("settingsModal").classList.add("hidden")}var J=typeof navigator.vibrate==="function",S=null;function L(a){try{if(typeof navigator.vibrate==="function")S=navigator.vibrate(a),J=!0;else J=!1}catch{J=!1}}var B=null,K=!1,X=null;function N1(a){let r=document.querySelector(`[data-key="${a}"]`);if(r)r.classList.add("pressed");if(L(28),p.simLongPress){B=a,K=!1,X=setTimeout(()=>{K=!0,L(20),M({keyLong:a})},y);return}if(p.menuFix&&a==="menu"){M({keyLong:a});return}if(M({keydown:a}),W&&x1.has(a))N=a,_=setTimeout(()=>{if(N===a)q=setInterval(()=>{if(N===a)L(14),M({keydown:a})},L1)},y)}function R(a){let r=document.querySelector(`[data-key="${a}"]`);if(r)r.classList.remove("pressed");if(p.simLongPress){if(X)clearTimeout(X),X=null;if(B===a&&!K)if(p.menuFix&&a==="menu")M({keyLong:a});else M({key:a});B=null;return}if(p.menuFix&&a==="menu")return;if(N===a)clearTimeout(_),clearInterval(q),_=q=null,N=null,L(20);M({keyup:a})}function w1(){document.getElementById("textModal").classList.remove("hidden");let a=document.getElementById("textInput");if(U&&O)a.value=O;else a.value="";h1(),setTimeout(()=>{a.focus(),a.select(),setTimeout(()=>{document.getElementById("textModal").scrollIntoView({block:"start"})},300)},100)}function h1(){let a=document.getElementById("textInput"),r=document.getElementById("btnAction");if(a.value.trim().length>0)r.innerHTML=`${t("send",18)} ${o("send")}`,r.className="btn-primary";else r.innerHTML=`${t("trash-2",18)} ${o("clear")}`,r.className="btn-cancel"}function E(){if(document.getElementById("textInput").value.trim().length>0)C1();else Q1()}function r1(){document.getElementById("textModal").classList.add("hidden"),document.getElementById("textInput").value=""}function C1(){let r=document.getElementById("textInput").value.trim();if(!r)return;L([30,50,30]),M({text:r}),r1()}function Q1(){L([25,40,25]),M({clear:!0})}async function $1(a,r){M({favAdd:{pkg:a,label:r}}),x(`${o("toastAdded")}: ${r}`),t1()}function j1(a){M({favDel:a}),x(o("toastRemoved"))}var w="",C=null;async function e(a,r){w=a,C=null,document.getElementById("editName").value=r,document.getElementById("editFile").value="";let h=document.getElementById("editIconPreview"),u=await l(`custom_${a}`);if(u)h.src=URL.createObjectURL(u);else if(A.get(a))h.src=A.get(a);else try{let c=await fetch(`/icons/apps/${encodeURIComponent(a)}.png`);if(c.ok){let v=await c.blob();await G(a,v);let f=URL.createObjectURL(v);A.set(a,f),h.src=f}}catch{}h.classList.remove("hidden"),document.getElementById("editModal").classList.remove("hidden")}function Z(){document.getElementById("editModal").classList.add("hidden")}function J1(){let a=document.getElementById("editFile").files?.[0];if(!a)return;C=a,document.getElementById("editIconPreview").src=URL.createObjectURL(a)}async function k(){let a=document.getElementById("editName").value.trim();if(!a)return;if(C)await G(`custom_${w}`,C),A.set(`custom_${w}`,URL.createObjectURL(C));M({favUpdate:{pkg:w,label:a}}),x(o("toastSaved")),Z()}function X1(){M({favDel:w}),x(o("toastRemoved")),Z()}function Z1(a,r){M({launch:a}),x(`${o("toastLaunching")}: ${r}`)}function o1(){let a=document.getElementById("favApps"),r=`<button class="app-chip add-chip" id="addAppBtn" title="${o("addApp")}">${t("plus",26)}</button>`;if(!T.length)a.innerHTML=r;else a.innerHTML=T.map((h)=>`
      <button class="app-chip" data-pkg="${D(h.pkg)}" title="${o("titleTapLaunch")}">
        <span class="app-emoji"><img class="app-img" data-pkg="${D(h.pkg)}" alt="" loading="lazy"><span class="app-fallback">${t("app-window",22)}</span></span>
        <span class="app-name">${D(h.label)}</span>
        <span class="delete-badge">${t("x",12)}</span>
      </button>`).join("")+r;document.getElementById("addAppBtn")?.addEventListener("click",Y1),a.querySelectorAll(".app-chip:not(.add-chip)").forEach((h)=>{let u=h.dataset.pkg,c=h.querySelector(".app-name")?.textContent||u,v=h.querySelector("img.app-img");if(v)u1(v,u);h.addEventListener("click",()=>{if(!V)Z1(u,c)}),h.addEventListener("contextmenu",(z)=>{z.preventDefault(),e(u,c)});let f,V=!1;h.addEventListener("pointerdown",()=>{V=!1,f=setTimeout(()=>{V=!0,e(u,c)},600)}),h.addEventListener("pointerup",()=>{clearTimeout(f)}),h.addEventListener("pointerleave",()=>{clearTimeout(f)}),h.querySelector(".delete-badge")?.addEventListener("click",(z)=>{z.stopPropagation(),j1(u)})})}async function Y1(){if(document.getElementById("pickerModal").classList.remove("hidden"),document.getElementById("appSpinner").style.display="block",document.getElementById("appSearch").value="",!H.length)M({appList:!0});else Y(H)}function t1(){document.getElementById("pickerModal").classList.add("hidden")}function G1(){let a=document.getElementById("appSearch").value.toLowerCase();Y(H.filter((r)=>r.label.toLowerCase().includes(a)||r.pkg.toLowerCase().includes(a)))}function Y(a){let r=document.getElementById("appPickerList");if(document.getElementById("appSpinner").style.display="none",!a.length){r.innerHTML=`<div style="padding:20px;text-align:center;color:#999">${o("noAppsFound")}</div>`;return}r.innerHTML=a.map((h)=>`
    <button class="picker-item" data-pkg="${D(h.pkg)}" data-label="${D(h.label)}">
      <span class="picker-ic"><img class="app-img" data-pkg="${D(h.pkg)}" alt="" loading="lazy"><span class="app-fallback">${t("app-window",22)}</span></span>
      <div><div>${D(h.label)}</div><div class="pkg-sub">${D(h.pkg)}</div></div>
    </button>`).join(""),r.querySelectorAll(".picker-item").forEach((h)=>{h.addEventListener("click",()=>$1(h.dataset.pkg,h.dataset.label));let u=h.querySelector("img.app-img");if(u)u1(u,u.dataset.pkg)})}var R1="tv-remote-icons",Q="icons",A=new Map;function n1(){return new Promise((a,r)=>{let h=indexedDB.open(R1,1);h.onupgradeneeded=()=>h.result.createObjectStore(Q,{keyPath:"pkg"}),h.onsuccess=()=>a(h.result),h.onerror=()=>r(h.error)})}function l(a){return new Promise(async(r)=>{try{let c=(await n1()).transaction(Q,"readonly").objectStore(Q).get(a);c.onsuccess=()=>r(c.result?.blob??null),c.onerror=()=>r(null)}catch{r(null)}})}function G(a,r){return new Promise(async(h)=>{try{let c=(await n1()).transaction(Q,"readwrite");c.objectStore(Q).put({pkg:a,blob:r}),c.oncomplete=()=>h(),c.onerror=()=>h()}catch{h()}})}async function u1(a,r){let h=()=>{a.classList.add("hidden"),a.nextElementSibling?.classList.remove("hidden")},u=(V)=>{a.src=V,a.classList.remove("hidden"),a.nextElementSibling?.classList.add("hidden")},c=await l(`custom_${r}`);if(c){let V=A.get(`custom_${r}`);if(!V)V=URL.createObjectURL(c),A.set(`custom_${r}`,V);u(V);return}let v=A.get(r);if(v){u(v);return}let f=await l(r);if(f){v=URL.createObjectURL(f),A.set(r,v),u(v);return}try{let V=await fetch(`/icons/apps/${encodeURIComponent(r)}.png`);if(V.ok){let z=await V.blob();await G(r,z),v=URL.createObjectURL(z),A.set(r,v),u(v);return}}catch{}h()}function T1(){P.innerHTML=`
    <div class="remote-header">
      <h1>${t("tv",22)} TV Remote</h1>
      <div class="header-right">
        <button class="icon-btn" id="btnSettings" title="⚙"><span class="settings-ic">${t("settings",20)}</span></button>
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
      <button class="auth-force-btn" id="btnForceReconnect">${t("refresh-cw",18)} ${o("authForceBtn")}</button>
    </div>
    <div class="main-layout">
      <div class="dpad-col">
        <div class="dpad">
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="up" aria-label="${o("up")}">${t("chevron-up",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="left" aria-label="${o("left")}">${t("chevron-left",30)}</button>
          <button class="dpad-btn ok-btn" data-key="ok" aria-label="${o("ok")}">${t("circle",26)}</button>
          <button class="dpad-btn" data-key="right" aria-label="${o("right")}">${t("chevron-right",30)}</button>
          <button class="dpad-btn empty"></button>
          <button class="dpad-btn" data-key="down" aria-label="${o("down")}">${t("chevron-down",30)}</button>
          <button class="dpad-btn empty"></button>
        </div>
      </div>
      <div class="actions-col">
        <div class="action-grid">
          <button class="action-btn accent-back" data-key="back">${t("corner-up-left",22)}<span>${o("actionBack")}</span></button>
          <button class="action-btn accent-home" data-key="home">${t("home",22)}<span>${o("actionHome")}</span></button>
          <button class="action-btn" data-key="menu">${t("menu",22)}<span>${o("actionMenu")}</span></button>
        </div>
        <div class="media-row">
          <div class="media-group">
            <button class="media-btn" data-key="mute" title="${o("mute")}">${t("volume-x")}</button>
            <button class="media-btn" data-key="voldown" title="${o("volDown")}">${t("volume-1")}</button>
            <button class="media-btn" data-key="volup" title="${o("volUp")}">${t("volume-2")}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-title">${o("quickLaunch")}</div>
    <div class="app-scroll" id="favApps"></div>
    <div class="bottom-bar">
      <button class="btn-kbd" id="btnText">${t("keyboard",20)} ${o("textInput")}</button>
    </div>
    <div class="modal-overlay hidden" id="textModal">
      <div class="modal-box">
        <h2>${t("keyboard",18)} ${o("textModalTitle")}</h2>
        <textarea id="textInput" placeholder="${o("textPlaceholder")}"></textarea>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelText">${t("x",18)} ${o("cancel")}</button>
          <button class="btn-primary" id="btnAction">${t("send",18)} ${o("send")}</button>
        </div>
      </div>
    </div>
    <div class="modal-overlay hidden" id="pickerModal">
      <div class="modal-box">
        <h2>${t("app-window",18)} ${o("pickerTitle")}</h2>
        <input type="text" id="appSearch" placeholder="${o("searchPlaceholder")}">
        <div class="app-picker-list" id="appPickerList">
          <div class="spinner" id="appSpinner"></div>
        </div>
        <div class="modal-row">
          <button class="btn-cancel" id="btnCancelPicker">${t("x",18)} ${o("cancel")}</button>
        </div>
      </div>
    </div>

    <!-- Settings Modal -->
    <div class="modal-overlay hidden" id="settingsModal">
      <div class="modal-box">
        <h2>${t("settings",18)} ${o("settingsTitle")}</h2>
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
        <div class="setting-row setting-static" id="vibStatus">
          <div class="setting-info">
            <div class="setting-name">${o("vibration")}</div>
            <div class="setting-desc" id="vibStatusText"></div>
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
        <h2>${t("app-window",18)} ${o("editTitle")}</h2>
        <div class="edit-icon-row">
          <img id="editIconPreview" class="edit-icon-preview" alt="">
          <label class="btn-cancel edit-upload-btn">${t("upload",16)} ${o("editUpload")}<input type="file" id="editFile" accept="image/*" hidden></label>
        </div>
        <input type="text" id="editName" placeholder="${o("editName")}">
        <div class="modal-row">
          <button class="btn-danger" id="btnDeleteApp">${t("trash-2",18)} ${o("editDelete")}</button>
          <button class="btn-cancel" id="btnCancelEdit">${o("editCancel")}</button>
          <button class="btn-primary" id="btnSaveEdit">${t("check",18)} ${o("editSave")}</button>
        </div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `}function O1(){document.addEventListener("contextmenu",(a)=>a.preventDefault()),document.getElementById("statusArea")?.addEventListener("click",V1),document.getElementById("btnForceReconnect")?.addEventListener("click",A1),document.getElementById("btnSettings")?.addEventListener("click",H1),document.getElementById("btnCloseSettings")?.addEventListener("click",I),document.getElementById("menuFixToggle")?.addEventListener("change",(a)=>{D1(a.target.checked)}),document.getElementById("dpadRepeatToggle")?.addEventListener("change",(a)=>{F1(a.target.checked)}),document.getElementById("simLongPressToggle")?.addEventListener("change",(a)=>{z1(a.target.checked)}),document.getElementById("settingsModal")?.addEventListener("click",(a)=>{if(a.target===a.currentTarget)I()}),document.getElementById("btnDeleteApp")?.addEventListener("click",X1),document.getElementById("btnCancelEdit")?.addEventListener("click",Z),document.getElementById("btnSaveEdit")?.addEventListener("click",k),document.getElementById("editFile")?.addEventListener("change",J1),document.getElementById("editName")?.addEventListener("keydown",(a)=>{if(a.key==="Enter")a.preventDefault(),k()}),document.getElementById("editModal")?.addEventListener("click",(a)=>{if(a.target===a.currentTarget)Z()}),P.querySelectorAll("[data-key]").forEach((a)=>{let r=a.dataset.key;a.addEventListener("pointerdown",(h)=>{h.preventDefault(),N1(r)}),a.addEventListener("pointerup",(h)=>{h.preventDefault(),R(r)}),a.addEventListener("pointerleave",()=>R(r)),a.addEventListener("pointercancel",()=>R(r))}),document.getElementById("btnText")?.addEventListener("click",w1),document.getElementById("btnCancelText")?.addEventListener("click",r1),document.getElementById("btnAction")?.addEventListener("click",E),document.getElementById("textInput")?.addEventListener("input",h1),document.getElementById("textInput")?.addEventListener("keydown",(a)=>{if(a.key==="Enter"&&!a.shiftKey)a.preventDefault(),E()}),document.getElementById("btnCancelPicker")?.addEventListener("click",t1),document.getElementById("appSearch")?.addEventListener("input",G1)}d1();T1();O1();a1();b();if(window.visualViewport)window.visualViewport.addEventListener("resize",()=>{let a=document.getElementById("textModal");if(a&&!a.classList.contains("hidden"))a.scrollIntoView({block:"start"})});if("serviceWorker"in navigator)navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}).then((a)=>{a.update().catch(()=>{})}).catch(()=>{});
