import { LitElement, html } from "lit";

class TodoItem extends LitElement {
  static properties = {
    id: { type: Number },
    value: { type: String },
    checked: { type: Boolean },
  };

  constructor() {
    super();

    this.id = "0";
    this.value = "";
    this.checked = false;
  }

  handleToggleClicked() {
    this.checked = !this.checked;

    // update라는 이름의 커스텀 이벤트 생성
    this.dispatchEvent(
      new CustomEvent("update", {
        detail: { checked: this.checked },
        bubbles: true, // 이벤트가 상위 DOM 요소로 전파되도록 설정 (버블링 활성화)
        composed: true, // Shadow DOM 경계를 넘어 이벤트가 전파되도록 설정
      })
    );
  }

  handleValueChange(e) {
    this.value = e.target.value;
  }

  handleBlur() {
    this.dispatchEvent(
      new CustomEvent("update", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  handleDelete() {
    // li 전체를 삭제해야하기 때문에 상위 DOM으로 전파되어야 함
    this.dispatchEvent(
      new CustomEvent("delete", {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <li class="item">
        <input type="checkbox" .checked=${this.checked} @clicked=${this.handleToggleClicked} />
        <input type="text" .value=${this.value} @input=${this.handleValueChange} @blur=${this.handleBlur} />
        <button type="button" class="delete" @click=${this.handleDelete}>X</button>
      </li>
    `;
  }
}

customElements.define("todo-item", TodoItem);
