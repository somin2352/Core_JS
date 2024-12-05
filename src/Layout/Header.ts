import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { Auth } from "../@types/type";
import resetCSS from "./resetCSS";
import pb from "../api/pocketbase";

// "c-header"라는 태그 이름을 가진 커스텀 엘리먼트를 등록
@customElement("c-header")
class Header extends LitElement {
  @state() private loginData: Auth = {} as Auth;

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

  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  fetchData() {
    const auth = JSON.parse(localStorage.getItem("auth") ?? "{}");

    this.loginData = auth;
  }

  handleLogout(e: Event) {
    e.preventDefault();
    Swal.fire({
      title: "로그아웃",
      text: "로그아웃 하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "로그아웃",
    }).then((isConfirmed) => {
      if (isConfirmed) {
        localStorage.removeItem("auth");
        pb.authStore.clear(); //pocketbase 데이터 삭제
        // this.loginData.isAuth = false; // 상태 변경
        // this.requestUpdate(); //강제 업데이트
        location.reload();
      }
    });
  }

  render() {
    const { isAuth, user } = this.loginData;

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
            <li>
              ${!isAuth
                ? html`<a href="/src/pages/login/">Login</a>`
                : html` <div>
                    <span>${user.name}님</span>
                    <a href="/" @click=${this.handleLogout}>Logout</a>
                  </div>`}
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}
