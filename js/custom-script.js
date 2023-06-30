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
  });
});