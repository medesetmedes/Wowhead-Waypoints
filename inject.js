var pins = document.getElementsByClassName("pin");
var stringArr = [];

for (let i = 0; i < pins.length; i++) {    
    let left = pins[i].style.left;
    left = left.substring(0, left.length - 1);
    let right = pins[i].style.top;
    right = right.substring(0, right.length - 1);
    let entry = "/way " + left + ', ' + right;
    stringArr[i] = entry;
}

chrome.runtime.sendMessage(
    stringArr,
    function (response) {
        console.log(response);
    }
);

