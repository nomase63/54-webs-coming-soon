'use strict';
$(document).ready(function () {

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
        $(window).scrollTop(0);
        $('.left').removeClass('hideee');
    }, 1000);

    $('.btn').on('click', function () {
        var b = $(this).attr('data-target');
        $('.' + b).addClass('active');
        $('.left').addClass('hidee');
        $('.close-ss').addClass('active');
        $('.bg_img').css('opacity', '.25');
    });

    $('.close-ss, .close-mob').on('click', function () {
        $('.submit_section, .right').removeClass('active');
        $('.left').removeClass('hidee');
        $('.bg_img').css('opacity', '1');
        $('.close-ss').removeClass('active');
    });


    // ---
    // Typed
    $(function () {
        $("#head-title").typed({
            strings: ["COMING SOON...^1000", "WE ARE CREATING^1000", "SUBMIT YOUR WEBSITE URL^1000", "CLICK THE SUBMIT BUTTON^1000", "#54WEBS^1000"],
            typeSpeed: 100,
            loop: true,
            startDelay: 100
        });
    });
});
