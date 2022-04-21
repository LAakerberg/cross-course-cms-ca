const contentOne = document.querySelector(".one");
const contentTwo = document.querySelector(".two");
const contentThree = document.querySelector(".three");

contentOne.innerHTML += `
<div class="center">
<div class="campaign-left"><img class="jackets__image" src="images/andreas-wagner-8H5kNkYmJYQ-unsplash-width1000.jpg"/>
<a href="jackets.html" class="bottom-text">New jackets in store</a></div>
<div class="campaign-right"><img class="adventure__image" src="images/nina-luong-dy4QG5c5xWQ-unsplash-width1000.jpg" />
<a href="index.html" class="top-text">Your next adventure</a></div>
</div>`;

const url =
  "https://onedesign.nu/cross-course-cms-ca/wp-json/wc/store/products";

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
    contentTwo.innerHTML += `
    <div class="product">
    <img src="${product.images[0].src}" alt="${product.name}" class="products__image" />
    <div class="small-product-text">
    <h3>${product.name}</h3>
    <p>${product.short_description}</p>
    <p class="price">${product.prices.regular_price},- NOK</p>
    </div></div>
    `;
  });
}
