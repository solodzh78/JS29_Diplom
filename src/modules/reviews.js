const reviews = () => {
  const swiper = new Swiper('.reviews-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: "#reviews-arrow_right",
      prevEl: "#reviews-arrow_left",
    },
  });

};

export default reviews;
