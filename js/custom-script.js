jQuery(document).on("ready", function(){

let header = jQuery(".main-header");
  jQuery(window).on("scroll", function(){
    let scroll = jQuery(this).scrollTop();
    scroll >= 4 ? header.addClass("fixed-header") : header.removeClass("fixed-header");
  });

  jQuery(".toggle_icon").on("click", function(e){
    e.preventDefault();
    jQuery(this).toggleClass("open");
    jQuery(".main-header").toggleClass("nav-open");
    jQuery(".navigation").toggleClass("open");
  });
  if(jQuery(window).width() <= 1023){
    jQuery("ul.main-menu > li.menu-item-has-children > a").on("click", function(event){
      event.preventDefault();
      jQuery('ul.main-menu > li.menu-item-has-children > a').not(jQuery(this)).removeClass('active');
      jQuery(this).toggleClass("active");
      jQuery(this).parent().siblings().find('ul.sub-menu').slideUp();
      jQuery(this).next('ul.sub-menu').slideToggle();
    });
  }

  jQuery(".financial-more-btn").on("click", function(e){
    e.preventDefault();
    let list = jQuery(".financial-row");
    let listItems = list.children(".financial-list");
    if(listItems.length > 4){
      jQuery(listItems).slice(4).fadeToggle(900);
      // jQuery(this).text(jQuery(this).text() == 'load more' ? 'no posts' : 'load more');
      jQuery(this).hide();
    }
  });
  jQuery('.accordion-header').on('click', function(e){
    e.preventDefault();
    jQuery(this).parent().toggleClass('active');
    jQuery(this).parent().siblings().removeClass('active');
    jQuery(this).parent().siblings().find('.accordion-header').removeClass('open');
    jQuery(this).toggleClass("open");
    jQuery(this).siblings('.accordion-content').slideToggle(500);
    jQuery(this).parent().siblings().find('.accordion-content').slideUp(500);
  });

    let teamlist = jQuery(".our-team-lists");
    teamlist.each(function(){
      let teamitem = jQuery(this);
      let teamCount = teamitem.children(".our-team-list");
      if(teamCount.length > 5){
        teamCount.slice(5).hide();
        jQuery(".team-view-link").on("click", function(e){
          e.preventDefault();
          jQuery(this).toggleClass("open");
          teamCount.slice(5).fadeToggle("slow");
          let text = jQuery(this).text().trim();
          jQuery(this).text(text === "View More" ? "View Less" : "View More");
        });
      }
    })


    if(jQuery(window).width() <= 767){
      let lbtn = jQuery(".leadership-more-btn");
      let lteams = jQuery(".leadership-team-main");
      lteams.each(function(){
        lteam = jQuery(this);
        llist = lteam.children(".leadership-team-list");
        if(llist.length > 4){
          llist.slice(4).hide();
          lbtn.on("click", function(e){
            e.preventDefault();
            llist.slice(4).fadeIn("slow");
            jQuery(this).hide();
          });
        }
      });  
    }



    
});