window.onload = function () {
    var header = document.getElementById('top');
    var footer = document.getElementById('bot');
    var desiredHeight = window.innerHeight - header.offsetHeight - footer.offsetHeight;

    document.getElementById('page').style.height = desiredHeight + "px";
};

document.getElementById('header-text').addEventListener("mouseenter", function (event) {
    document.getElementById('top').style.background = "white";
});

document.getElementById('header-text').addEventListener("mouseleave", function (event) {
    document.getElementById('top').style.background = "rgb(161, 161, 161)";
});