/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// 함수 선언
function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

function calcPrice(
  priceA,
  priceB = getRandomValue(),
  priceC = getRandomValue(),
  priceD = getRandomValue()
) {
  // if(priceD === undefined) priceD=0;
  // if (!priceD) priceD = 0;
  // priceD ||= 0;
  // priceD ??= 100;
  // if (priceA === undefined) throw new Error('Error!');
  return priceA + priceB + priceC + priceD;
}

// 함수 호출
const result = calcPrice();

// console.log(result);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

// 1. 함수는 하나의 기능만을 수행해야 한다.
// 2. 함수는 재사용성이 좋아야 한다.
// 3. 함수는 기능을 알 수 있는 이름을 지어야 한다.(가독성)
// 4. 함수는 인자를 많이 사용하지 않아야 한다.(최대 4~5개)

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function rem(pxValue, base = 16) {
  let num = parseInt(pxValue, 10); // 10진수 형태로 나오도록 설정
  // if (typeof pxValue === 'string') {
  //   pxValue = parseInt(pxValue, 10);
  // }
  if (!pxValue || typeof base === 'string') throw new Error('Error');
  let result = num / base;
  return result + 'rem';
}

console.assert(rem(20) === '1.25rem'); //console.assert(): 해당 값이 true일 경우 에러가 사라짐
console.assert(rem('25px') === '1.5625rem');
console.assert(rem('30px', 10) === '3rem');

// css(node: string, prop: string, value: number|strung) : string;

function setCss(node, prop, value) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  // prop이 유효한 css 속성이 맞는지를 확인하는 코드
  if (!(prop in document.body.style)) {
    throw new Error('is not a style property!');
  }
  if (!value) throw new Error('Error!');

  let cssStyle = (node.style[prop] = value); // prop은 변수값이기 때문에 []으로 표기 -> 객체의 2가지 연산 표기법(.연산, [대괄호] 연산)
  return cssStyle;
}

setCss('.first', 'background', 'red');

function getCss(node, prop) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }
  if (!(prop in document.body.style)) {
    throw new Error('is not a style property!');
  }

  let getStyle = getComputedStyle(node)[prop];
  return getStyle;
}

const fontSize = getCss('.first', 'font-size');
console.log(fontSize);

function css(node, prop, value) {
  if (value) {
    setCss(node, prop, value);
  } else {
    return getCss(node, prop);
  }

  // return value ? setCss(node, prop, value) : getCss(node, prop);
}

// 화살표 함수
// const _css = (node, prop, value) =>
//   !value ? getCss(node, prop) : setCss(node, prop, value);

css('.first', 'color'); //getter
css('.first', 'color', 'blue'); //setter

// 1. function name
// 2. arguments (함수 실행부)
// 3. parameter
// 4. return value
// 5. validation
// 6. Test Driven Development(TDD)

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
