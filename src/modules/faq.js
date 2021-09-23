const faq = () => {
  const questions = document.querySelectorAll('#faq > div > div.accordion > ul > li');
  const switchTabs = e => {
    const target = e.target;
    if (target.classList.contains('msg-active')) {
      target.classList.remove("msg-active");
      return;
    }
    questions.forEach(elem => {
      elem.firstElementChild.classList.remove('msg-active');
      target.classList.add("msg-active");
    });
  };

  questions.forEach(elem => elem.firstElementChild.addEventListener('click', switchTabs));
};

export default faq;
