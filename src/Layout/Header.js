import { LitElement, html, css } from "lit";
import resetCSS from "./resetCSS";

class Header extends LitElement {
  static get styles() {
    return [
      resetCSS,
      css/* css */ `
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
  }

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
            <li><a href="/">Product</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("c-header", Header);
