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

    // checked = true일 경우 '.done' 추가 
    if (checked) {
      this.contentInput.classList.add('done');
    }
  }

  // 컴포넌트가 DOM에 추가될 때 호출되는 콜백 메서드
  connectedCallback() {
    const value = this.contentInput.value;

    // content.value에 value가 없으면 기본값으로 'TASK' + this.id를 제공
    this.contentInput.value = value ? value : 'TASK' + this.id;

    this.deleteButton.addEventListener('click', () => this.handleDelete());
    this.checkbox.addEventListener('click', () => this.handleToggleChecked());

    // focus를 벗어나는 순간 이벤트 실행
    this.contentInput.addEventListener('blur', () => this.handleUpdate());
    this.contentInput.addEventListener('keydown', (e) =>
      this.handleEnterPress(e) // 이벤트 감지 필요 
    );

    // 처음 렌더링될 때 state에 상태 넣어주기 
    s.AddTodoItem(this.id, this.contentInput.value, this.checkbox.checked);

    this.saveData();
  }

  handleEnterPress({ keyCode }) {
    // keyCode = 13 -> enter 입력 시 
    if (keyCode === 13) {
      // 다음 li 요소가 존재할 경우 
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
    s.UpdateTodoItem(this.id, this.contentInput.value); //state에서 value 상태 업데이트 
    this.saveData(); // 로컬 스토리지에 변동사항 저장 
  }

  handleDelete() {
    gsap.to(this, {
      scale: 0,
      // this 찾기
      callbackScope: this,
      // 애니메이션 동작 완료 후 실행
      onComplete() {
        this.remove();
        s.removeTodoItem(this.id); // state에서 삭제 
        this.saveData(); // 로컬 스토리지에 변동사항 저장 
      },
    });
  }

  handleToggleChecked() {
    if (this.checkbox.checked) {
      this.contentInput.classList.add('done');
    } else {
      this.contentInput.classList.remove('done');
    }

    // state에 checked 상태 업데이트 
    s.CheckTodoItem(this.id, this.checkbox.checked);
    // 로컬 스토리지에 변동사항 저장 
    this.saveData();
  }

  saveData() {
    localStorage.setItem('todo', JSON.stringify(s.state));
  }

  render() {
    this.shadowRoot.append(TodoItemTemplate.content.cloneNode(true));
  }
}
