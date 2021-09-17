/* eslint-disable object-shorthand */
const portfolio = () => {

  const desktopSlider = () => {

    const getSlideNumerPerView = () => {
      if (window.innerWidth >= 1140) {
        return 3;
      } else return 2;
    };

    const swiper = new Swiper('.portfolio-slider', {
      slidesPerView: getSlideNumerPerView(),
      navigation: {
        nextEl: ".slider-arrow_right-portfolio",
        prevEl: ".slider-arrow_left-portfolio",
      },
    });

    const changeSlideNumerPerView = () => {
      if (getSlideNumerPerView !== swiper.params.slidesPerView) {
        swiper.params.slidesPerView = getSlideNumerPerView();
        swiper.update();
      }
    };

    window.addEventListener(`resize`, changeSlideNumerPerView);

  };

  const mobieleSlider = () => {
    const swiper = new Swiper('.portfolio-slider-mobile', {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function(currentClass, totalClass) {
          return '<div class="slider-counter-content__current ' + currentClass + '"></div>' +
          '<div class="slider-counter-content__total ' + totalClass + '"></div>';
        }
      },
      navigation: {
        nextEl: "#portfolio-arrow-mobile_right",
        prevEl: "#portfolio-arrow-mobile_left",
      },
    });

  };

  desktopSlider();
  mobieleSlider();

};


export default portfolio;
