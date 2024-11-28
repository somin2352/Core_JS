import { TodoItem } from '../TodoItem/TodoItem.js';

const todoTemplate = document.createElement('template');

todoTemplate.innerHTML = `
<style>@import url("./components/TodoList/TodoList.css");</style>
  <div class="container">
    <h1>TODO LIST <img src="../assets/checklist.png" alt="체크리스트" /></h1>
    <ul class="todo"></ul>
    <button type="button" class="add-item"> + </button>
  </div>
`;

export class TodoList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.render();

    this.container = this.shadowRoot.querySelector('.container');
    this.todo = this.container.querySelector('.todo');
    this.addButton = this.container.querySelector('.add-item');
  }

  connectedCallback() {
    const tl = gsap.timeline();

    // h1에 애니메이션
    tl.from(this.container.children[0], { opacity: 0, y: 30 });

    // 리스트 요소에 애니메이션 추가
    // 높이 고정 문제를 해결하기 위해 애니메이션 종료 후 clearProps로 속성을 초기화
    tl.from(this.container.children[1], {
      opacity: 0,
      height: 0,
      clearProps: 'all',
    });

    // button 애니메이션
    tl.from(this.container.children[2], { opacity: 0, marginTop: 40 });

    this.addButton.addEventListener('click', () => this.handleAddClick());

    const data = JSON.parse(localStorage.getItem('todo'));

    data.forEach(({ id, value, checked }) => {
      const todoItem = new TodoItem(id, value, checked);
      this.todo.append(todoItem);
    });
  }

  handleAddClick() {
    // TodoItem이 생성자 함수이기 때문에 new를 사용해서 호출 가능
    const todoItem = new TodoItem(Date.now(), '', false);
    this.todo.append(todoItem);
  }

  // todoTemplate.content의 내용을 복제하여 Shadow DOM에 추가
  render() {
    this.shadowRoot.append(todoTemplate.content.cloneNode(true));
  }
}
