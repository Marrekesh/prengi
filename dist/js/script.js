$(document).ready(function (){
    $('.promo__carousel').slick({
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        // adaptiveHeight: true,
        slidesToScroll: 1,
        // variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
    });

    // $(window).ready(function(){
    //     // Установка высоты блока при загрузке страницы
    //     $('.promo__carousel-img').css('height', $(this).width() / 3 )
    //     $('.console').html('100%: ' + $(this).width() + '<br>500px: ' + $(this).width() / 3)
    // }).resize(function(){ 
    //     // Установка высоты блока при изменении размеров окна
    //     $('.promo__carousel-img').css('height', $(this).width() / 3 )
    //     $('.console').html('100%: ' + $(this).width() + '<br>500px: ' + $(this).width() / 3)
    // })
})