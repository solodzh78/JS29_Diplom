const faq = () => {
  const questions = document.querySelectorAll('#faq > div > div.accordion > ul > li');

  const switchTabs = e => {
    const target = e.target;
    target.classList.toggle('msg-active');
  };

  questions.forEach(elem => {
    elem.firstElementChild.addEventListener('click', switchTabs);
  });
};

export default faq;
