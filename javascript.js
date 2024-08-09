

function obrazkyclick() {

    var element = document.getElementsByClassName("obrazky")[0];


    var currentLeft = parseInt(window.getComputedStyle(element).left, 10) || 0;

    if (currentLeft < 0) {
        element.style.left = (currentLeft + 700) + "px";
    }
}


function obrazkyclick1() {

    var element = document.getElementsByClassName("obrazky")[0];


    var currentLeft = parseInt(window.getComputedStyle(element).left, 10) || 0;

    if (currentLeft > -3160) {
        element.style.left = (currentLeft - 700) + "px";
    }
}