
jQuery(document).ready(function(){

    jQuery('.full-slider-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 3000,
            prevArrow: '<span class="slick-arrow slick-prev"></span>',
            nextArrow: '<span class="slick-arrow slick-next"></span>',
            responsive: [
                {
                breakpoint: 1023,
                    settings: {
                    
                    }
                }
            ]
    });

    jQuery('.testimonial-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        fade: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        asNavFor: '.testimonial-slider-nav',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true,
              prevArrow: '<span class="slick-arrow slick-prev"></span>',
              nextArrow: '<span class="slick-arrow slick-next"></span>',
              // centerMode: true,
              // variableWidth: true,
            }
          },
        ]
    });

    

    jQuery('.testimonial-slider-nav').slick({
        vertical: true,
        arrows: false,
        dots: true,
        useCss:true, 
        // autoplay: true,
        // autoplaySpeed: 3000,
        asNavFor: '.testimonial-slider-for',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: false,
              vertical: false,
              verticalSwiping: false,
              centerMode: true,
              variableWidth: true,
            }
          },
        
        ]
    });


    jQuery('.firm-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        vertical: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        asNavFor: '.firm-slider-nav',
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              vertical: false,
              adaptiveHeight: false,
              dots: true,
              arrows: false,
              // centerMode: true,
              // variableWidth: true,
            }
          },
        ]
    });

    jQuery('.firm-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.firm-slider-for',
        vertical: true,
        arrows: false,
        dots: false,
        // useCss:true, 
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: false,
              vertical: false,
              verticalSwiping: false,
              centerMode: true,
              variableWidth: true,
            }
          },
        
        ]
    });

    

    let $window = jQuery(window);
      let teamSlider = jQuery(".optional-team-slider");
      teamSettings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
          responsive: [
            {
            breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: "0",
                  variableWidth: true,
                }
            }
          ]
      };
      teamSlider.slick(teamSettings);
      $window.on('resize load', function(){
        if ($window.width() >= 1024) {
              if (teamSlider.hasClass('slick-initialized')){
                  teamSlider.slick('unslick');
                  return false;
              }
        }
        if (!teamSlider.hasClass('slick-initialized')){
            return teamSlider.slick(teamSettings);
        }
      });  
    

    if(jQuery(window).width() <= 1023){
        jQuery('.perks-slider').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          autoplay: false,
          autoplaySpeed: 3000,
            responsive: [
              {
              breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                  }
              }
            ]
        });
      }

      let $expertiseSliderFor = jQuery(".expertise-slider-for");
      let $expertiseSliderNav = jQuery(".expertise-slider-nav");
      $expertiseSliderFor.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        focusOnSelect: false,
        speed: 1000,
        fade: true,
        css: true,
        asNavFor: $expertiseSliderNav
      });
      $expertiseSliderNav.slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: $expertiseSliderFor,
        dots: false,
        arrows: false,
        infinite: false,
        focusOnSelect: true,
        responsive: [
          {
          breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                centerMode: true,
                centerPadding: "0px",
              }
          }
        ]
      });
      
});
