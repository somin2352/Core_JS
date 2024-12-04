import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";
import resetCSS from "../Layout/resetCSS";
import { Product } from "../@types/type";
import { getPBImageURL } from "../api/getPBImageURL";
import gsap from "gsap";

@customElement("product-list")
class ProductList extends LitElement {
  // Lit의 @property 데코레이터를 사용해 data라는 속성을 정의
  // Product 타입을 기본값으로 사용하며 초기값은 빈 데이터 구조
  @property({ type: Object }) data: Product = {
    items: [],
    page: 0,
    perPage: 0,
    totalItems: 0,
    totalPages: 0,
  };

  static styles: CSSResultGroup = [
    resetCSS,
    css`
      .container {
        margin: 0 auto;

        & img {
          width: 100%;
        }

        & ul {
          display: grid;
          place-items: center;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
          margin: 2.5rem;

          & li {
            & a {
              max-width: 30vw;
              display: flex;
              flex-direction: column;
              gap: 0.6rem;
            }
          }

          .description {
            font-size: 0.8rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .price {
            color: gray;
            text-decoration: line-through;
          }

          .discount {
            font-size: 1.2rem;
            color: red;
          }

          .real-price {
            font-weight: bold;
          }
        }
      }
    `,
  ];

  // 컴포넌트가 DOM에 연결될 때 호출되는 콜백
  connectedCallback() {
    super.connectedCallback(); // 부모 클래스의 connectedCallback 호출
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch(`${import.meta.env.VITE_PB_API}/collections/products/records`);

    const data = await response.json();
    this.data = data;
  }

  // 상태가 업데이트될 때 호출되는 메서드
  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties); // 부모 클래스의 updated 호출

    const item = this.renderRoot.querySelectorAll(".product-item");

    if (item.length > 0) {
      gsap.from(item, {
        y: 30,
        opacity: 0,
        stagger: 0.2,
      });
    }
  }

  render() {
    return html`
      <div class="container">
        <ul>
          ${this.data.items.map(
            (item) => html`
              <li class="product-item">
                <a href="/">
                  <figure>
                    <img src="${getPBImageURL(item)}" alt="" />
                  </figure>
                  <span class="brand">${item.brand}</span>
                  <span class="description">${item.description}</span>
                  <span class="price">${item.price.toLocaleString()}원</span>
                  <div>
                    <span class="discount">${item.discount}%</span>
                    <span class="real-price">${(item.price - item.price * item.discount * 0.01).toLocaleString()}원</span>
                  </div>
                </a>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}
