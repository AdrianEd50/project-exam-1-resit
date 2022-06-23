const url = "https://world.openfoodfacts.org/?json=true";

const productsConteiner = document.querySelector(".products-conteiner");

async function findProducts() {
  const response = await fetch(url);
  console.log(response);

  const json = await response.json();
  console.log(json);

  const prod = json.products;

  productsConteiner.innerHTML = "";

  for (let i = 0; i < prod.length; i++) {
    console.log(prod[i].abbreviated_product_name);

    productsConteiner.innerHTML += `<div class="result">${prod[i].abbreviated_product_name}</div>`;
  }
}

findProducts();

/*import { baseUrl } from "./constants/api.js";
import { findProducts } from "./ui/findProduct.js";

const productsUrl = baseUrl;

(async function () {
  const response = await fetch(productsUrl);
  const json = await response.json();

  console.log(json);

  findProducts(products);
})();*/
