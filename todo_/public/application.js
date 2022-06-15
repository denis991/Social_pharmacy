const container = document.querySelector('.container');
const busList = document.querySelector('#busList');
const formAdd = document.querySelector('#form');

// изменение статуса
container.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.dataset.change) {
    const id = e.target.dataset.change;
    const li = document.getElementById(`li-${id}`);
    const span = li.querySelector('.status');
    const response = await fetch(`/status/${id}`);
    const result = await response.json();
    if (response.ok) {
      span.textContent = result.findBus.status;
      const span2 = li.querySelector('.title');
      span2.classList.toggle('done'); //если он есть, то добавляем класс done если нету, то удаляем
    }
  }
});

// удаление дела
container.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.dataset.delete) {
    const id = e.target.dataset.delete;
    const li = document.getElementById(`li-${id}`);
    const response = await fetch(`/delete/${id}`, {
      method: 'delete',
    });
    if (response.ok) {
      li.remove();
    }
  }
});

// добавление дела
formAdd.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(formAdd);
  const data = Object.fromEntries(formData);
  const response = await fetch('/form', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const result = await response.json();
    busList.insertAdjacentHTML(
      'afterbegin',
      `<li id='li-${result.newBus.id}'><span>${result.newBus.title}</span><button data-edit=${result.newBus.id} class="edit-button" type="click">edit</button> - <span class="status">${result.newBus.status}</span><button data-change=${result.newBus.id} class="change-button" type="click">Изменить статус</button><button data-delete=${result.newBus.id} class="delete-button" type="click">X</button>`
    );
  }
});

// редактирование дела
// отлавливаем нажатие на кнопку редактирования
container.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.dataset.edit) {
    const id = e.target.dataset.edit;
    const li = document.getElementById(`li-${id}`);
    const response = await fetch(`/edit/${id}`);
    if (response.ok) {
      const result = await response.json();
      li.innerHTML = `<form class="edit" name="editForm">
				<input class="text" type="text" name="title" value=${result.findBus.title}/>
				<button data-update=${id} class="update-button" type="click">edit</button>
		  	</form><span class="status">${result.findBus.status}</span>
        <button data-change=${id} class="change-button" type="click">change status</button>
         <button data-delete=${id} class="delete-button" type="click">X</button>`;
    }
  }
});

// добавляем новый текст дела
container.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.dataset.update) {
    const id = e.target.dataset.update;
    const li = document.getElementById(`li-${id}`);
    const formEdit = document.querySelector('.edit');
    const formData = new FormData(formEdit);
    const data = Object.fromEntries(formData);
    const response = await fetch(`/edit/${id}`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const result = await response.json();
      li.innerHTML = `
      <span class="title">${result.findBus.title}</span><button data-edit=${id}
       class="edit-button" type="click">edit</button><span class="status">${result.findBus.status}</span>
					<button data-change=${id} class="change-button" type="click">change status</button>
					<button data-delete=${id} class="delete-button" type="click">X</button>`;
    }
  }
});
