const { drug } = document.forms;

// console.log(drug);
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
//   console.log(response.ok);
//   if (response.ok) {
//     const res = await response.json();
//     window.location = '/userBlog';
//     // console.log(h1);
//   }
});
