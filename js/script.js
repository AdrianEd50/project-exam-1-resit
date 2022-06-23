/*import { baseUrl } from "./constants/api.js";
const productsUrl = baseUrl;
const conteiner = document.querySelector(".products-conteiner")(
  async function () {
    try {
      const response = await fetch(productsUrl);
      const products = await response.json();
      createHTML(products);
    } catch (error) {
      console.log(error);
    }
  }
)();

function createHTML(products) {
  for (let i = 0; i < products.length; i++) {
    conteiner.innerHTML += `<div class="product"
                                <h4>${product.abbreviated_product_name}
                                </h4>
                             </div>`;
  }
}*/
