blrdRegexp = /^https:\/\/voicenote\.in\/.*$/

// block everything but main site
var callback = function(details) {
    if (!blrdRegexp.test(details.url)) {
        return {cancel: true};
    }
    if (details.url === "https://voicenote.in/live/js/ads.js") {
        return {cancel: true};
    }
};

var filter = {
    urls: ['<all_urls>']
};

var opt_extraInfoSpec = ['blocking'];

chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', function(window) {
        window.contentWindow.document.addEventListener('DOMContentLoaded', function() {
            var webview = this.querySelector('#root');
            webview.request.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec);
            webview.addEventListener('contentload', function() {
                // insert print CSS
                webview.insertCSS({file: "print.css"});
                // copy title
                webview.executeScript({code: 'document.title'}, function(results) {
                    window.contentWindow.document.title = results[0];
                });
                // set language to en-US
                webview.executeScript({code: `
                    var storage = JSON.parse(window.localStorage.getItem("set"));
                    if (!(storage["e"])) { storage["e"] = {}; }
                    storage["e"]["o"] = "en-US";
                    window.localStorage.setItem("set", JSON.stringify(storage));
                    `});
            });
            webview.addEventListener("permissionrequest", function(e) {
                // allow microphone
                if (e.permission === "media") {
                    e.request.allow();
                }
                // override save button with print dialog
                if (e.permission === "download") {
                    webview.print();
                }
            });
        });
    });
});

