
$(function () {



    $('.local-nav-bar').mouseenter(function () {
        $('.header').addClass('active');
    });
    $('.local-nav-bar').mouseleave(function () {
        $('.header').removeClass('active');
    });

    $('.local-nav-bar > li').mouseenter(function () {
        $(this).children('.sub-menu').stop().fadeIn();
    });
    $('.local-nav-bar > li').mouseleave(function () {
        $(this).children('.sub-menu').stop().fadeOut();
    });




});