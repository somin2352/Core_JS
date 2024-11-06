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
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (condition, success, fail) {
  if (condition)
    success(); // const success = function(){ console.log('성공입니다!')}
  else fail(); // const fail = function(){ console.log('실패입니다!')}
};

callbackFunctionExpression(
  true,
  function () {
    console.log('성공입니다!');
  },
  function () {
    console.log('실패입니다!');
  }
);

// arrow function
callbackFunctionExpression(
  true,
  () => console.log('성공입니다!'),
  () => console.log('실패입니다!')
);

function movePage(url, success, fail) {
  if (url.includes('https')) {
    success(url);
  } else {
    fail();
  }
}

movePage(
  'https://www.daume.net',
  function (url) {
    console.log(
      `현재 입력하신 url은 ${url} 입니다. 3초 뒤 해당 사이트로 이동합니다.`
    );
  },
  function () {
    console.log('잘못된 경로를 입력하셨습니다!');
  }
);

// arrow function
movePage(
  'https://www.daum.net',
  (url) => `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`,
  () => console.log('잘못된 경로를 입력하셨습니다.')
);

// 비동기 통신일 때, 데이터를 받아오는 시간이 걸리는 것을 고려하여 콜백함수를 사용
function getGeolocation(success, fail) {
  navigator.geolocation.getCurrentPosition((so) => {
    success(so.coords.latitude);
  });
}

getGeolocation(
  (data) => {
    console.log(data);
  },
  () => {}
);

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
// 함수가 선언됨과 동시에 실행되는 것을 말합니다.
// var는 함수 스코프 o (블록 스코프 x)
// encapsulation(캡슐화)
const MASTER = (function (g) {
  console.log(g);

  var uuid = 'asdf';
  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})(window);

// 모듈 프로그래밍 -> import export
