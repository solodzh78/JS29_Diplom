'use strict';

const formulaSwiperSlider = new Swiper(".formula-slider", {
  navigation: {
    nextEl: "#formula-arrow_right",
    prevEl: "#formula-arrow_left",
  },
  slidesPerView: 1,
  breakpoints: {
    575: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 3,
    },
    1140: {
      slidesPerView: 3,
    },
  },
  // navigation: {
  //   nextEl: "#formula-arrow_right",
  //   prevEl: "#formula-arrow_left",
  // },
});
