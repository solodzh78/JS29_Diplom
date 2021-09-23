const formulaSlider = () => {
  const swiper = new Swiper(".formula-slider", {
    slidesPerView: 1,
    breakpoints: {
      575: {
        slidesPerView: 3,
      },
      1140: {
        enable: false,
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: "#formula-arrow_right",
      prevEl: "#formula-arrow_left",
    },
  });

};

export default formulaSlider;
