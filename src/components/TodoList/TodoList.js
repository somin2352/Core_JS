import { LitElement, html } from "lit";
import "/src/components/TodoItem/TodoItem";

class TodoList extends LitElement {
  //@property({type:Array})
  //todoItems: TodoItem[] = [];

  static properties = {
    todoItems: { type: Array },
  };

  constructor() {
    super();
    this.todoItems = JSON.parse(localStorage.getItem("todo")) || [];
  }

  handleUpdate(id, updateItem) {
    this.todoItems = this.todoItems.map((item) => (item.id === id ? { ...item, ...this.updateItem } : item));
    this.saveData();
  }

  handleDelete(id) {
    this.todoItems = this.todoItems.filter((item) => item.id !== id);
    this.saveData();
  }

  handleAddItem() {
    // 새로운 li 아이템 생성
    const newItem = { id: Date.now(), value: "", checked: false };
    this.todoItems = [...this.todoItems, newItem];

    this.saveData();
  }

  saveData() {
    localStorage.setItem("todo", JSON.stringify(this.todoItems));
  }

  render() {
    return html`
      <div class="container">
        <h1>TODO LIST</h1>
        <ul class="todo">
          ${this.todoItems.map((item) => html` <todo-item .id=${item.id} .value=${item.value} .checked=${item.checked} @update=${(e) => this.handleUpdate(this.id, e.detail)} @delete=${() => this.handleDelete(item.id)}></todo-item> `)}
        </ul>
        <button type="button" class="add-item" @click=${this.handleAddItem}>+</button>
      </div>
    `;
  }
}

customElements.define("todo-list", TodoList);
app.append(document.createElement("todo-list"));
