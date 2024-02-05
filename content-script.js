const targetPages = ["https://www.google.com/", "https://www.facebook.com/", ""]
document.addEventListener('DOMContentLoaded', function () {
    if (targetPages.includes(window.location.href)) {
        const iframe = document.createElement("iframe");
        iframe.src = chrome.runtime.getURL('./trial.html');
        iframe.style.position = "absolute";
        iframe.style.width = "300px";
        iframe.style.height = "200px";
        iframe.style.top = "60px";
        iframe.style.right = "20px";
        iframe.style.border = "1px solid #ccc"; // Set border or other styles
        console.log("document.body", document);
        document.body.appendChild(iframe);
    }
})
