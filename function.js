$(document).ready(function() {
    $('header img:nth-child(2)').click(function() {
        const mobileMenuLeft = $('.mobileMenu').css('left').substring(0, $('.mobileMenu').css('left').length - 2);
        console.log($(window).width() / parseFloat(mobileMenuLeft))
        if (Math.round($(window).width() / parseFloat(mobileMenuLeft)) === 1) {
            $('.overlay').css('display', 'block');
            $('.mobileMenu').css('transform', 'translate(-100%)');
        }
    })

    $('.overlay').click(function() {
        $('.mobileMenu').css('transform', 'translate(0)');
        $('.overlay').css('display', 'none');
    })

    $('.mobileMenu img').click(function() {
        $('.mobileMenu').css('transform', 'translate(0)');
        $('.overlay').css('display', 'none');
    })
})
