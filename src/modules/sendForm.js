const sendFormAll = () => {
  const forms = document.querySelectorAll('form');
  const popupPrivacy = document.querySelector('.popup-privacy');

  const openPrivacyPopup = () => {
    popupPrivacy.style.visibility = 'visible';
  };

  const closePrivacyPopup = e => {
    const target = e.target;

    if (target.classList.contains('close') ||
      !target.closest('.popup-dialog-privacy')) {
      popupPrivacy.style.visibility = 'hidden';
    }
  };

  const sendForm = form => {
    const privacy = form.querySelector('.checkbox__input');
    const linkPrivacy = form.querySelector('.link-privacy');

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!privacy.checked) {
        return;
      }
      const formData = new FormData(form);
      const body = {};
      for (const val of formData.entries()) {
        body[val[0]] = val[1];
      }
      const postData = body => fetch('./server.php', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      postData(body)
        .then(response => {

          if (response.status !== 200) {
            throw new Error('Status network not 200');
          }
        })
        .catch(error => {
          console.error(error);
        });
    });

    linkPrivacy.addEventListener('click', openPrivacyPopup);
  };

  forms.forEach(elem => {
    sendForm(elem);
  });

  popupPrivacy.addEventListener('click', closePrivacyPopup);

};

export default sendFormAll;
