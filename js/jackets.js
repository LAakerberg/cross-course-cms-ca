const contentJacket = document.querySelector(".jacket-list");
const loadingBar = document.querySelector(".load");
const categoryCheck = document.querySelectorAll(".category");
const perPage = document.querySelector(".per-page");

const link = "https://onedesign.nu/cross-course-cms-ca/wp-json/wc/v3/products";
// API call to secure site that's need key access
const link2 =
  "https://onedesign.nu/cross-course-cms-ca/wp-json/wc/store/products";
// API call to unsecure and public site

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
    const products = getResults;
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

    console.log(getResults);
  } catch (error) {
    console.log(error);
  }
}

getProducts(link);
// call the function/API

/*
perPage.onchange = function (event) {
  const newUrl = link + `per_page=${event.target.value}` + key;
  loadingBar.innerHTML = ``;
  contentJacket.innerHTML = ``;
  getProducts(newUrl);
};
*/

categoryCheck.forEach(function (category) {
  category.onclick = function (event) {
    let newUrl;
    if (event.target.id === "popular") {
      newUrl = link + "?featured=true";
      contentJacket.innerHTML += ``;
    } else {
      const categorySpecific = event.target.value;
      newUrl = link + `/categories/${categorySpecific}` + key;
    }
    contentJacket.innerHTML += ``;
    getProducts(newUrl);
  };
});
