"use strict";

$(function () {
  console.log('Hello Bootstrap5');
  $('.seach_btn').on('click', function () {
    $('.seach_input').toggle();
  });
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 48,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    slidesPerView: 1,
    spaceBetween: 20,
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});
//# sourceMappingURL=all.js.map
