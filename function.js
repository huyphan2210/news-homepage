$(document).ready(function() {
    $('header img:nth-child(2)').click(function() {
        const displayMobileMenu = $('.mobileMenu').css('display');
        if (displayMobileMenu === 'none') {
            $('.mobileMenu').css('display', 'block');
            $('.mobileMenu').css('transition', 'transform 2s');
            $('.mobileMenu').css('transform', 'translate(-100%)');
        }
    })
})