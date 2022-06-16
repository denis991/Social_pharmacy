const { formEditProduct } = document.forms;

formEditProduct.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log(formEditProduct.id);
  const { id } = formEditProduct;
  const data = Object.fromEntries(new FormData(formEditProduct));
  const response = await fetch(`/product/${id}`, {
    method: 'put',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    window.location = '/product';
  }
});
