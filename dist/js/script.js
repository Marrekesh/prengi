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
        adaptiveHeight: true,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_next.png"></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              dots: true,
            }
          }
      ]

    });

    //Tabs

    $('ul.solutions__caption').on('click', 'li:not(.solutions__tab_active)', function() {
        
        $(this)
          .addClass('solutions__tab_active').siblings().removeClass('solutions__tab_active')
          .closest('div.container').find('div.solutions__tab-content').removeClass('solutions__tab-content_active').eq($(this).index()).addClass('solutions__tab-content_active');
          $('.solutions__carousel').slick("refresh");
    });

    //hamburger

    $('.header__hamburger').on('click', function(e) {
      e.preventDefault();
      $('.header__hamburger').toggleClass('header__hamburger_active');
      $('.header__toggle').toggleClass('header__toggle_active')
      
    });
    
    //more information about countries

    $('.promo__trei').on('click', function(e) {
      e.preventDefault();
      $('.promo__trei').toggleClass('promo__trei_active');
      $('.promo__text').toggleClass('promo__text_active');
      
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 900) {
        $('.chevron').fadeIn();
      } else {
        $('.chevron').fadeOut();
      }
    });

    //overlay

    $('.button__data').on("click", function () {
      $('.overlay, .modal-data').fadeIn('slow');
    })

    $('.modal__close').on("click", function () {
      $('.overlay, .modal-data').fadeOut('slow');
    })


})