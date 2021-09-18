const sendFormAll = () => {
  const forms = document.querySelectorAll('form');
  const popupPrivacy = document.querySelector('.popup-privacy');
  const popupThank = document.querySelector('.popup-thank');

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

  const showMessage = () => {
    popupThank.style.visibility = 'visible';
  };

  const closePopup = e => {
    const target = e.target;
    if (target.closest('.close') ||
      !target.closest('.popup-thank-bg')) {
      popupThank.style.visibility = 'hidden';
    }
  };

  popupThank.addEventListener('click', closePopup);

  const sendForm = form => {
    const privacy = form.querySelector('.checkbox__input');
    const linkPrivacy = form.querySelector('.link-privacy');
    const nameField = form.querySelector('[name="name"]') || 0;

    if (nameField) {
      nameField.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^А-Яа-яёЁ ]/g, '');
      });
      nameField.addEventListener('blur', e => {
        e.target.value = e.target.value.replace(/^-+|^ +|-+$| +$|[^А-Яа-яёЁ -]/g, '');
        e.target.value = e.target.value.replace(/--+/g, '-');
        e.target.value = e.target.value.replace(/ +/g, ' ');
        if (e.target.value) {
          e.target.value = e.target.value.split(' ').
            reduce((akk, elem) => {
              if (elem.length > 1) {
                const newWord = elem[0].toUpperCase() + elem.slice(1).toLowerCase();
                return akk + ' ' + newWord;
              } else return akk;
            }, '');
        }
      });
    }

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
          showMessage();
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
