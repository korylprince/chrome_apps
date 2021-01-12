(()=>{var e={495:e=>{e.exports={getI18nString:function(e){return chrome&&chrome.i18n&&chrome.i18n.getMessage?chrome.i18n.getMessage(e):browser&&browser.i18n&&browser.i18n.getMessage?browser.i18n.getMessage(e):void console.error("Can't get i18n message: "+e)},setSyncStorage:function(e){chrome&&chrome.storage&&chrome.storage.sync&&chrome.storage.sync.set?chrome.storage.sync.set(e):browser&&browser.storage&&browser.storage.sync&&browser.storage.sync.set?browser.storage.sync.set(e):console.error("Can't set settings.")},getSyncStorage:function(e,t){let o;o="string"==typeof e?[e]:Array.isArray(e)?e:Object.keys(e);let s=e=>{for(const t of o)void 0===e[t]&&(e[t]=r[t]);return t(e)};chrome&&chrome.storage&&chrome.storage.sync&&chrome.storage.sync.get?chrome.storage.sync.get(e,s):browser&&browser.storage&&browser.storage.sync&&browser.storage.sync.get?browser.storage.sync.get(e,s):console.error("Couldn't read setting: "+e)},reloadTab:function(e,r){chrome&&chrome.tabs&&chrome.tabs.reload?chrome.tabs.reload(e,r):browser&&browser.tabs&&browser.tabs.reload?browser.tabs.reload(e,r):console.error("Couldn't reload tab.")},dictEquality:function(e,r){let t=!0;for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t=t&&e[o]===r[o]);for(let o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t=t&&e[o]===r[o]);return t},tabQuery:function(){let e=arguments;return window.browser&&browser.tabs&&browser.tabs.query?browser.tabs.query.apply(this,arguments):new Promise((function(r){let t=Array.prototype.slice.call(e);t.push(r),chrome.tabs.query.apply(this,t)}))},tabSendmessage:function(){let e=arguments;return window.browser&&browser.tabs&&browser.tabs.sendMessage?browser.tabs.sendMessage.apply(this,arguments):new Promise((function(r,t){let o=Array.prototype.slice.call(e);o.push((function(e){void 0!==chrome.runtime.lastError&&t(chrome.runtime.lastError.message),r(e)})),chrome.tabs.sendMessage.apply(this,o)}))},addStorageChangeListener:function(e){chrome&&chrome.storage&&chrome.storage.onChanged&&chrome.storage.onChanged.addListener?chrome.storage.onChanged.addListener(e):browser&&browser.storage&&browser.storage.onChanged&&browser.storage.onChanged.addListener?browser.storage.onChanged.addListener(e):console.error("Couldn't add setting change listener")},openSettingsPage:function(){chrome&&chrome.tabs&&chrome.tabs.create?chrome.tabs.create({url:"/settings.html"}):browser&&browser.runtime&&browser.runtime.openOptionsPage?browser.runtime.openOptionsPage():console.error("Can't open settings page")},setMessageListener:function(e){chrome&&chrome.runtime&&chrome.runtime.onMessage&&chrome.runtime.onMessage.addListener?chrome.runtime.onMessage.addListener(e):browser&&browser.runtime&&browser.runtime.onMessage&&browser.runtime.onMessage.addListener?browser.runtime.onMessage.addListener(e):console.error("Couldn't add message listener")},getExtensionUrl:function(){return chrome&&chrome.extension&&chrome.extension.getURL?chrome.extension.getURL("dist/ruffle.js").replace("dist/ruffle.js",""):browser&&browser.runtime&&browser.runtime.getURL?browser.runtime.getURL("dist/ruffle.js").replace("dist/ruffle.js",""):void console.error("Couldn't get extension URL")},camelize:function(e){return e.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,((e,r)=>r.toUpperCase()))}};const r={ruffleEnable:!0,ignoreOptout:!1}}},r={};function t(o){if(r[o])return r[o].exports;var s=r[o]={exports:{}};return e[o](s,s.exports,t),s.exports}(()=>{const{getSyncStorage:e,getI18nString:r,setSyncStorage:o}=t(495);e(["ruffleEnable","ignoreOptout"],(function(e){var t=r("settings_ruffle_enable"),s=r("settings_page_ignore_optout"),n=r("settings_page"),a=r("save_settings"),c=document.getElementById("enablelabel"),i=document.getElementById("ignorelabel"),g=document.getElementById("enable"),l=document.getElementById("ignoreoptout"),b=document.getElementById("save");document.getElementById("title").innerHTML=n,document.title=n,c.innerHTML=t+"<br />",i.innerHTML=s+"<br />",b.value=a,g.checked=e.ruffleEnable,l.checked=e.ignoreOptout,b.onclick=function(){o({ruffleEnable:g.checked,ignoreOptout:l.checked}),alert(r("settings_saved"))}}))})()})();