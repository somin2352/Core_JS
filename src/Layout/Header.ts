import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";
import resetCSS from "./resetCSS";

// "c-header"라는 태그 이름을 가진 커스텀 엘리먼트를 등록
@customElement("c-header")
class Header extends LitElement {
  // LitElement의 정적 styles 속성을 사용하여 컴포넌트의 스타일 정의
  static styles: CSSResultGroup = [
    resetCSS,
    css`
      header {
        display: flex;
        justify-content: space-between;
        background-color: white;
        color: black;
        padding: 1rem;

        .logo {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        nav {
          display: flex;
          align-items: center;

          ul {
            display: flex;
            gap: 1rem;
          }
        }
      }
    `,
  ];

  render() {
    return html`
      <header>
        <h1 class="logo">
          <a href="/"><img src="/logo.png" alt="호랑이얼굴" style="width:30px" /></a>
          <span>HypeCart</span>
        </h1>
        <nav>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/src/pages/product/">Product</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}
