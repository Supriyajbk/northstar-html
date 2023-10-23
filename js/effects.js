// import MouseParallax from './mouse-parallex';
alert("test")
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
