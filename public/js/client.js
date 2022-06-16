const { drug } = document.forms;
const list = document.querySelector('.list');
const block = document.querySelector('.container');
console.log(drug);
console.log(block);


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
          <img ${res.img} class='card-img-top' alt='...'/>
          <div class='card-body'>
        <h5 class='card-title'>${res.name}</h5>
        <p class='card-text'>${res.describe}</p>
        <p class='card-text'>${res.price} ₽</p>
        <p class='card-text'>${res.discount} ₽ Цена со скидкой</p>
        <button type="click" href='#' data-id=${res.id} class='btn btn-primary'>Купить</button>
        <button type="click" href='#' data-id=${res.id} class='btn btn-primary'>Изменить</button>
        <button type="click" href='#' data-type="delete" data-id=${res.id} class='btn btn-primary delete-button'>Удалить</button>
      </div>
    </div>
  </li>`
    );
  }
});

block.addEventListener('click', async (event) => {
  event.preventDefault();
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
