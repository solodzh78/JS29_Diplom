/* eslint-disable no-useless-escape */
const openTable = () => {
  const user = 'admin';
  const userPassword = '111111';
  const table = document.getElementById('table');
  const selectType = document.getElementById('typeItem');
  const modal = document.getElementById('modal');
  const form = modal.querySelector('form');
  const btnAddItem = document.querySelector('.btn-addItem');

  function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  if (!(getCookie('user') === user && getCookie('password') === userPassword)) {
    document.location.href = './index.html';
  }
  const url = 'http://localhost:3000/api/items';
  const getData = () => fetch(url);

  const calc = data => {
    const workTypes = [];
    data.forEach(elem => { if (workTypes.indexOf(elem.type) === -1) workTypes.push(elem.type); });

    const makeSelect = workTypes => {
      let selectInnerHtml = '<option value="all">Все услуги</option>';
      workTypes.forEach((elem, index) => {
        const option = `<option value="${index}">${elem}</option>`;
        selectInnerHtml += option;
      });
      selectType.innerHTML = selectInnerHtml;
    };

    const renderTable = (data, workTypeValue) => {
      let tableInnerHtml = '';
      let flag = false;

      if (workTypeValue === 'all') flag = true;
      data.forEach(elem => {

        if (elem.type === workTypes[workTypeValue] || flag) {
          const row =
`<tr class="table__row">
  <td class="table__id table__cell">${elem.id}</td>
  <td class="table-type table__cell">${elem.type}</td>
  <td class="table-name table__cell">
    ${elem.name}
  </td>
  <td class="table-units table__cell">
    ${elem.units}
  </td>
  <td class="table-cost table__cell">
    ${elem.cost} руб
  </td>
  <td>
    <div class="table__actions table__cell">
      <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
      </button>
      <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
      </button>
    </div>
  </td>
</tr>`;
          tableInnerHtml += row;
        }
      });
      table.innerHTML = tableInnerHtml;
    };

    const editData = e => {
      const target = e.target.closest('.table__row');
      console.dir(target);
    };

    const clickTable = e => {
      if (e.target.closest('.action-change')) editData(e);
    };

    const closeModal = e => {
      const target = e.target;
      if (target.closest('.button__close') ||
      target.closest('.cancel-button') ||
      !target.closest('.modal')) {
        e.preventDefault();
        modal.classList.add('hide');
      }
    };

    const postData = body => fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const sendData = e => {
      e.preventDefault();
      const body = {};
      const inputs = form.querySelectorAll('input');
      inputs.forEach(elem => {
        body[elem.id] = elem.value;
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

    };

    makeSelect(workTypes);
    renderTable(data, 'all');
    selectType.addEventListener('change', () => {
      renderTable(data, selectType.value);
    });
    btnAddItem.addEventListener('click', () => {
      modal.classList.remove('hide');
    });
    modal.addEventListener('click', closeModal);
    form.addEventListener('submit', sendData);
    table.addEventListener('click', clickTable);
    // form.querySelector('.button button-ui_firm').addEventListener('click', sendData);

  };
  getData()
    .then(response => response.json())
    .then(data => calc(data))
    .catch(error => console.error('Ошибка: ', error));

};

export default openTable;
