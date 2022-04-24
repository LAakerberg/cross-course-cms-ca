const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const contentJacket = document.querySelector(".specific");
const loadingBar = document.querySelector(".load");

/*
const url =
  "https://onedesign.nu/cross-course-cms-ca/wp-json/wc/store/v1/products/" + id;
*/
const link =
  "https://onedesign.nu/cross-course-cms-ca/wp-json/wc/v3/products/" + id;
// API call to secure site that's need key access + product id

const key =
  "?consumer_key=ck_b08e1b35330f9429c3dd3c0217524fc5f043f0a9&consumer_secret=cs_34ca13e5e0845f327dd9ee677ab696929a186125";
// Security key
const url = link + key;
// combine the link + key
loadingBar.innerHTML += `<div class="loading"><p class="loading-text">Loading...</p><div class="loader"></div></div>`;
contentJacket.innerHTML = ``;

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    console.log(getResults);
    const product = getResults;

    loadingBar.innerHTML = ``;
    contentJacket.innerHTML += `
    <div class="product-large">
    <img src="${product.images[0].src}" alt="${product.name}" class="products__image__large" />
    <a href="jackets.html" class="back-button"><span class="material-icons">arrow_back</span></a>
    <div class="products__image_thumb"></div>
    <div class="price-cta">
    <div class="add-to-cart">
      <h2>${product.regular_price},- NOK</h2>
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
  } catch (error) {
    console.log(error);
    loadingBar.innerHTML = ``;
    contentJacket.innerHTML = `
    <div class="error">
    Could not load the specific-product as requested, please try again later...
    </div>`;
  }
}

getProducts();
