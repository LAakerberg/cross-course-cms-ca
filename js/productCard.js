import products from "./data/products.js";

const specificJacket = document.querySelector(".item");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "jackets.html?id=" + id;

const product = products;

specificJacket.innerHTML += `
<div class="product-large">
<img src="${product[id].img}" alt="Jones Jackets Red outdoor"
  class="products__image">
<a href="jackets.html" class="back-button"><span class="material-icons">arrow_back</span></a>
<div class="products__image_thumb">
</div>
<div class="price-cta">
  <div class="add-to-cart">
    <h1>1290,- NOK</h1>
  </div>
  <div class="add-to-cart-buy">
    <div class="links"><a href="jackets-specific-cart.html" class="cta">Add to cart</a></div>
  </div>
</div>
<div class="product-text">
<h3>${product[id].name}</h3>
<p>${product[id].subName}</p>
<p>${product[id].descriptions}</p>
</div>
</a>
</div>`;

console.log(id);
