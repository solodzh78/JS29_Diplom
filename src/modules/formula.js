const formula = () => {
  const formula = document.getElementById('formula');
  const formulaItem = formula.querySelectorAll('.formula-item__icon');
  const frame = document.querySelector('.formula-item-popup:before');
  console.log('frame: ', frame);

  formula.addEventListener('click', e => console.log(e.target));
  formulaItem.forEach(elem => {
    let element;
    let description;
    let frame;
    console.dir(elem);

    if (elem.classList.contains('mobile-hide')) {
      element = elem;
      description = element.firstElementChild.style;
    } else {
      element = elem.parentElement;
      description = element.firstElementChild.firstElementChild.style;
    }
    // description.classList.toggle('formula-item-popup-reverse');

    element.addEventListener('mouseenter', e => {
      description.visibility = 'visible';
      description.opacity = 1;
      elem.firstElementChild.classList.toggle('formula-item-popup-reverse');
    });
    element.addEventListener('mouseleave1', e => {
      console.log(e.target);
      description.visibility = 'hidden';
      description.opacity = 0.1;
    });
  });

};

export default formula;
