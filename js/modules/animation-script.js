import jQuery from 'jquery';
var $animation_elements = jQuery('[data-animation]');
var $window = jQuery(window);
var $document = jQuery(document);

function check_if_in_view() {
  $animation_elements.each(function() {
    const $self = jQuery(this);
    const animation = $self.data('animation');
    const animateType = $self.data('animate');
    const delay = Number($self.data('animation-delay') || 0);
    const timeline = $self[0].tl
    const counter = $self[0].counter

    var tolerance = Number($self.data("tolerance"));
    if(isNaN(tolerance)){
      tolerance = 0;
    }
    if($self.is(':in-viewport('+ tolerance + ')')) {
      setTimeout(() => {
        if (animateType) _.animateRun($self, animateType);
        else $self.addClass('visible ' + animation);
        if (timeline) {
          timeline.play();
        }
      }, delay);
    } else {
      if (timeline && timeline.progress() > 0) {
        timeline.progress(0);
      }
      if (counter) {
        counter.reset();
      }
    }
  });
}
$window.on("scroll load", check_if_in_view);
$window.trigger("scroll load");
$document.ready(function() { 
  check_if_in_view();
  setTimeout(check_if_in_view, 100);
});
