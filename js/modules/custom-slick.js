import jQuery from 'jquery';

jQuery(document).ready(function(){
    jQuery('.full-slider-main').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 2000,
            speed: 2000,
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
    jQuery('.testimonial-slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        dots: true,
        useCss:true, 
        asNavFor: '.testimonial-slider-for',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              vertical: false,
              centerMode: true,
              centerPadding: "180px",
            }
          },
          {
            breakpoint: 767,
            settings: {
              dots: false,
              vertical: false,
              centerMode: true,
              centerPadding: "0",
              variableWidth: true,
            }
          },
        ]
    });
    jQuery('.testimonial-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 13000,
      adaptiveHeight: true,
      asNavFor: '.testimonial-slider-nav',
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: '<span class="slick-arrow slick-prev"></span>',
            nextArrow: '<span class="slick-arrow slick-next"></span>',
          }
        },
      ]
  });

  jQuery('.firm-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    customPaging: function(slider, i) { return '<button class="tab">' + jQuery(slider.$slides[i]).attr('data-name') + '</button>'; },
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    adaptiveHeight: true,
    focusOnSelect:true,
    asNavFor: jQuery('.firm-slider-nav'),
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
        }
      },
    ]
});
jQuery('.firm-slider-nav').slick({
  arrows: false,
  dots: false,
  useCss:true, 
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1500,
  asNavFor: jQuery('.firm-slider-for'),
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {

      }
    },
  
  ]
});


      

    

    if(jQuery(window).width() <= 1023){
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
                  variableWidth: true,
                }
            }
          ]
      };
      teamSlider.slick(teamSettings);

        jQuery('.perks-slider').slick({
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

      
      $expertiseSliderNav.on("setPosition afterChange", function(event, slick){
        const currentSlide = slick.$slides.filter(".slick-current");
        jQuery(".expertise-icon").removeClass("icon-animation");
        currentSlide.find(".expertise-icon").addClass("icon-animation");
      });
      
});
