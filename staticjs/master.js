window.onload = function () {
    var header = document.getElementById('top');
    var footer = document.getElementById('bot');
    var desiredHeight = window.innerHeight - header.offsetHeight - footer.offsetHeight - 30;

    document.getElementById('page').style.height = desiredHeight + "px";
};

document.getElementById('header-text').addEventListener("mouseenter", function (event) {
    document.getElementById('top').style.background = "white";
});

document.getElementById('header-text').addEventListener("mouseleave", function (event) {
    document.getElementById('top').style.background = "rgb(100, 100, 100)";
});