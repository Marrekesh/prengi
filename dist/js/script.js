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

    //Solution carousel

    $('.solutions__carousel').slick({
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        fade: true,
        // adaptiveHeight: true,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_next.png"></button>',
    });

    //Tabs

    $('ul.solutions__caption').on('click', 'li:not(.solutions__tab_active)', function() {
        
        $(this)
          .addClass('solutions__tab_active').siblings().removeClass('solutions__tab_active')
          .closest('div.container').find('div.solutions__tab-content').removeClass('solutions__tab-content_active').eq($(this).index()).addClass('solutions__tab-content_active');
          $('.solutions__carousel').slick("reinit");
      });

})