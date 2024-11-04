/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

let n = 0;
while (n <= 10) {
  n++;

  if (n % 2 == 0) {
    console.log(n);
  } else if (n % 2 != 0) {
    continue;
  }
}

for (let num = 1; num <= 10; num++) {
  if (num % 2 == 0) {
    console.log('num:', num);
  } else if (num % 2 != 0) {
    continue;
  }
}

console.clear();

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

// while (i < l) {
//   console.log(frontEndDev[i]);
//   i += 1;
// }

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

while (i < l) {
  if (frontEndDev[i] !== 'SVG' && frontEndDev[i] !== 'jQuery') {
    console.log(frontEndDev[i]);
  }
  i++; // 반복마다 i 증가
}

// for (i = 0; i < l; i++) {
//   const value = frontEndDev[i];
//   const lower = value.toLowerCase();

//   if (lower.includes('jquery') || lower.includes('svg')) continue;

//   //if(lower.includes('jquery')) break;

//   console.log(value);
// }

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

for (let i = 0; i < l; i++) {
  // console.log(frontEndDev.pop());
}

for (let i = l, subject; (subject = frontEndDev[--i]); ) {
  // console.log(subject);
}
