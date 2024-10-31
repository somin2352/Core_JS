/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태

let a = undefined;
console.log(typeof a);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const double = 'hello'; // string literal
const single = 'hello';
const backtick = `hello ${double}`;

console.log(backtick);

console.log(typeof double, typeof single, typeof backtick);

// string constructor function
const str = new String('hello');

// 4. 정수, 부동 소수점 숫자(길이 제약)

const intNum = 10; //number literal
const floatNum = 11.567;

const num = new Number(23); //number constructor function

console.log(typeof intNum);

console.log(floatNum);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 123n;

console.log(typeof bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)

let isTrue = 10 > 5;
console.log(typeof isTrue);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = {
  name: 'tiger',
  age: 42,
};

console.log(typeof obj);

// 8. 고유한 식별자(unique identifier)
//symbol은 값이 동일하지 않음
const uuid = Symbol('uuid');
const uuid2 = Symbol('uuid');

console.log(uuid === uuid2);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object(객체)

// 객체에 메서드를 정의하는 방법

// 1.normal function
// 2.arrow function(화살표 함수)
// 3.concise method(축약 함수)

// this: 나를 호출한 대상

// arrow function은 this를 바인딩하지 않음 (상위 컨텍스트에서 this를 찾음)

// 객체의 메서드를 정의할 때 => concise method 사용 권장
// 메서드 안에서 함수를 정의해야 할 때 => arrow function 사용 권장 -> this를 찾기 위해서

const user = {
  name: 'tiger', //key: value -> property
  age: 42,
  SayHi: function () {
    console.log('this');
  },
  SayHi2: () => {
    console.log('method');
  },
  SayHi3() {
    const sayBye = () => {
      console.log((this.age = 30));
    };
    sayBye();
  },
};

// Array

// function

// this
