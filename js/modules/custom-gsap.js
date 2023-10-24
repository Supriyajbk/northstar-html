
import {gsap} from "gsap";
import {DrawSVGPlugin} from '../lib/DrawSVGPlugin.min.js'

gsap.registerPlugin(DrawSVGPlugin)

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min;
}

const ele = jQuery(".ui-ele");
ele.each(function(){
    const _self = jQuery(this);
    const _path = _self.find("path");
    var tl = gsap.timeline({
        play: true,
        delay: 0.5,
    });
    tl.from(_path[0], { drawSVG: '0%' }, { drawSVG: '100%', duration: 4, ease: 'power1.out'})
});

  