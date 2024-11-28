import { TodoService as s } from '../../service/TodoService.js';

const TodoItemTemplate = document.createElement('template');

TodoItemTemplate.innerHTML = `
<style>@import url("./components/TodoItem/TodoItem.css");</style>
  <li class="item">
    <input type="checkbox" />
    <div class="content">
      <input type="text" />
    </div>
    <button type="button" class="delete-item"> - </button>
  </li>
`;

export class TodoItem extends HTMLElement {
  constructor(id, value, checked) {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();

    this.item = this.shadowRoot.querySelector('.item');
    this.checkbox = this.item.querySelector('input[type="checkbox"]');
    this.contentInput = this.item.querySelector('input[type="text"]');
    this.deleteButton = this.item.querySelector('.delete-item');

    this.id = id;
    this.contentInput.value = value;
    this.checkbox.checked = checked;

    if (checked) {
      this.contentInput.classList.add('done');
    }
  }

  connectedCallback() {
    const value = this.contentInput.value;

    this.contentInput.value = value ? value : 'TASK' + this.id;

    this.deleteButton.addEventListener('click', () => this.handleDelete());
    this.checkbox.addEventListener('click', () => this.handleToggleChecked());

    // focus를 벗어나는 순간 이벤트 실행
    this.contentInput.addEventListener('blur', () => this.handleUpdate());
    this.contentInput.addEventListener('keydown', (e) =>
      this.handleEnterPress(e)
    );

    s.AddTodoItem(this.id, this.contentInput.value, this.checkbox.checked);

    this.saveData();
  }

  handleEnterPress({ keyCode }) {
    if (keyCode === 13) {
      if (this.nextElementSibling !== null) {
        const next =
          this.nextElementSibling.shadowRoot.querySelector(
            'input[type="text"]'
          );

        // 현재 input의 포커스 벗어나기
        this.contentInput.blur();
        next.focus();
      } else {
        this.contentInput.blur();
      }
    }
  }

  handleUpdate() {
    s.UpdateTodoItem(this.id, this.contentInput.value);
    this.saveData();
  }

  handleDelete() {
    gsap.to(this, {
      scale: 0,
      // this 찾기
      callbackScope: this,
      // 애니메이션 동작 완료 후 실행
      onComplete() {
        this.remove();
        s.removeTodoItem(this.id);
        this.saveData();
      },
    });
  }

  handleToggleChecked() {
    if (this.checkbox.checked) {
      this.contentInput.classList.add('done');
    } else {
      this.contentInput.classList.remove('done');
    }

    s.CheckTodoItem(this.id, this.checkbox.checked);
    this.saveData();
  }

  saveData() {
    localStorage.setItem('todo', JSON.stringify(s.state));
  }

  render() {
    this.shadowRoot.append(TodoItemTemplate.content.cloneNode(true));
  }
}
