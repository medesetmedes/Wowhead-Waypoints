const code = '(function (){return parent.document.body.innerHTML;})();'
var modal;

chrome.tabs.executeScript(null, {
    file: "inject.js"
});

function fetchCoordinates(arr) {
    var elem = document.getElementById("text-pins");
    for (var i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            elem.value += arr[i];
            break;
        } else {
            elem.value += arr[i] + '\n';
        }
    }
}

function toggleModal() {
    modal.classList.toggle("show-modal");
    setTimeout(function () {
        modal.classList.toggle("show-modal");
    }, 2000);
}


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        fetchCoordinates(request);
    }
);


document.addEventListener('DOMContentLoaded', (event) => {
    var textarea = document.getElementById("text-pins");
    var button = document.getElementById('copy-button');
    button.addEventListener("click", toggleModal);
    modal = document.querySelector(".modal");
    button.onclick = function () {
        textarea.select();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    }
});
