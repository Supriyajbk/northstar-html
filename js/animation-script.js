
let $animation_elements = jQuery('[data-animation]');
let $window = jQuery(window);
function check_if_in_view() {
  $animation_elements.each(function() {
    let $element = jQuery(this);
    let $attr = $element.attr('data-animation');

    //check to see if this current container is within viewport
    if ($element.is(':in-viewport')) {
      $element.addClass($attr);
      $element.addClass('visible');
    } else {
      $element.removeClass('visible');
    }
  });
}
$window.on('scroll load', check_if_in_view);
$window.trigger('scroll load');
