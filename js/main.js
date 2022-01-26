$(document).ready(function () {

    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1366"
    });




    // sticky
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header-sticky").removeClass("scroll-header");
        } else {
            $("#header-sticky").addClass("scroll-header");
        }
    });
})
