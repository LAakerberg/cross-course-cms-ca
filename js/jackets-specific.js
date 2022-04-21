const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const contentJacket = document.querySelector(".jacket-list");
const loadingBar = document.querySelector(".load");

const url =
  "https://onedesign.nu/cross-course-cms-ca/wp-json/wc/store/v1/products?id=" +
  id;

loadingBar.innerHTML += `<div class="loading"><p class="loading-text">Loading...</p><div class="loader"></div></div>`;
contentJacket.innerHTML = ``;

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    const product = getResults;
    console.log(getResults);
    for (let i = 0; i < product.length; i++) {
      loadingBar.innerHTML = ``;
      contentJacket.innerHTML += `
    <div class="product-large">
    <img src="${product.images[i].src}" alt="${product.name}" class="products__image__large" />
    <a href="jackets.html" class="back-button"><span class="material-icons">arrow_back</span></a>
    <div class="products__image_thumb"></div>
    <div class="price-cta">
    <div class="add-to-cart">
      <h2>${product.prices.regular_price},- NOK</h2>
    </div>
    <div class="add-to-cart-buy">
      <div class="links"><a href="jackets-specific-cart.html" class="cta">Add to cart</a></div>
    </div>
  </div>
  <div class="product-text">
  <h2>${product.name}</h2>
  <p>${product.description}</p>
  </div></a></div>
    `;
    }
  } catch (error) {
    console.log(error);
  }
}

getProducts();
