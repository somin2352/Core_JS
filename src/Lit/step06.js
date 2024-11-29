import { LitElement, html } from "lit";

class TodoList extends LitElement {
  static properties = {
    _listItem: { state: true },
  };

  constructor() {
    super();

    this._listItem = [
      { text: "밥먹기", completed: true },
      { text: "영화보기", completed: false },
    ];
  }

  get input() {
    return this.renderRoot.querySelector(".newItem") ?? null;
  }

  addTodoItem() {
    console.log(this.input.value);

    this._listItem = [...this._listItem, { text: this.input.value, completed: false }];

    this.input.value = "";
  }

  render() {
    return html/* html */ `
      <h2>TODO LIST</h2>
      <ul>
        ${this._listItem.map(({ text }) => html`<li>${text}</li>`)}
      </ul>
      <label id="newItem">
        <input class="newItem" type="text" id="newItem" aria-label="새로운 아이템" />
      </label>
      <button type="button" @click=${this.addTodoItem}>추가</button>
    `;
  }
}

customElements.define("todo-list", TodoList);

app.append(document.createElement("todo-list"));
