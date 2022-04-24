const contentOne = document.querySelector(".one");
const contentTwo = document.querySelector(".two");
const contentThree = document.querySelector(".three");

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
contentOne.innerHTML += `
<div class="center">
<div class="campaign-left"><img class="jackets__image" src="images/andreas-wagner-8H5kNkYmJYQ-unsplash-width1000.jpg"/>
<a href="jackets.html" class="bottom-text">New jackets in store</a></div>
<div class="campaign-right"><img class="adventure__image" src="images/nina-luong-dy4QG5c5xWQ-unsplash-width1000.jpg" />
<a href="index.html" class="top-text">Your next adventure</a></div>
</div>`;

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
    const featured = product.featured;

    if (featured === true) {
      contentTwo.innerHTML += `
      <div class="product">
      <img src="${product.images[0].src}" alt="${product.name}" class="products__image" />
      <div class="small-product-text">
      <h3>${product.name}</h3>
      <p>${product.attributes[0].name} - ${product.attributes[0].options}</p>
      <p class="price">${product.regular_price},- NOK</p>
      </div></div>
      `;
    } else {
      console.log("Error");
    }
  });
}
