blrdRegexp = /^https:\/\/voicenote\.in\/.*$/

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
                webview.executeScript({code: 'document.title'}, function(results) {
                    window.contentWindow.document.title = results[0];
                });
            });
            webview.addEventListener("permissionrequest", function(e) {
                if (e.permission === "media") {
                    e.request.allow();
                }
            });
        });
    });
});

