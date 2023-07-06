
var $animation_elements = jQuery(".statistic-main");
var $window = jQuery(window);
var animation_started = false;

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $animation_elements.each(function() {
    var $element = jQuery(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    if (
      (element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position) &&
      !animation_started
    ) {
      animation_started = true;

      $element.find(".counter").each(function() {
        var $this = jQuery(this);
        var countTo = parseInt($this.attr("data-countto"));
        var countDuration = parseInt($this.attr("data-duration"));

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

$window.on("scroll load", check_if_in_view);
$window.trigger("scroll");