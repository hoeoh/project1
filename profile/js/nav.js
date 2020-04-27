$(document).ready(function () {
    $(".menuOpen").toggle(function () {
        $("#menu").slideDown('slow');
    }, function () {
        $("#menu").slideUp('fast');
    });
    var current = 0;
    var screenSize = $(window).width();
    if (screenSize > 1024) {
        $("#menu").show();
        current = 1;
    }
    if (current == 1 && screenSize <= 1024) {
        $("#menu").hide();
        current = 0;
    }
    $(window).resize(function () {
        var screenSize = $(window).width();
        if (screenSize > 1024) {
            $("#menu").show();
            current = 1;
        }
        if (current == 1 && screenSize <= 1024) {
            $("#menu").hide();
            current = 0;
        }
    });
});