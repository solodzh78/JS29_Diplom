/* eslint-disable no-useless-escape */
const openTable = () => {
  const user = 'admin';
  const userPassword = '111111';

  function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  if (!(getCookie('user') === user && getCookie('password') === userPassword)) {
    document.location.href = './index.html';
  }

};

export default openTable;
