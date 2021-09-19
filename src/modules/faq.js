const faq = () => {
  const questions = document.querySelectorAll('#faq > div > div.accordion > ul > li');

  const switchTabs = e => {
    const target = e.target;
    console.log('target: ', target.parentElement);
    // target.classList.toggle('msg-active');
    questions.forEach(elem => {
      if (elem.firstElementChild === target) {
        elem.firstElementChild.classList.add('msg-active');
      } else elem.firstElementChild.classList.remove('msg-active');
    });
  };

  questions.forEach(elem => {
    elem.firstElementChild.addEventListener('click', switchTabs);
  });
};

export default faq;
