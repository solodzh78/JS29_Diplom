const formula = () => {
  const formula = document.getElementById('formula');
  const formulaItem = formula.querySelectorAll('.formula-item');
  console.log('formula: ', formulaItem);
  formulaItem.forEach(elem => {
    const description = elem.firstElementChild.firstElementChild.style;
    description.visibility = 'visible';
    description.opacity = 1;
  });

};

export default formula;
