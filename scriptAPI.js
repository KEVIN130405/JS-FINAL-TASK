let API = 'https://fakestoreapi.com/products/';
let container = document.querySelector(".api");

fetch(API)
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    products.forEach((item) => {
      let card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title.slice(0, 60)}">
        <h3>${item.title.slice(0, 60)}</h3>
        <p class="category">${item.category}</p>
        <p class="description">${item.description.slice(0, 120)}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    container.innerHTML = `<p class="error">Error: ${error.message}</p>`;
  })
  .finally(() => {
    console.log("API called");
  });

