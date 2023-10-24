
import gsap from "gsap";

var DrawSVGPlugin = DrawSVGPlugin || window.DrawSVGPlugin 
var CountUp = CountUp || window.CountUp 

gsap.registerPlugin(DrawSVGPlugin)

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min;
}

const ele = jQuery(".ui-ele");
if(ele){
    ele.each(function(){
        const _self = jQuery(this);
        const _path = _self.find("path");
        var tl = gsap.timeline({
            play: true,
            delay: 0.5,
        });
        tl.from(_path[0], { drawSVG: '0%' }, { drawSVG: '100%', duration: 4, ease: 'power1.out'})
    });
}
  