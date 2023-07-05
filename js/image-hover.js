
jQuery(document).on("ready", function(){
    jQuery(".approach-pos").on("mouseover", function(){
        jQuery(this).siblings(".approach-image").addClass("full-image");
        jQuery(this).parent().siblings().find(".approach-pos").addClass("active");
    }).on("mouseleave", function(){
        jQuery(this).siblings(".approach-image").removeClass("full-image");
        jQuery(this).parent().siblings().find(".approach-pos").removeClass("active");
    });
});
