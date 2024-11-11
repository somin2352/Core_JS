/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.
// object literal -> function constructor -> class syntax

class Animal {
  // public class field
  legs = 4;
  tail = true;
  // private field
  #name = 'unknown';

  //최초 1회만 실행 -> 초기화
  constructor(name) {
    this.name = name;
    this.stomach = [];
    console.log(this.#name);
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

class Tiger extends Animal {
  constructor(name) {
    super(name); // Animal의 constructor를 call
    this.pattern = '호랑이무늬';
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  static bark(sound) {
    return sound;
  }
}

const a = new Animal('몽실이');
const 호랭 = new Tiger('호돌이');

//instance method vs static method
// const arr = new Array()

// arr.forEach()
// Array.isArray()

// class Array extends Object(){
//   forEach(){
//   }

//   reduce(){
//   }

//   static isArray(){
//   }
// }

/* 1. 버튼 클릭
   2. 클릭 이벤트
   3. 태그 만들기
   4. 태그 화면에 렌더링하기 */
class Button {
  constructor(selector) {
    this.button = document.querySelector(selector);
    this.count = 0;
    this.attachEvent();
  }

  createTag() {
    return `<div>${++this.count + 'click'}</div>`;
  }

  render() {
    document.body.insertAdjacentHTML('beforeend', this.createTag());
  }

  handleClick() {
    this.render();
  }

  attachEvent() {
    // console.log(this);

    // 메서드를 바로 전달하면 handleClick이 클릭 이벤트가 발생한 요소(button)에 바인딩됨 따라서 this가 더 이상 Button 인스턴스를 가리키지 않고 이벤트가 발생한 button요소를 가리킴 -> handleClick 내부에서 this.render()를 호출하려고 하면 TypeError
    // bind(this)를 사용하여 this.handleClick 메서드의 this가 항상 Button 인스턴스를 가리키도록 바인딩됨
    this.button.addEventListener('click', this.handleClick.bind(this));
    // this.button.addEventListener('click', () => this.handleClick());
  }
}

const button = new Button('.btn');

// const _button = document.querySelector('.btn');
// let count = 0;

// function createTag() {
//   return `<div>${++count + 'click'}</div>`;
// }
// function render(data) {
//   document.body.insertAdjacentHTML('beforeend', data);
// }

// function handleClick() {
//   render(createTag());
// }
// // event binding(attach event)
// _button.addEventListener('click', handleClick);

class User {
  #password;

  constructor(userId, userPW) {
    this.userId = userId;
    this.#password = this.hashPassword(userPW);
  }

  hashPassword(pw) {
    'hashCODE' + pw + '소금촵촵';
  }

  checkPassword(pw) {
    return this.#password === this.hashPassword(pw);
  }
}

const user = new User('tiger', 'hello123');
