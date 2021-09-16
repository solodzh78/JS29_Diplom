const slider = () => {

  const repairTypes = document.getElementById('repair-types');
  const navListRepair = document.querySelectorAll('.repair-types-nav__item');
  console.log('navListRepair: ', navListRepair);
  const repairTypesSliderSlide = repairTypes.querySelectorAll('.repair-types-slider__slide');
  console.log('repairTypesSliderSlide: ', repairTypesSliderSlide);
  let activeType = 1;
  let previosType = 0;
  const sliderArrowRight = document.querySelector('.slider-arrow_right');
  const sliderArrowLeft = document.querySelector('.slider-arrow_left');
  const sliderCurrent = document.querySelector('.slider-counter-content__current');
  const sliderTotal = document.querySelector('.slider-counter-content__total');

  const switchTypes = (elem, index) => {
    console.log(elem);
    console.log(index);
    navListRepair[activeType - 1].classList.remove('active');
    elem.classList.add('active');
    activeType = index + 1;
  };

  navListRepair.forEach((elem, index) => {
    console.log('index', index);
    elem.addEventListener('click', (elem, index) => { switchTypes(elem, index); });
  });
};

export default slider;
