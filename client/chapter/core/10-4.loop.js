/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

Object.prototype.nickName = 'tiger'; //Object에 접근해서 추가했기 때문에 'nickName' in javaScript가 true가 됨

'toString' in javaScript; //true -> 조상까지 찾기 때문에

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고있는지(has) 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickName'));
// Object.hasOwn
console.log(Object.hasOwn(javaScript, 'creator'));

console.clear();

// in문은 하나만 조회, for ... in문은 여러 개 조회

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// 객체의 key를 조회
// 객체의 value를 조회

for (const key in javaScript) {
  // javaScript 원본에 key가 있다면
  if (Object.hasOwn(javaScript, key)) {
    const value = javaScript[key];

    console.log(value);
  }
}

console.clear();
// - 배열 객체 순환에 사용할 경우?
// 배열도 for...in문으로 순환이 가능은 하나, 배열의 순서를 보장하지 못함(배열은 순서가 중요한 경우가 많기 때문에 잘 사용하지 않음)
// for...in문은 객체에 주로 사용하기

const tens = [10, 100, 1000, 10_000];

for (const key in tens) {
  //console.log(tens[key]);
}

for (const key in javaScript) {
  console.log(key);
}

// 객체를 밖에서 정의
const obj = {};

obj.nickName = 'tiger';

Object.defineProperty(obj, 'age', {
  value: 30,
  enumerable: true, //루프에서 열거가 가능하도록
  writable: false, // 변경 불가능
  configurable: false, // 프로퍼티 삭제 및 속성 변경 불가능
});

Object.defineProperties(obj, {
  age: {
    value: 30,
    enumerable: true,
    writable: false,
    configurable: false,
  },
  email: {},
});

console.log(obj);

for (const key in obj) {
  console.log(key);
}
