var images = document.querySelectorAll('.parallax-down');
new simpleParallax(images, {
    delay: 0,
    orientation: 'down',
    scale: 1.5,
});

var images = document.querySelectorAll('.parallax-zoom');
new simpleParallax(images, {
    delay: 0,
    orientation: 'left',
    scale: 1.75,
});