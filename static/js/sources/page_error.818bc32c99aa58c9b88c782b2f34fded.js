$(document).ready(function () {
    $("#url").text(window.location.pathname);
    var a = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
    a && a(function () {
        $("img.lazy").lazyload({threshold: 500})
    });
    $("#error").css("min-height", window.innerHeight - 280 + "px")
});
