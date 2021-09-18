/* eslint-disable object-shorthand */
const documents = () => {

  const swiper = new Swiper('.transparency-slider', {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      1140: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: "#transparency-arrow_right",
      prevEl: "#transparency-arrow_left",
    },
  });
  const swiperPopup = new Swiper('.popup-transparency-slider', {
    pagination: {
      el: "#transparency-popup-counter-content",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return '<div class="slider-counter-content__current ' + currentClass + '"></div>' +
          '<div class="slider-counter-content__total ' + totalClass + '"></div>';
      }
    },
    slidesPerView: 1,
    navigation: {
      nextEl: "#transparency_right",
      prevEl: "#transparency_left",
    },
  });

  const docs = document.querySelectorAll('.transparency-item__img');
  const popupTransparency = document.querySelector('.popup-transparency');

  docs.forEach((elem, index) => {
    elem.num = index;
  });

  const closePopup = e => {
    const target = e.target;
    if (target.closest('.close') ||
      !target.closest('.popup-dialog-transparency')) {
      popupTransparency.style.visibility = 'hidden';
    }
  };

  const showTrasparency = e => {
    popupTransparency.style.visibility = 'visible';
    swiperPopup.slideTo(e.target.num, false, false);
  };

  docs.forEach(elem => {
    elem.addEventListener('click', showTrasparency);
  });

  popupTransparency.addEventListener('click', closePopup);
};

export default documents;
