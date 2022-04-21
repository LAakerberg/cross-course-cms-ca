const contentJacket = document.querySelector(".jacket-list");
const loadingBar = document.querySelector(".load");

const url =
  "https://onedesign.nu/cross-course-cms-ca/wp-json/wc/store/v1/products";

loadingBar.innerHTML += `<div class="loading"><p class="loading-text">Loading...</p><div class="loader"></div></div>`;
contentJacket.innerHTML = ``;

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);

    console.log(getResults);
  } catch (error) {
    console.log(error);
  }
}

getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    loadingBar.innerHTML = ``;
    contentJacket.innerHTML += `
    <a href="jackets-specific.html?id=${product.id}">
    <div class="product">
    <img src="${product.images[0].src}" alt="${product.name}" class="products__image" />
    <div class="small-product-text">
    <h3>${product.name}</h3>
    <p>${product.short_description}</p>
    <p class="price">${product.prices.regular_price},- NOK</p>
    </div></div>
    </a>
    `;
  });
}
