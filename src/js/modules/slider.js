
import { numberOfSlides } from "./globals";
const SLIDER = "#slides";

const addSlides = (slider) => {
  let isMobile = $(window).width() <= 480 ? "_mobile" : ""; 
  for (let i = 1; i <= numberOfSlides; i++) {
    slider.append(`<div class="slide">
    <div class="caption"><span>Welcome slide ${i}</span></div>
    <img src="/assets/imgs/slide${isMobile}.png" alt="slide">
  </div>`)
  }
}

const manageSlider = () => {
  let $slider = $(SLIDER)
  addSlides($slider);
  $('.cybersolution-arrow-right').click(function () {
    $slider.animate({ marginLeft: '-100%' }, 500, function () {
      $(this).css({ marginLeft: 0 }).find(".slide:last").after($(this).find(".slide:first"));
      $(this).find(".slide:first").toggleClass('selected').siblings().removeClass('selected');
    });
  });

  $('.cybersolution-arrow-left').click(function () {
    $slider.animate({ marginLeft: '100%' }, 500, function () {
      $(this).css({ marginLeft: 0 }).find(".slide:first").before($(this).find(".slide:last"));
      $(this).find(".slide:first").toggleClass('selected').siblings().removeClass('selected');
    });
  });
}

export default manageSlider;