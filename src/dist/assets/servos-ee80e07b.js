import{G as d,T as M,h as c,j as v,$ as e,i as h,F as s,x as b,f as T}from"./index-9715db87.js";const m={};m.initialize=function(p){d.active_tab!=="servos"&&(d.active_tab="servos");function S(){c.send_message(v.MSP_SERVO_CONFIGURATIONS,!1,!1,x)}function x(){c.send_message(v.MSP_SERVO_MIX_RULES,!1,!1,C)}function C(){c.send_message(v.MSP_RC,!1,!1,I)}function I(){c.send_message(v.MSP_BOXNAMES,!1,!1,R)}function R(){e("#content").load("./tabs/servos.html",$)}S();function E(){if(s.SERVO_CONFIG.length===0){e(".tab-servos").removeClass("supported");return}e(".tab-servos").addClass("supported");let g="",f="";for(let t=0;t<s.RC.active_channels-4;t++)f+=`<th>A${t+1}</th>`;f+='<th style="width: 110px" i18n="servosRateAndDirection"></th>';for(let t=0;t<s.RC.active_channels;t++)g+='<td class="channel "><input type="checkbox" class="checkbox-round" /></td>';e("div.tab-servos table.fields tr.main").append(f);function k(t,n){e("div.supported_wrapper").show();const i='<input type="number" min="500" max="2500" value="';let a=`<tr class="h53px" ><td style="text-align: center">${t}</td>`;a+=`<td class="min">${i}${s.SERVO_CONFIG[n].min}" /></td>`,a+=`<td class="middle">${i}${s.SERVO_CONFIG[n].middle}" /></td>`,a+=`<td class="max">${i}${s.SERVO_CONFIG[n].max}" /></td>`,a+=`${g}<td class="direction"></td></tr>`,e("div.tab-servos table.fields").append(a),s.SERVO_CONFIG[n].indexOfChannelToForward>=0&&e("div.tab-servos table.fields tr:last td.channel input").eq(s.SERVO_CONFIG[n].indexOfChannelToForward).prop("checked",!0),e("div.tab-servos table.fields tr:last td.direction").append('<select class="rate" name="rate"></select>');const o=e("div.tab-servos table.fields tr:last td.direction select");let r=h.getMessage("servosRate");for(let l=100;l>-101;l--)o.append(`<option value="${l}">${r} ${l}%</option>`);o.val(s.SERVO_CONFIG[n].rate),e("div.tab-servos table.fields tr:last").data("info",{obj:n}),e("div.tab-servos table.fields tr:last td.channel input").click(function(){e(this).is(":checked")&&e(this).parent().parent().find(".channel input").not(e(this)).prop("checked",!1)})}function O(t){e('div.tab-servos table.fields tr:not(".main")').each(function(){const a=e(this).data("info"),o=e(".channel input",this);let r=parseInt(o.index(o.filter(":checked")));r===-1&&(r=void 0),s.SERVO_CONFIG[a.obj].indexOfChannelToForward=r,s.SERVO_CONFIG[a.obj].middle=parseInt(e(".middle input",this).val()),s.SERVO_CONFIG[a.obj].min=parseInt(e(".min input",this).val()),s.SERVO_CONFIG[a.obj].max=parseInt(e(".max input",this).val());const l=parseInt(e(".direction select",this).val());s.SERVO_CONFIG[a.obj].rate=l}),b.sendServoConfigurations(n);function n(){b.sendServoConfigurations(i)}function i(){t&&b.writeConfiguration(function(){T(h.getMessage("servosEepromSave"))})}}e("div.tab-servos table.fields tr:not(:first)").remove();for(let t=0;t<8;t++)k(`Серво ${t+1}`,t);const u=e(".servos .bar-wrapper");for(let t=0;t<8;t++)u.append(`                    <div class="m-block servo-${7-t}">                    <div class="meter-bar">                    <div class="label"></div>                    <div class="indicator">                    <div class="label">                    <div class="label"></div>                    </div>                    </div>                    </div>                    </div>            `);const _=1e3,F=2e3;e("div.values li:not(:last)").text(_);function V(){const n=F-_;for(let i=0;i<s.SERVO_DATA.length;i++){const a=s.SERVO_DATA[i],o=a-_,r=100-(o*(100/n)).clamp(0,100),l=(o*(100/n)).clamp(0,100),N=parseInt(o*.009);e(`.servo-${i} .label`,u).text(a),e(`.servo-${i} .indicator`,u).css({"margin-top":`${r}px`,height:`${l}px`,"background-color":`rgba(255,187,0,1${N})`})}}function G(){c.send_message(v.MSP_SERVO,!1,!1,V)}d.interval_add("servo_data_pull_and_test_update",G,50),e("table.directions select, table.directions input, table.fields select, table.fields input").change(function(){e("div.live input").is(":checked")&&d.timeout_add("servos_update",O,10)}),e("a.update").click(function(){O(!0)})}function $(){E(),h.localizePage(),d.interval_add("status_pull",function(){c.send_message(v.MSP_STATUS)},250,!0),d.content_ready(p)}};m.cleanup=function(p){p&&p()};M.servos=m;export{m as servos};