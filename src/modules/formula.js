const formula = () => {
  const formula = document.getElementById('formula');
  const formulaItem = formula.querySelectorAll('.formula-item__icon');

  formulaItem.forEach(elem => {
    let element;
    let description;

    if (elem.closest('.mobile-hide')) {
      element = elem;
      description = element.firstElementChild;
    } else {
      element = elem.parentElement;
      description = element.firstElementChild.firstElementChild;
    }

    element.addEventListener('mouseenter', () => {

      const descrHiegth = 20 + description.getBoundingClientRect().bottom - description.getBoundingClientRect().top;

      if (element.getBoundingClientRect().top < descrHiegth) {
        description.classList.add('formula-item-popup-reverse');
        description.style.bottom = 0 - descrHiegth + 'px';
      }
      description.style.visibility = 'visible';
      description.style.opacity = 1;
    });
    element.addEventListener('mouseleave', () => {
      elem.firstElementChild.classList.remove('formula-item-popup-reverse');
      description.style.bottom = '90px';
      description.style.visibility = 'hidden';
      description.style.opacity = 0.1;
    });
  });

};

export default formula;
