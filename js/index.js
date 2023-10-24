
import './lib/isInViewport';
import './lib/slick.min';
import './lib/jquery.selectBox';
import './lib/jquery.parallax-scroll';
import './modules/animation-script';
import './modules/custom-gsap';
import './modules/custom-counter';
import './modules/custom-script';
import './modules/custom-selectBox';
import './modules/custom-slick';
import './modules/mouse-parallex';
import './modules/image-hover';

/*-- init function --*/
import MouseParallax from './modules/mouse-parallex';
const Effects = {
  $mp: null,
  init() {
    const _ = this
    _.$mp = document.querySelectorAll('[data-mp]')
    _.$mp.forEach(el => new MouseParallax(el))
  }
}
export default Effects;
jQuery(() => { Effects.init() })
