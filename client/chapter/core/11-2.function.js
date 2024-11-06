/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

// 함수는 값으로 취급된다.(일급함수)
// 함수를 선언하는 2가지 방법
// 함수 선언문
// 함수 표현식

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체 : arguments => 유사 배열 => 지역 변수

  let total = 0;
  //for문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  //for...of
  // for (const value of arguments) {
  //   total += value;
  // }

  // arguments.forEach()를 사용하기 위해 arguments => array로 변화시켜줌
  // const arr = [...arguments];  // spread syntax
  // const arr = Array.from(arguments); // 배열의 static method
  const arr = Array.prototype.slice.call(arguments); // Array의 slice() 프로퍼티를 빌려 사용하기 위해 call()을 사용 -> 배열의 instance method

  // array method
  // Array instance method => 배열만 사용할 수 있는 메서드
  // forEach => 배열을 순환 -> 값을 반환x
  arr.forEach(function (value, index, array) {
    // total += value;
  });

  // reduce => 배열을 순환 -> 값을 반환(문자, 숫자, 불린,..)
  arr.reduce(function (acc, cur, index) {
    // console.log(acc); // arr의 가장 첫번째 값을 acc에 넣어줌
    // console.log(cur); // arr에서 acc를 제외한 나머지 value를 넣어줌
    return acc + cur;
  }, 0);
  // reduce + arrow function
  // return arr.reduce((acc,cur)=> acc + cur);

  // map => 배열을 순환 -> 값을 반환(새로운 배열)
  const friends = ['A', 'B', 'C', 'D'];
  const f = friends.map(function (item, index, array) {
    return `<li data-order="${index + 1}">아이템: ${item}</li>`;
  });

  f.forEach(function (tag) {
    document.body.insertAdjacentHTML('beforeend', tag);
  });

  // arguments
  Array.prototype.forEach.call(arguments, function (price) {
    total += price;
  });

  // 던더: arguments의 prototype을 바꿈
  // [[Prototype]] 속성 부모를 바꿔치기
  // arguments.__proto__ = Array.prototype;

  console.log(total);
};

// forEach에서의 this
const obj = {
  total: null,
  item: [100, 200, 300],
  totalPrice() {
    // this.item.forEach(function (price) {
    //   this.total += price;
    // }, this);
    this.item.forEach((price) => {
      this.total += price;
    });
  },
};

obj.totalPrice();

const result = calculateTotal(10000, 30000, 45000, 2500, 30000, 25000);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let callbackFunctionExpression;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
