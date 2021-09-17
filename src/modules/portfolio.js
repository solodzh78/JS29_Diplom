const portfolio = () => {
  const desktopSlider = () => {
    const portfolioSlider = document.querySelector('.portfolio-slider.mobile-hide');
    const slides = portfolioSlider.querySelectorAll('.portfolio-slider__slide');
    const arrowRight = document.querySelector('.slider-arrow_right-portfolio');
    const arrowLeft = document.querySelector('.slider-arrow_left-portfolio');
    let activeSlide = 0;

    const showArrows = () => {

      if (activeSlide === 2) {
        arrowRight.classList.add('hide');
      } else if (activeSlide === 0) {
        arrowLeft.classList.add('hide');
      } else {
        arrowRight.classList.remove('hide');
        arrowLeft.classList.remove('hide');
      }
    };

    const changeSlide = e => {
      console.log(activeSlide);
      if (e.target.closest('.slider-arrow_right-portfolio')) {

        if (activeSlide < slides.length - 3) {
          activeSlide++;
          portfolioSlider.querySelector('.portfolio-desktop-slider-wrapper').style.transform =
            `translate(-${slides[activeSlide].offsetLeft}px)`;
          showArrows();
        } else return;
      } else {
        if (activeSlide > 0) {
          activeSlide--;
          portfolioSlider.querySelector('.portfolio-desktop-slider-wrapper').style.transform =
            `translate(-${slides[activeSlide].offsetLeft}px)`;
          showArrows();
        } else return;
      }
    };
    
    arrowRight.addEventListener('click', changeSlide);
    arrowLeft.addEventListener('click', changeSlide);
    portfolioSlider.addEventListener('click', () => {
      console.log(portfolioSlider.querySelector('.portfolio-desktop-slider-wrapper').offsetLeft);
    });

  };

  desktopSlider();

};


export default portfolio;
