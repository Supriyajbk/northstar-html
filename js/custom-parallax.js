

var images = document.querySelectorAll('.parallax-left');
new simpleParallax(images, {
    delay: 0.5,
    orientation: 'left',
    scale: 1.75,
});

var images = document.querySelectorAll('.parallax-right');
new simpleParallax(images, {
    delay: 0,
    orientation: 'right',
    scale: 1.75,
});

var images = document.querySelectorAll('.parallax-down');
new simpleParallax(images, {
    delay: 0.5,
    orientation: 'down',
    scale: 1.5,
});

var images = document.querySelectorAll('.parallax_no_zoom');
new simpleParallax(images, {
    delay: 0.75,
    orientation: 'up',
    scale: 1.3,
});

var images = document.querySelectorAll('.parallax_zoom_down');
new simpleParallax(images, {
    delay: 0.75,
    orientation: 'down',
    scale: 1.3,
});

