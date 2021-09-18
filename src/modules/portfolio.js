/* eslint-disable object-shorthand */
const portfolio = () => {

  const popupPortfolio = document.querySelector('.popup-portfolio');
  const portfolioSlider = document.querySelector('.portfolio-slider');
  const portfolioSliderMobile = document.querySelector('.portfolio-slider-mobile');
  const popupPortfolioText = popupPortfolio.querySelectorAll('.popup-portfolio-text');
  const slides = portfolioSlider.querySelectorAll('.portfolio-slider__slide-frame');

  slides.forEach((elem, index) => {
    elem.num = index;
  });

  const swiper = new Swiper('.portfolio-slider', {
    slidesPerView: 1,
    breakpoints: {
      575: {
        slidesPerView: 1
      },
      900: {
        slidesPerView: 2
      },
      1140: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: ".slider-arrow_right-portfolio",
      prevEl: ".slider-arrow_left-portfolio",
    },
  });

  const swiperPopup = new Swiper('.popup-portfolio-slider', {
    pagination: {
      el: "#swiper-pagination",
      type: "fraction",
      renderFraction: function(currentClass, totalClass) {
        return '<div class="slider-counter-content__current ' + currentClass + '"></div>' +
        '<div class="slider-counter-content__total ' + totalClass + '"></div>';
      }
    },
    navigation: {
      nextEl: "#popup_portfolio_right",
      prevEl: "#popup_portfolio_left",
    },
  });

  const selectText = () => {
    popupPortfolioText.forEach((elem, index) => {

      if (swiperPopup.activeIndex === index) {
        elem.classList.add('show');
      } else elem.classList.remove('show');
    });
  };

  const openPopup = e => {
    popupPortfolio.style.visibility = 'visible';
    swiperPopup.slideTo(e.target.num, false, false);
    selectText();
  };

  const closePopup = e => {
    const target = e.target;
    if (target.closest('.close') ||
    !target.closest('.popup-dialog-portfolio')) {
      popupPortfolio.style.visibility = 'hidden';
    }
  };

  const sliderCurrent = popupPortfolio.querySelector('.slider-counter-content__current');
  portfolioSlider.addEventListener('click', openPopup);
  sliderCurrent.addEventListener('DOMSubtreeModified', selectText);
  popupPortfolio.addEventListener('click', closePopup);
  const mobieleSlider = new Swiper('.portfolio-slider-mobile', {
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

  const openPopupMobile =  () => {
    popupPortfolio.style.visibility = 'visible';
    const currentSlide = document.
      querySelector('#portfolio-counter > div > div.slider-counter-content__current').textContent;
    swiperPopup.slideTo(currentSlide - 1, false, false);
    selectText();
  };

  portfolioSliderMobile.addEventListener('click', openPopupMobile);

};

export default portfolio;
