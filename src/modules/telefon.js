const telefon = () => {
  const tel = document.querySelector('.header-contacts__phone-number-accord');
  const arrow = document.querySelector('.header-contacts__arrow');
  const toggleTel = () => {

    if (tel.style.top) {
      tel.style.top = '';
      tel.firstChild.style.opacity = '';
      arrow.style.transform = '';
    } else {
      tel.style.top = '30px';
      tel.firstChild.style.opacity = '1';
      arrow.style.transform = 'rotate(-0.5turn)';
    }
  };

  arrow.addEventListener('click', toggleTel);
  // console.dir(tel);

};

export default telefon;