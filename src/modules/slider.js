const slider = () => {

  const repairTypes = document.getElementById('repair-types');
  const navListRepair = document.querySelectorAll('.repair-types-nav__item');
  const repairTypesSlider = repairTypes.querySelectorAll('.repair-types-slider > div');
  let activeType = 0;
  let activeSlide = 0;
  let total;
  const sliderArrowRight = repairTypes.querySelector('.slider-arrow_right');
  const sliderArrowLeft = repairTypes.querySelector('.slider-arrow_left');
  const navArrowRight = repairTypes.querySelector('#nav-arrow-repair-right_base');
  const navArrowLeft = repairTypes.querySelector('#nav-arrow-repair-left_base');

  const sliderCurrent = document.querySelector('.slider-counter-content__current');
  const sliderTotal = document.querySelector('.slider-counter-content__total');

  const selectTypes = () => {
    repairTypesSlider.forEach((elem, index) => {

      if (index === activeType) {
        elem.classList.remove('hide');
      } else {
        elem.classList.add('hide');
      }
    });
  };

  const showSlideCounter = () => {
    total = repairTypesSlider[activeType].children.length;
    sliderTotal.textContent = total;
    sliderCurrent.textContent = activeSlide + 1;
  };

  const showSlide = () => {
    const slides = repairTypesSlider[activeType].children;
    [...slides].forEach((elem, index) => {

      if (index === activeSlide) {
        elem.classList.remove('hide');
      } else {
        elem.classList.add('hide');
      }
    });
  };

  const changeSlide = e => {

    if (e.target.closest('#repair-types-arrow_right')) {

      if (activeSlide < total - 1) {
        activeSlide++;
      } else return;
    } else {

      if (activeSlide > 0) {
        activeSlide--;
      } else return;
    }
    showSlide();
    showSlideCounter();
  };

  const mobieleSlider = e => {

    if (e.target.closest('#nav-arrow-repair-right_base')) {

      if (activeType < navListRepair.length - 1) {
        activeType++;
      } else return;
    } else {

      if (activeType > 0) {
        activeType--;
      } else return;
    }
    repairTypes.querySelector('.nav-list-repair').style.transform =
    `translate(-${navListRepair[activeType].offsetLeft}px)`;
    navListRepair.forEach(elem => elem.classList.remove('active'));
    navListRepair[activeType].classList.add('active');
    activeSlide = 0;
    selectTypes();
    showSlide();
    showSlideCounter();
  };

  navListRepair.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      navListRepair[activeType].classList.remove('active');
      elem.classList.add('active');
      activeType = index;
      activeSlide = 0;
      selectTypes();
      showSlideCounter();
    });
  });

  sliderArrowRight.addEventListener('click', changeSlide);
  sliderArrowLeft.addEventListener('click', changeSlide);
  navArrowRight.addEventListener('click', mobieleSlider);
  navArrowLeft.addEventListener('click', mobieleSlider);
  window.addEventListener(`resize`, () => {
    if (window.innerWidth > 1024) repairTypes.querySelector('.nav-list-repair').style.transform = '';
  });
  showSlideCounter();
};

export default slider;
