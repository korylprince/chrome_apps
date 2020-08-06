chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create("window.html", function(window) {
        window.contentWindow.document.addEventListener("DOMContentLoaded", function() {
            const webview = this.querySelector("#root");
            var location_id
            try {
                location_id = chrome.storage.managed.get("location_id")
            } catch {
                const body = this.querySelector("body");
                body.innerHTML = "location_id not set. Please contact your system administrator."
                return
            }
            webview.src = `https://covid-check.bullardisd.net/client?location_id=${location_id}`
        })
    })
})
