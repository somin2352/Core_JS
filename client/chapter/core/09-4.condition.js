/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환 -> null이나 undefined를 건너뜀

const width = '10px';
const isActive = false;

console.log(0 || width); //10px
console.log(0 ?? width); //0

console.log(undefined || width); //10px
console.log(undefined ?? width); //10px

console.log(isActive || width); //10px
console.log(isActive ?? width); //false

console.log('' || width); //10px
console.log('' ?? width); //''

// a ||= b -> a가 false일 때 b의 값을 a에 할당
// a &&= b -> a가 true일 때 b의 값을 a에 할당
// a ??= b -> a가 undefined, null일 때 b의 값을 a에 할당

// 1. 사용자(user) 상태를 회원과 비회원으로 나누고 회원인 경우에는 일반회원과 프리미엄 회원으로 나눔
// 2. 회원 등급에 따라 할인 규칙을 따름 -> 모든 사용자(회원과 비회원)는 첫 구매 시 5%할인이 적용되며, 일반회원은 두 번째 구매부터 10%할인이 적용됨, 프리미엄 회원은 항상 20%할인을 받음, 비회원은 두 번째 구매부터 할인을 받을 수 없음
// 3. 구매 금액이 2만원 이상일 경우, 추가로 5% 할인이 부여됨

function discountPrice(userState, count, price) {
  let discount = 0;

  if (count === 1) {
    discount += 5;
  }

  if (userState === '프리미엄 회원') {
    discount += 20;
  } else if (userState === '일반회원' && count > 1) {
    discount += 10;
  } else if (userState === '비회원' && count > 1) {
    discount += 0;
  }

  if (price >= 20000) {
    discount += 5;
  }

  console.log(discount);

  const totalPrice = (price = price * (discount * 0.01));

  return totalPrice;
}

discountPrice('프리미엄 회원', 1, 23500);
