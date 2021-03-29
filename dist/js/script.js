$(document).ready(function (){
    $('.promo__carousel').slick({
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
              }
            }
        ]

    });

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
          $('.solutions__carousel').slick("refresh");
      });

})