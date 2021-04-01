chrome.app.runtime.onLaunched.addListener(() => {
    chrome.app.window.create('window.html', (window) => {
        window.contentWindow.addEventListener("contextmenu", (e) => {e.preventDefault()})
        window.contentWindow.document.addEventListener('DOMContentLoaded', () => {
            window.contentWindow.document.querySelector("#print").addEventListener("click", () => {
                const text = window.contentWindow.document.querySelector("#text")
                const printtext = window.contentWindow.document.querySelector("#printtext")
                printtext.innerHTML = text.value
                window.contentWindow.print()
            })
        })
    })
})
