myID = document.getElementById("chapter1");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        myID.className = "left show"
    } else {
        myID.className = "left hide"
    }
};

myID = document.getElementById("chapter2");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        myID.className = "right show"
    } else {
        myID.className = "right hide"
    }
};

myID = document.getElementById("chapter3");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        myID.className = "left show"
    } else {
        myID.className = "left hide"
    }
};

myID = document.getElementById("chapter4");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        myID.className = "right show"
    } else {
        myID.className = "right hide"
    }
};

myID = document.getElementById("chapter5");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        myID.className = "left show"
    } else {
        myID.className = "left hide"
    }
};
window.addEventListener("scroll", myScrollFunc);