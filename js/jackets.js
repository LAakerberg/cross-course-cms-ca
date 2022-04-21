const contentJacket = document.querySelector(".jacket-list");
const loadingBar = document.querySelector(".load");

const link = "https://onedesign.nu/cross-course-cms-ca/wp-json/wc/v3/products";

const key =
  "?consumer_key=ck_b08e1b35330f9429c3dd3c0217524fc5f043f0a9&consumer_secret=cs_34ca13e5e0845f327dd9ee677ab696929a186125";

const url = link + key;

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
    <p>${product.attributes[0].name} - ${product.attributes[0].options}</p>
    <p class="price">${product.regular_price},- NOK</p>
    </div></div>
    </a>
    `;
  });
}
