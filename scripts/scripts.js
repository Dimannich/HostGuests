$(document).ready(function () {
    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
        $('.side-nav').toggleClass('active');
        $('.overlay').toggleClass('visible');
    });

    $('.overlay').click(function() {
        $(this).removeClass('visible');
        $('.side-nav').removeClass('active');
        $('#nav-icon3').removeClass('open');
    });
});