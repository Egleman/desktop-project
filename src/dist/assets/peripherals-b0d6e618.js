import{i as t,F as a}from"./index-9715db87.js";function s(r){for(let e=0;e<a.SERIAL_CONFIG.ports.length;e++)if(a.SERIAL_CONFIG.ports[e].functions.indexOf(r)>=0)return!0;return!1}function i(r,e){if(s("RUNCAM_DEVICE_CONTROL"))switch(r){case 32:return t.getMessage("modeCameraWifi");case 33:return t.getMessage("modeCameraPower");case 34:return t.getMessage("modeCameraChangeMode");default:return e}return e}export{i as a};
