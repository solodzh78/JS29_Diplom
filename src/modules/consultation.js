const consultation = () => {
  const consultation = document.querySelectorAll('.button_wide');
  const popupConsultation = document.querySelector('.popup-consultation');

  const openPopup = () => {
    popupConsultation.style.visibility = 'visible';
  };

  const closePopup = e => {
    const target = e.target;
    if (target.closest('.close') ||
      !target.closest('.feedback-wrap')) {
      popupConsultation.style.visibility = 'hidden';
    }
  };

  consultation.forEach(elem => {
    elem.addEventListener('click', openPopup);
  });
  popupConsultation.addEventListener('click', closePopup);
};

export default consultation;
