const fullPrice = () => {
  const popupRepairTypes = document.querySelectorAll('.popup-repair-types-nav__item');
  const popupRepairTables = document.querySelectorAll('.popup-repair-types-content-table__list');
  const listPopupRepair = document.querySelector('.nav-list-popup-repair');
  const arrovLeft = document.getElementById('nav-arrow-popup-repair_left');
  const arrovRight = document.getElementById('nav-arrow-popup-repair_right');
  const sliderWrapper = document.querySelector('.nav-wrap.nav-wrap-repair');
  let activeSlide = 0;

  const makeActive = num => {
    popupRepairTypes.forEach((elem, index) => {

      if (num === index) {
        elem.classList.add('active');
      } else elem.classList.remove('active');
    });
    popupRepairTables.forEach((elem, index) => {

      if (num === index) {
        elem.classList.remove('hide');
      } else elem.classList.add('hide');
    });
  };

  const showTable = e => {
    const target = e.target;
    makeActive(target.num);
    document.getElementById('switch-inner').textContent = target.textContent;
    console.log(target.textContent);
  };
  popupRepairTables.forEach((elem, index) => {
    elem.num = index;
  });

  const getWidth = () => {
    let slidesWidth = 0;
    for (let i = activeSlide; i < popupRepairTypes.length; i++) {
      slidesWidth += popupRepairTypes[i].offsetWidth;
    }
    return slidesWidth;
  };

  const nextSlide = () => {
    const slidesWidth = getWidth();

    if (slidesWidth > sliderWrapper.offsetWidth) {

      if (slidesWidth - sliderWrapper.offsetWidth > popupRepairTypes[activeSlide].offsetWidth) {
        activeSlide++;
        listPopupRepair.style.transform =
          `translate(-${popupRepairTypes[activeSlide].offsetLeft}px)`;
      } else {
        const slideOffset = popupRepairTypes[activeSlide].offsetLeft + slidesWidth - sliderWrapper.offsetWidth;
        listPopupRepair.style.transform = `translate(-${slideOffset}px)`;
        activeSlide++;
      }
    } else return;
  };

  const prevSlide = () => {

    if (activeSlide > 0) {
      activeSlide--;
    } else return;
    listPopupRepair.style.transform =
      `translate(-${popupRepairTypes[activeSlide].offsetLeft}px)`;
  };

  popupRepairTypes.forEach((elem, index) => {
    elem.num = index;
    elem.addEventListener('click', showTable);
  });
  arrovLeft.addEventListener('click', prevSlide);
  arrovRight.addEventListener('click', nextSlide);

};

export default fullPrice;
