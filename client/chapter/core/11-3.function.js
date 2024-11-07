/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
// rest parameter -> 배열
let calcAllMoney = (...rest) => {
  console.log(rest);

  let total = 0;
  // for문 total
  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }

  // for...of문 total
  for (const value of rest) {
    total += value;
  }

  //forEach
  rest.forEach((price) => {
    total += price;
  }); // 화살표 함수는 매개변수가 하나이면 괄호를 생략 가능

  //reduce
  // 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 함
  return rest.reduce((acc, cur) => acc + cur, 0); // reduce는 꼭 return으로 반환해주어야 함
};

let _calcAllMoney = (...rest) => rest.reduce((acc, cur) => acc + cur, 0);

const result = calcAllMoney(10000, 30000, 50000);
console.log(result);

// 화살표 함수와 this

// 나를 호출한 대상에 따라 this가 달라짐 -> 일반 함수
function a() {
  console.log(this);
}

// 실행 환경에 따라 this가 달라짐 -> 화살표 함수
// arrow function은 this를 바인딩하지 않음
const b = () => {
  console.log(this); // 화살표 함수에서는 스코프 체인잉이 일이나 상위 요소에서 this를 찾음
};

// 자바스크립트 함수의 두 가지 역할 => 일반 함수, 생성자 함수(함수명을 대문자로 표기 -> new 사용하여 호출)
function Button(text, state) {
  this.content = text;
  this.state = state;
}

const __a = new Button('more', 'default');
const search = new Button('search', 'hover');

// 일반함수
// - constructor 내장 (concise method 예외)
// - this : 나를 호출한 대상 this
// - 객체의 메서드로 많이 사용됨 -> this를 찾기 위해

// 화살표 함수
// - constructor 비내장(성능 최적화)
// - this: 바인딩 하지 않음 -> 상위 컨텐츠에서 찾음
// - 메서드 안의 함수를 작성해야 하는 경우 -> 내 상위 this를 찾기 위해

const user = {
  name: 'hye',
  total: 0,
  grades: [50, 70, 40],
  totalGrades() {
    // 화살표 함수
    this.grades.forEach((g) => {
      this.total += g;
    });

    // 화살표 함수 축약형
    // this.grades.forEach(g => this.total += g)

    // 화살표 함수 축약형 + reduce 값을 바로 내보내는
    // this.total = this.grades.reduce((acc,cur) => acc + cur)

    return this.total;
  },
};

user.totalGrades();
/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric, powerCount) => {
//   let total = 1;

//   for (let i = 0; i < powerCount; i++) {
//     total = total * numeric;
//   }
//   return total;
// };

// console.log(pow(2, 53));

let pow = (numeric, powerCount) => {
  let total = 1;
  // Array(powerCount).fill(null).forEach(()=>{
  //   total *= numeric
  // })

  Array(powerCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);
};

// repeat(text: string, repeatCount: number): string;
// let repeat = (text, repeatCount) => {
//   let result = '';
//   for (let i = 0; i < repeatCount; i++) {
//     result += text;
//   }
//   return result;
// };

let repeat = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, '');

console.log(repeat('배고파', 3));
