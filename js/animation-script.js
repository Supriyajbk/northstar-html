
let $animation_elements = jQuery('[data-animation]');
let $window = jQuery(window);
function check_if_in_view() {
  let window_height = $window.height();
  let window_top_position = $window.scrollTop();
  let window_bottom_position = (window_top_position + window_height);
  jQuery.each($animation_elements, function() {
    let $element = jQuery(this);
    let $attr = $element.attr('data-animation');
    let element_height = $element.outerHeight();
    let element_top_position = $element.offset().top;
    let element_bottom_position = (element_top_position + element_height);
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('visible');
      $element.addClass($attr);
    } else {
      //$element.removeClass('visible');
    }
  });
}
$window.on('scroll load', check_if_in_view);
$window.trigger('scroll load', check_if_in_view);