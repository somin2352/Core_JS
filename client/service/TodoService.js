export class TodoService {
  static state = []; 

  // state 초기화
  static initializeState(state) {
    this.state = state;
  }

  // todoItem을 추가할 때 state에 저장
  static AddTodoItem(id, value, checked) {
    this.state.push({ id, value, checked });
    console.log(...this.state);
  }

  // todoItem을 삭제할 때 state에서 해당 id를 찾아서 제거 
  static removeTodoItem(id) {
    this.state = this.state.filter((t) => t.id !== id);
    console.log(...this.state);
  }

  // todoItem의 checked 여부를 업데이트
  static CheckTodoItem(id, checked) {
    const t = this.state.find((t) => t.id === id);
    t.checked = checked;
    console.log(...this.state);
  }

  // todoItem의 value값을 state에 업데이트 
  static UpdateTodoItem(id, value) {
    const t = this.state.find((t) => t.id === id);
    t.value = value;
    console.log(...this.state);
  }
}
