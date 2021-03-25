$(document).ready(function (){
    $('.promo__carousel').slick({
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 3,
        adaptiveHeight: true,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
    });
})