
var $ = jQuery.noConflict();
$(document).ready(function(){

    $('.full-slider-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 3000,
            prevArrow: '<span class="slick-arrow slick-prev"></span>',
            nextArrow: '<span class="slick-arrow slick-next"></span>',
            // variableWidth: true,
            responsive: [
                {
                breakpoint: 1023,
                    settings: {
                     
                    }
                }
            ]
    });

    jQuery('.testimonial-slider-for').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        fade: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        asNavFor: '.testimonial-slider-nav',
    responsive: [
    
      {
        breakpoint: 768,
        settings: {
          dots: true,
    
        }
      },
    
    ]
    });
    jQuery('.testimonial-slider-nav').slick({
        vertical: true,
        arrows: false,
        dots: true,
        useCss:true, 
        asNavFor: '.testimonial-slider-for',
        focusOnSelect: true,
    responsive: [
    
      {
        breakpoint: 768,
        settings: {
          dots: false,
          vertical: false,
          verticalSwiping: false,
        }
      },
    
    ]
    });

});

