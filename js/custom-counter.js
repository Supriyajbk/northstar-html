
<<<<<<< HEAD
let $counter_elements = jQuery(".statistic-main");
let $cwindow = jQuery(window);
let animation_started = false;
=======
var $animation_elements = jQuery(".counter-main");
var $window = jQuery(window);
var animation_started = false;
>>>>>>> 6de0f540c274a9a803897eff90d7a4dcb65d569e

function check_if_view() {
  let window_height = $window.height()
  let window_top_position = $window.scrollTop();
  let window_bottom_position = window_top_position + window_height;

  $counter_elements.each(function() {
    let $element = jQuery(this);
    let element_height = $element.outerHeight();
    let element_top_position = $element.offset().top;
    let element_bottom_position = element_top_position + element_height;

    if (
      (element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position) &&
      !animation_started
    ) {
      animation_started = true;

      $element.find(".counter").each(function() {
        let $this = jQuery(this);
        let countTo = parseInt($this.attr("data-countto"));
        let countDuration = parseInt($this.attr("data-duration"));

        jQuery({ counter: 0 }).animate(
          {
            counter: countTo
          },
          {
            duration: countDuration,
            easing: "linear",
            step: function() {
              $this.text(Math.floor(this.counter));
            },
            complete: function() {
              $this.text(this.counter);
            }
          }
        );
      });
    }
  });
}

$cwindow.on("scroll load", check_if_view);
$cwindow.trigger("scroll load");