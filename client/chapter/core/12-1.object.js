/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: '10000',
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uuid: crypto.randomUUID(),
  name: 'somin',
  email: 'somin2352@naver.com',
  isSignIn: false,
  permission: 'paid', // paid | free
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// getter
console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission);

// setter
console.log((authUser.permission = 'free'));

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// getter
console.log(authUser['uuid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);
console.log(authUser['permission']);

// setter
console.log((authUser['permission'] = 'paid'));

const keys = Object.keys(authUser);

function getPropetyKey(obj) {
  let arr = [];
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(key);
    }
  }
  return arr;
}
getPropetyKey(authUser);

const values = Object.values(authUser);

function getPropetyValue(obj) {
  let arr = [];
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
getPropetyValue(authUser);

const entries = Object.entries(authUser);

function getPropety(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(key, obj[key]);
    }
  }
  return arr;
}
getPropety(authUser);

console.clear();

// 프로퍼티 제거 or 삭제
// 제거(remove): 값만 비우기 or 삭제(delete): 메모리 날려 완전히 없애기
function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  }
}
removeProperty(authUser, 'uuid'); //authUser.uuid = null;

function deleteProperty(obj, key) {
  if (isObject(obj)) {
    delete obj[key];
  }
}
deleteProperty(authUser, 'uuid');

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  };
}

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
// 순서를 바꿀 수는 없음(배열은 순서가 중요)
// 변수명은 자유롭게 바꿀 수 있음
const arr = [10, 100, 1000, 10000];

// const [, , a3] = arr;

// rest
// const [a1, ...rest] = arr;

// 기본값 설정
const [a1, a2, a3, a4, a5 = 100_000] = arr;

const [first, second] = document.querySelector('span');

console.log(first);
console.log(second);

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
