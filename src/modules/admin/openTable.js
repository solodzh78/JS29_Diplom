/* eslint-disable no-useless-escape */
const openTable = () => {
  const user = 'admin';
  const userPassword = '111111';
  const table = document.getElementById('table'); 
  const selectType = document.getElementById('typeItem');

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

    makeSelect(workTypes);
    renderTable(data, 'all');
    selectType.addEventListener('change', () => {
      renderTable(data, selectType.value);
    });

  };
  getData()
    .then(response => response.json())
    .then(data => calc(data))
    .catch(error => console.error('Ошибка: ', error));

};

export default openTable;
