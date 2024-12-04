import { getPBImageURL } from "@/api/getPBImageURL";

console.log(import.meta.env);

async function renderProduct() {
  const response = await fetch(`${import.meta.env.VITE_PB_API}/collections/products/records`);

  const data = await response.json();

  const product = data.items;

  const tag = /* html */ `
    <div class="container">
      <ul>
        ${product
          .map((items) => {
            return `
              <li>
            <a href="/">
              <figure>
                <img src="${getPBImageURL(items)}" alt="" />
              </figure>
              <span class="brand">${items.brand}</span>
              <span class="description">${items.description}</span>
              <span class="price">${items.price.toLocaleString()}원</span>
              <div>
                <span class="discount">${items.discount}%</span>
                <span class="real-price">${(items.price - items.price * items.discount * 0.01).toLocaleString()}원</span>
              </div>
            </a>
          </li>
            `;
          })
          .join("")}
      </ul>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", tag);
}

renderProduct();
