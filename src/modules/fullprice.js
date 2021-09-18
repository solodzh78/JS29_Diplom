const fullPrice = () => {

  const makeLive = () => {
    const popupRepairTypes = document.querySelectorAll('.popup-repair-types-nav__item');
    const popupRepairTables = document.querySelectorAll('.popup-repair-types-content-table__list');
    const listPopupRepair = document.querySelector('.nav-list-popup-repair');
    const arrovLeft = document.getElementById('nav-arrow-popup-repair_left');
    const arrovRight = document.getElementById('nav-arrow-popup-repair_right');
    const sliderWrapper = document.querySelector('.nav-wrap.nav-wrap-repair');
    let activeSlide = 0;

    const makeActive = num => {
      popupRepairTypes.forEach((elem, index) => {

        if (num === index) {
          elem.classList.add('active');
        } else elem.classList.remove('active');
      });
      popupRepairTables.forEach((elem, index) => {

        if (num === index) {
          elem.classList.remove('hide');
        } else elem.classList.add('hide');
      });
    };

    const showTable = e => {
      const target = e.target;
      makeActive(target.num);
      document.getElementById('switch-inner').textContent = target.textContent;
    };
    popupRepairTables.forEach((elem, index) => {
      elem.num = index;
    });

    const getWidth = () => {
      let slidesWidth = 0;
      for (let i = activeSlide; i < popupRepairTypes.length; i++) {
        slidesWidth += popupRepairTypes[i].offsetWidth;
      }
      return slidesWidth;
    };

    const nextSlide = () => {
      const slidesWidth = getWidth();

      if (slidesWidth > sliderWrapper.offsetWidth) {

        if (slidesWidth - sliderWrapper.offsetWidth > popupRepairTypes[activeSlide].offsetWidth) {
          activeSlide++;
          listPopupRepair.style.transform =
            `translate(-${popupRepairTypes[activeSlide].offsetLeft}px)`;
        } else {
          const slideOffset = popupRepairTypes[activeSlide].offsetLeft + slidesWidth - sliderWrapper.offsetWidth;
          listPopupRepair.style.transform = `translate(-${slideOffset}px)`;
          activeSlide++;
        }
      } else return;
    };

    const prevSlide = () => {

      if (activeSlide > 0) {
        activeSlide--;
      } else return;
      listPopupRepair.style.transform =
        `translate(-${popupRepairTypes[activeSlide].offsetLeft}px)`;
    };

    popupRepairTypes.forEach((elem, index) => {
      elem.num = index;
      elem.addEventListener('click', showTable);
    });
    arrovLeft.addEventListener('click', prevSlide);
    arrovRight.addEventListener('click', nextSlide);
    makeActive(0);
  };


  const listPopupRepair = document.querySelector('.nav-list-popup-repair');
  const tableWrapper = document.querySelector('.popup-repair-types-content-table');

  const clearElem = elem => {
    while (elem.firstChild) {
      elem.firstChild.remove();
    }
  };

  const url = './crm-backend/db.json';
  const getData = () => fetch(url);

  const calc = data => {
    const workTypes = [];
    data.forEach(elem => { if (workTypes.indexOf(elem.type) === -1) workTypes.push(elem.type); });
    const obj = {};
    workTypes.forEach(elem => { obj[elem] = []; });
    data.forEach(elem => { obj[elem.type].push(elem); });

    clearElem(listPopupRepair);
    clearElem(tableWrapper);

    workTypes.forEach((elem, index) => {
      const type = document.createElement('button');
      type.classList.add('button_o', 'popup-repair-types-nav__item');
      if (!index) type.classList.add('active');
      type.textContent = elem;
      listPopupRepair.append(type);

      const tbody = document.createElement('tbody');
      obj[elem].forEach(el => {
        const tr = document.createElement('tr');
        tr.classList.add('mobile-row');
        const td1 = document.createElement('td');
        td1.classList.add('repair-types-name');
        td1.textContent = el.name;
        const td2 = document.createElement('td');
        td2.classList.add('mobile-col-title', 'tablet-hide', 'desktop-hide');
        td2.textContent = 'Ед.измерения';
        const td3 = document.createElement('td');
        td3.classList.add('mobile-col-title', 'tablet-hide', 'desktop-hide');
        td3.textContent = 'Цена за ед.';
        const td4 = document.createElement('td');
        td4.classList.add('repair-types-value');
        td4.textContent = el.units;
        const td5 = document.createElement('td');
        td5.classList.add('repair-types-value');
        td5.textContent = el.cost + ' руб.';

        tr.append(td1, td2, td3, td4, td5);
        tbody.append(tr);
      });
      const table = document.createElement('table');
      table.classList.add('popup-repair-types-content-table__list');
      table.append(tbody);
      tableWrapper.append(table);
    });
    makeLive();
  };

  getData()
    .then(response => response.json())
    .then(data => calc(data))
    .catch(error => console.error('Ошибка: ', error));

};

export default fullPrice;
