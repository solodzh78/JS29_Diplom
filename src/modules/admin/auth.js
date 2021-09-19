const auth = () => {
  const name = document.getElementById('name');
  const password = document.getElementById('password');
  const form = document.getElementById('form1');
  const user = 'admin';
  const userPassword = '111111';

  function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      ...options
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (const optionKey in options) {
      updatedCookie += "; " + optionKey;
      const optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }

  const checkPass = e => {
    name.nextElementSibling.classList.add('hide');
    password.nextElementSibling.classList.add('hide');
    e.preventDefault();

    if (name.value === user && password.value === userPassword) {
      setCookie('userStatus', 'Залогинен');
      setCookie('password', password.value);
      form.reset();
      document.location.href = './table.html';
      return;
    }

    if (name.value !== user) {
      name.nextElementSibling.classList.remove('hide');
      name.value = '';
    }

    if (password.value !== userPassword) {
      password.nextElementSibling.classList.remove('hide');
      password.value = '';
    }
  };

  form.addEventListener('submit', checkPass);

};

export default auth;
