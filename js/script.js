export default [];

const url =
  "https://onedesign.nu/cross-course-cms-ca/wp-json/wc/store/products";

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();

    console.log(getResults);
  } catch (error) {
    console.log(error);
  }
}

getProducts();
