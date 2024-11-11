/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// Object Litertal
const animal = {
  legs: 4,
  tail: true,
  stomatch: [],
  // getter
  get eat() {
    return this.stomatch;
  },
  // setter
  set eat(food) {
    this.stomatch = [];
    this.stomatch.push(food);
  },
};

const tiger = {
  pattern: 'stripe',
  hunt(target) {
    this.prey = target;
    this.eat = this.prey;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  name: '백돌이',
  color: 'white',
  __proto__: tiger,
};

const 한라산호랑이 = {
  name: '한돌이',
  color: 'orange',
  __proto__: tiger,
};

// 생성자 함수(Object constructor function)

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.getEat = function () {
    // nullish 연산 -> this.stomatch가 없으면 빈배열 반환
    return this.stomatch ?? [];
  };
  this.setEat = function (food) {
    this.stomatch = [];
    this.stomatch.push(food);
  };
}

// const a = new Animal();

function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = 'stripe';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에 조용히 접근한다.`;
  };
}

// Tiger.prototype = a;

const 금강산호랑이 = new Tiger('금순이');

// 함수의 기능들
//call -> 함수를 대신 실행시켜줌 -> 빌려쓰기 -> 인수: 값
// apply -> 함수를 대신 실행시켜줌 -> 빌려쓰기 -> 인수: 배열
// bind -> 함수를 대신 실행x -> 빌려쓰기

function sum(a, b) {
  console.log(this, a + b);
}

sum.call('안녕', 1, 2);
sum.apply('안녕', [1, 2]);

const _sum = sum.bind('안녕', 10, 20);
