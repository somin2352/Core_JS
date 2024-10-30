/* ------------------ */
/* Variables          */
/* ------------------ */

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
let calcproductPrice;

// - 구매 제품 가격의 총 합
let totalProductPrice;

// - 1년 기준 일(day)자 수
// 절대로 변화가 없을 상수는 대문자로 표기
const DAY_PER_YEAR = 365;

// - 구매 결제 여부
// boolean값은 보통 변수명에
// let is...
// let has...
let isPayment = true;

// - 구매 결제 내역
let paymentList;

// - 브랜드 접두사
const BRAND_PREFIX = 'Stussy';

// - 오늘의 운세
let todaysFortune;

// - 상품 정보
// 상수 productInfo
const productInfo = {
  name: '',
  price: '',
  info: '',
};

/* variables ----------------------------------------------------------- */

/* constant variables -------------------------------------------------- */

// 1번 과제
let admin, name;
name = 'John';
admin = name;
console.log(admin);

// 2번 과제
const planet = 'Earth';

console.log(planet);

let user = 'name';

user = 'somin';
console.log(user);
