const menu = () => {
  const popupMenu = document.querySelector('.popup-menu');
  const popupDialogMenu = document.querySelector('.popup-dialog-menu');
  const menuBtn = document.querySelector('.menu__icon');
  const buttonFooter = document.querySelector('.button-footer');
  const popupRepairTypes = document.querySelector('.popup-repair-types');
  const fullPprice1 = document.querySelectorAll('.link-list-repair');

  const toggleMenu = () => {
    popupDialogMenu.classList.toggle('showHide-menu');

    if (popupMenu.style.visibility === 'visible') {
      popupMenu.style.visibility = 'hidden';
    } else {
      popupMenu.style.visibility = 'visible';
    }
  };

  const smoothScroll = e => {
    const target = e.target;
    console.log('href', target.getAttribute('href'));

    e.preventDefault();
    document.querySelector(target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const showFullPrice = e => {
    e.preventDefault();
    popupRepairTypes.style.visibility = 'visible';
    popupRepairTypes.addEventListener('click', e => {
      const target = e.target;
      if (target.classList.contains('close') ||
        !target.closest('.popup-dialog')) {
        popupRepairTypes.style.visibility = 'hidden';
      }
    });
  };

  popupMenu.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('__full-price')) {
      showFullPrice(e);
    } else if (target.classList.contains('menu-link')) {
      smoothScroll(e);
    }

    if (target.classList.contains('close-menu') ||
    target.classList.contains('menu-link') ||
    target.classList.contains('__full-price') ||
    (!target.closest('.popup-dialog-menu'))) {
      toggleMenu();
    }
  });

  menuBtn.addEventListener('click', toggleMenu);
  buttonFooter.addEventListener('click', smoothScroll);
  fullPprice1.forEach(elem => {
    elem.addEventListener('click', showFullPrice);
  });

};

export default menu;
