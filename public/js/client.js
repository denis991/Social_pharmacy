const { drug } = document.forms;

console.log(drug);
// mainPage.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   // const formData = new FormData(mainPage);
//   // const data = Object.fromEntries(formData);
//   const data = Object.fromEntries(new FormData(mainPage));

//   const response = await fetch('/registration', {
//     method: 'post',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
//   console.log(response.ok);
//   if (response.ok) {
//     const res = await response.json();
//     window.location = '/userBlog';
//     // console.log(h1);
//   }
// });
