const { drug } = document.forms;
const list = document.querySelector('.list');
const block = document.querySelector('.container');

drug.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(drug));
  const response = await fetch('/product', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const res = await response.json();
    list.insertAdjacentHTML(
      'beforeend',
      `<li id="div-${res.id}">
      <div class='card' style='width: 18rem;'>
        <img ${res.img} class='card-img-top' alt='...' />
        <div class='card-body'>
        <p class='card-title readonly'>${res.name}</p>
        <p class='card-text hover'>${res.describe}</p>
        <p class='card-text readonly'>${res.price}₽</p>
        <p>Цена со скидкой <p>
        <p style="display: inline;" class='card-text discount-price' >${res.discount}₽</p></p></p>
          <button type="click" href='#' data-id=${res.id} class='btn btn-primary'>Купить</button>
          <button name="edit-button" type="click" href='#' data-id=${res.id} class='btn btn-primary edit-button'><a style="color: #e1e2e3;" href="/product/${res.id}">Изменить</a></button>
          <button type="click" href='#' data-type="delete" data-id=${res.id} class='btn btn-primary delete-button'>Удалить</button>
          </div>
          </div>
          </li>`
    );
  }
});

block.addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete-button')) {
    const { id } = event.target.dataset;
    const div = document.getElementById(`div-${id}`);
    const response = await fetch(`/product/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      div.remove();
    }
  }
});
