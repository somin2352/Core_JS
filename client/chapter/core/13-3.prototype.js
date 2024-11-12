class Todo {
  constructor({ input, button, renderPlace }) {
    // 구조 분해 할당
    // obj.input, obj.button, obj.renderPlace -> input, button, renderPlace
    // const { input, button, renderPlace } = obj;

    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);
    this.todoListArray = []; //value값을 배열에 저장
    this.attatchEvent();
  }

  addTodoData() {
    this.todoListArray.push(this.currentInputTodoData);
  }

  get currentInputTodoData() {
    return this.input.value;
  }

  set currentInputTodoData(value) {
    this.input.value = value;
  }

  // 버튼에 이벤트를 등록
  createTag() {
    return `<li>${this.currentInputTodoData}</li>`;
  }

  render() {
    this.renderPlace.insertAdjacentHTML('beforeend', this.createTag());
    // 렌더링 후 입력란이 비도록 함
    this.input.value = '';
  }

  handleClick() {
    console.log(this.currentInputTodoData);
    this.render();
  }

  attatchEvent() {
    this.button.addEventListener('click', (e) => {
      this.handleClick();
      // 엔터 쳤을때 button submit type으로 인한 새로고침을 막음
      e.preventDefault();
      this.addTodoData();
    });
  }
}

const todo = new Todo({
  input: '.todo',
  button: '.btn',
  renderPlace: '.todoList',
});
