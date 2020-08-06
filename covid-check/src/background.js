chrome.power.requestKeepAwake("display")

chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create("window.html", function(window) {
        window.contentWindow.document.addEventListener("DOMContentLoaded", function() {
            const webview = this.querySelector("#root");
            webview.focus()
            const body = this.querySelector("body");
            if (chrome.storage == null || chrome.storage.managed == null) {
                body.innerHTML = "<h1>Can't access chrome managed storage. Please contact your system administrator.</h1>"
                return
            }
            chrome.storage.managed.get("location_id", data => {
                if (data.location_id != null) {
                    webview.src = `https://covid-check.bullardisd.net/client/?location_id=${data.location_id}`
                    return
                }
                body.innerHTML = "<h1>location_id not set. Please contact your system administrator.</h1>"
            })
        })
    })
})
