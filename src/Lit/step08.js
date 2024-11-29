import { LitElement, html, css } from "lit";
import s from "/src/Lit/test.css?inline";

class TodoList extends LitElement {
  static properties = {
    _listItem: { state: true },
    hideCompleted: {},
  };

  // 내부 css
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  constructor() {
    super();

    (this._listItem = [
      { text: "밥먹기", completed: true },
      { text: "영화보기", completed: false },
    ]),
      (this.hideCompleted = false);
  }

  get input() {
    return this.renderRoot.querySelector(".newItem") ?? null;
  }

  addTodoItem() {
    console.log(this.input.value);

    this._listItem = [...this._listItem, { text: this.input.value, completed: false }];

    this.input.value = "";
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    // properties의 직속 요소가 아니므로 completed를 업데이트 하기 위해 필요함
    this.requestUpdate();
  }

  setHideCompleted(e) {
    this.hideCompleted = e.target.checked;
  }

  render() {
    const items = this.hideCompleted ? this._listItem.filter((item) => !item.completed) : this._listItem;

    const caughtUpMessage = html` <p>You're all caught up!</p> `;

    const todos = html`
      <ul>
        ${this._listItem.map((item) => html` <li class="${item.completed ? "completed" : ""}" @click=${() => this.toggleCompleted(item)}>${item.text}</li> `)}
      </ul>
    `;

    const todosOrMessage = items.length > 0 ? todos : caughtUpMessage;

    return html/* html */ `
      <style>
        ${s}
      </style>
      <h2 class="title">TODO LIST</h2>

      ${todosOrMessage}

      <label id="newItem">
        <input class="newItem" type="text" id="newItem" aria-label="새로운 아이템" />
      </label>

      <button type="button" @click=${this.addTodoItem}>추가</button>

      <hr />

      <label>
        <input type="checkbox" @change=${this.setHideCompleted} />
        hideCompleted
      </label>
    `;
  }
}

customElements.define("todo-list", TodoList);

app.append(document.createElement("todo-list"));
