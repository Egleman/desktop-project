import{G as S,d as O,h as n,j as r,m as p,F as e,w as M,x as A,$ as a,i as d,I as G,A as P,t as f,E as J,ah as Q,T as ee,k as ae,f as k}from"./index-9715db87.js";import{g as se}from"./generate_filename-ef5ebf28.js";import{D as m}from"./debug-1e3a05f1.js";let u;const T={blockSize:128,writeError:!1,BLOCK_SIZE:4096,VCP_BLOCK_SIZE_3_0:512,VCP_BLOCK_SIZE:4096};T.initialize=function(b){const _=this;let D,R;S.active_tab!=="onboard_logging"&&(S.active_tab="onboard_logging"),O.connectionValid&&n.send_message(r.MSP_FEATURE_CONFIG,!1,!1,function(){n.send_message(r.MSP_DATAFLASH_SUMMARY,!1,!1,function(){n.send_message(r.MSP_SDCARD_SUMMARY,!1,!1,function(){n.send_message(r.MSP_BLACKBOX_CONFIG,!1,!1,function(){n.send_message(r.MSP_ADVANCED_CONFIG,!1,!1,function(){p.gte(e.CONFIG.apiVersion,M)?n.send_message(r.MSP2_GET_TEXT,A.crunch(r.MSP2_GET_TEXT,r.CRAFT_NAME),!1,N):n.send_message(r.MSP_NAME,!1,!1,N)})})})})});function I(s,o){return o===0?s:I(o,s%o)}function N(){a("#content").load("./tabs/onboard_logging.html",function(){d.localizePage();const s=e.DATAFLASH.totalSize>0;let o;e.BLACKBOX.supported||e.DATAFLASH.supported||e.FEATURE_CONFIG.features.isEnabled("BLACKBOX")?o="yes":o="no",a(".tab-onboard_logging").addClass("serial-supported").toggleClass("dataflash-supported",e.DATAFLASH.supported).toggleClass("dataflash-present",s).toggleClass("sdcard-supported",e.SDCARD.supported).toggleClass("blackbox-config-supported",e.BLACKBOX.supported).toggleClass("blackbox-supported",o==="yes").toggleClass("blackbox-maybe-supported",o==="maybe").toggleClass("blackbox-unsupported",o==="no"),s&&(a(".tab-onboard_logging a.erase-flash").click(Z),a(".tab-onboard_logging a.erase-flash-confirm").click(q),a(".tab-onboard_logging a.erase-flash-cancel").click(j),a(".tab-onboard_logging a.save-flash").click(X),a(".tab-onboard_logging a.save-flash-cancel").click($),a(".tab-onboard_logging a.save-flash-dismiss").click(F));const t=a(".blackboxDevice select"),l=a(".blackboxRate select"),i=a(".blackboxDebugMode select"),g=a(".blackboxDebugFields select");e.BLACKBOX.supported&&a(".tab-onboard_logging a.save-settings").on("click",async function(){if(p.gte(e.CONFIG.apiVersion,M)){let c=0;a(".blackboxDebugFields select option:not(:selected)").each(function(){c|=1<<a(this).val()}),e.BLACKBOX.blackboxDisabledMask=c}p.gte(e.CONFIG.apiVersion,G)&&(e.BLACKBOX.blackboxSampleRate=parseInt(l.val(),10),e.BLACKBOX.blackboxPDenom=parseInt(l.val(),10)),e.BLACKBOX.blackboxDevice=parseInt(t.val(),10),await n.promise(r.MSP_SET_BLACKBOX_CONFIG,A.crunch(r.MSP_SET_BLACKBOX_CONFIG)),p.gte(e.CONFIG.apiVersion,P)&&(e.PID_ADVANCED_CONFIG.debugMode=parseInt(i.val()),await n.promise(r.MSP_SET_ADVANCED_CONFIG,A.crunch(r.MSP_SET_ADVANCED_CONFIG))),A.writeConfiguration(!0)}),w(l),H(t),y(i),K(g),t.change(function(){a(this).val()==="0"?a("div.blackboxRate").hide():a("div.blackboxRate").show()}).change(),(e.SDCARD.supported&&t.val()==2||e.DATAFLASH.supported&&t.val()==1)&&(a(".tab-onboard_logging").toggleClass("msc-supported",!0),a("a.onboardLoggingRebootMsc").click(function(){f.sendEvent(f.EVENT_CATEGORIES.FLIGHT_CONTROLLER,"RebootMsc");const c=[];S.operating_system==="Linux"?c.push(A.REBOOT_TYPES.MSC_UTC):c.push(A.REBOOT_TYPES.MSC),n.send_message(r.MSP_SET_REBOOT,c,!1)})),E(),S.content_ready(b)})}function H(s){s.empty(),s.append(`<option value="0">${d.getMessage("blackboxLoggingNone")}</option>`),e.DATAFLASH.supported&&s.append(`<option value="1">${d.getMessage("blackboxLoggingFlash")}</option>`),e.SDCARD.supported&&s.append(`<option value="2">${d.getMessage("blackboxLoggingSdCard")}</option>`),s.append(`<option value="3">${d.getMessage("blackboxLoggingSerial")}</option>`),s.val(e.BLACKBOX.blackboxDevice)}function w(s){let o=[],t;if(p.gte(e.CONFIG.apiVersion,J)?t=e.CONFIG.sampleRateHz/e.PID_ADVANCED_CONFIG.pid_process_denom:t=8e3/e.PID_ADVANCED_CONFIG.gyro_sync_denom/e.PID_ADVANCED_CONFIG.pid_process_denom,p.gte(e.CONFIG.apiVersion,G)){for(let i=0;i<5;i++){let g=Math.round(t/2**i),c="Hz";I(g,1e3)===1e3&&(g/=1e3,c="kHz"),s.append(`<option value="${i}">1/${2**i} (${g}${c})</option>`)}s.val(e.BLACKBOX.blackboxSampleRate)}else o=[{text:"Disabled",hz:0,p_denom:0},{text:"500 Hz",hz:500,p_denom:16},{text:"1 kHz",hz:1e3,p_denom:32},{text:"1.5 kHz",hz:1500,p_denom:48},{text:"2 kHz",hz:2e3,p_denom:64},{text:"4 kHz",hz:4e3,p_denom:128},{text:"8 kHz",hz:8e3,p_denom:256},{text:"16 kHz",hz:16e3,p_denom:512},{text:"32 kHz",hz:32e3,p_denom:1024}],a.each(o,function(l,i){(t>=i.hz||i.hz==0)&&s.append(new Option(i.text,i.p_denom))}),s.val(e.BLACKBOX.blackboxPDenom)}function y(s){if(p.gte(e.CONFIG.apiVersion,P)){a(".blackboxDebugMode").show();for(let o=0;o<e.PID_ADVANCED_CONFIG.debugModeCount;o++)o<m.modes.length?s.append(new Option(m.modes[o].text,o)):s.append(new Option(d.getMessage("onboardLoggingDebugModeUnknown"),o));s.val(e.PID_ADVANCED_CONFIG.debugMode).select2().sortSelect("NONE")}else a(".blackboxDebugMode").hide()}function K(s){if(p.gte(e.CONFIG.apiVersion,M)){a(".blackboxDebugFields").show();let o=e.BLACKBOX.blackboxDisabledMask;for(let t=0;t<m.enableFields.length;t++){const l=(o&1<<t)===0;s.append(new Option(m.enableFields[t].text,t,!1,l))}s.sortSelect().multipleSelect()}else a(".blackboxDebugFields").hide()}function L(s){if(s<1024)return`${Math.round(s)}kB`;const o=s/1024;let t;return o<900?`${o.toFixed(1)}MB`:(t=o/1024,`${t.toFixed(1)}GB`)}function V(s){return s<1024?`${s}B`:L(s/1024)}function C(s,o,t,l,i){o>0?(s.css({width:`${o/t*100}%`,display:"block"}),a("div",s).text((l?`${l} `:"")+(i?L(o):V(o)))):s.css({display:"none"})}function E(){const s=e.DATAFLASH.totalSize>0;C(a(".tab-onboard_logging .dataflash-used"),e.DATAFLASH.usedSize,e.DATAFLASH.totalSize,d.getMessage("dataflashUsedSpace"),!1),C(a(".tab-onboard_logging .dataflash-free"),e.DATAFLASH.totalSize-e.DATAFLASH.usedSize,e.DATAFLASH.totalSize,d.getMessage("dataflashFreeSpace"),!1),C(a(".tab-onboard_logging .sdcard-other"),e.SDCARD.totalSizeKB-e.SDCARD.freeSizeKB,e.SDCARD.totalSizeKB,d.getMessage("dataflashUnavSpace"),!0),C(a(".tab-onboard_logging .sdcard-free"),e.SDCARD.freeSizeKB,e.SDCARD.totalSizeKB,d.getMessage("dataflashLogsSpace"),!0),a(".btn a.erase-flash, .btn a.save-flash").toggleClass("disabled",e.DATAFLASH.usedSize===0),a(".tab-onboard_logging").toggleClass("sdcard-error",e.SDCARD.state===n.SDCARD_STATE_FATAL).toggleClass("sdcard-initializing",e.SDCARD.state===n.SDCARD_STATE_CARD_INIT||e.SDCARD.state===n.SDCARD_STATE_FS_INIT).toggleClass("sdcard-ready",e.SDCARD.state===n.SDCARD_STATE_READY);const o=s||e.SDCARD.state===n.SDCARD_STATE_READY;a(".tab-onboard_logging").toggleClass("msc-not-ready",!o),o?a("a.onboardLoggingRebootMsc").removeClass("disabled"):a("a.onboardLoggingRebootMsc").addClass("disabled");let t;switch(e.SDCARD.state){case n.SDCARD_STATE_NOT_PRESENT:a(".sdcard-status").text(d.getMessage("sdcardStatusNoCard")),t="SdCard: NotPresent";break;case n.SDCARD_STATE_FATAL:a(".sdcard-status").html(d.getMessage("sdcardStatusReboot")),t="SdCard: Error";break;case n.SDCARD_STATE_READY:a(".sdcard-status").text(d.getMessage("sdcardStatusReady")),t="SdCard: Ready";break;case n.SDCARD_STATE_CARD_INIT:a(".sdcard-status").text(d.getMessage("sdcardStatusStarting")),t="SdCard: Init";break;case n.SDCARD_STATE_FS_INIT:a(".sdcard-status").text(d.getMessage("sdcardStatusFileSystem")),t="SdCard: FsInit";break;default:a(".sdcard-status").text(d.getMessage("sdcardStatusUnknown",[e.SDCARD.state]))}s&&e.SDCARD.state===n.SDCARD_STATE_NOT_PRESENT&&(t="Dataflash",f.setFlightControllerData(f.DATA.LOG_SIZE,e.DATAFLASH.usedSize)),f.setFlightControllerData(f.DATA.LOGGING_STATUS,t),e.SDCARD.supported&&!u&&(u=setTimeout(function(){u=!1,O.connectionValid&&n.send_message(r.MSP_SDCARD_SUMMARY,!1,!1,function(){E()})},2e3))}function $(){D=!0}function U(){a(".dataflash-saving progress").attr("value",0),D=!1,a(".dataflash-saving").removeClass("done"),a(".dataflash-saving")[0].showModal()}function F(){a(".dataflash-saving")[0].close()}function x(s,o,t){f.sendEvent(f.EVENT_CATEGORIES.FLIGHT_CONTROLLER,"SaveDataflash");const l=(new Date().getTime()-s)/1e3;console.log(`Received ${o} bytes in ${l.toFixed(2)}s (${(o/l/1024).toFixed(2)}kB / s) with block size ${_.blockSize}.`),isNaN(t)||console.log("Compressed into",t,"bytes with mean compression factor of",o/t),a(".dataflash-saving").addClass("done")}function B(s){n.send_message(r.MSP_DATAFLASH_SUMMARY,!1,!1,function(){E(),s&&s()})}function X(){S.connected_to&&(e.boardHasVcp()?_.blockSize=_.VCP_BLOCK_SIZE:_.blockSize=_.BLOCK_SIZE,B(function(){const s=e.DATAFLASH.usedSize;Y(function(o){let t=0,l=0;U();function i(c,h,z){if(h!==null)if(h.byteLength>0){t+=h.byteLength,isNaN(z)||isNaN(l)?l=null:l+=z,a(".dataflash-saving progress").attr("value",t/s*100);const W=new Blob([h]);o.onwriteend=function(te){D||t>=s?D?F():x(g,t,l):_.writeError?F():A.dataflashRead(t,_.blockSize,i)},o.write(W)}else x(g,t,l);else A.dataflashRead(t,_.blockSize,i)}const g=new Date().getTime();A.dataflashRead(t,_.blockSize,i)})}))}function Y(s){const o="BLACKBOX_LOG",t="BBL",l=se(o,t);chrome.fileSystem.chooseEntry({type:"saveFile",suggestedName:l,accepts:[{description:`${t.toUpperCase()} files`,extensions:[t]}]},function(i){if(ae()){chrome.runtime.lastError.message!=="User cancelled"&&k(d.getMessage("dataflashFileWriteFailed"));return}chrome.fileSystem.getDisplayPath(i,function(g){console.log(`Dataflash dump file path: ${g}`)}),i.createWriter(function(g){g.onerror=function(c){k(`<strong><span class="message-negative">${d.getMessage("error",{errorMessage:c.target.error.message})}</span class="message-negative></strong>`),console.error(c),_.writeError=!0},s(g)},function(g){console.error(g),k(d.getMessage("dataflashFileWriteFailed"))})})}function Z(){R=!1,a(".dataflash-confirm-erase").removeClass("erasing"),a(".dataflash-confirm-erase")[0].showModal()}function v(){B(function(){O.connectionValid&&!R&&(e.DATAFLASH.ready?a(".dataflash-confirm-erase")[0].close():setTimeout(v,500))})}function q(){a(".dataflash-confirm-erase").addClass("erasing"),n.send_message(r.MSP_DATAFLASH_ERASE,!1,!1,v)}function j(){R=!0,a(".dataflash-confirm-erase")[0].close()}};T.cleanup=function(b){f.setFlightControllerData(f.DATA.LOGGING_STATUS,void 0),f.setFlightControllerData(f.DATA.LOG_SIZE,void 0),u&&(clearTimeout(u),u=!1),b&&b()};T.mscRebootFailedCallback=function(){a(".tab-onboard_logging").toggleClass("msc-supported",!1),Q(d.getMessage("operationNotSupported"))};ee.onboard_logging=T;export{T as onboard_logging};