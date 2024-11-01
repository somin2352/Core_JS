/* ---------------- */
/* Condition        */
/* ---------------- */

// const answer = prompt("자바스크립트의 '공식' 이름은 무엇일까요?");
// if (answer === 'ECMAScript') {
//   alert('정답입니다!');
// } else {
//   alert('모르셨나요? 정답은 ECMAScript입니다!');
// }

// const num = prompt('숫자를 입력하세요.', 0);
// if (num > 0) {
//   alert(1);
// } else if (num < 0) {
//   alert(-1);
// } else if (num == 0) {
//   alert(0);
// }

// let a,b;
// let result = a + b < 4 ? '미만' : '이상';

let login;
let message =
  login == '직원'
    ? '안녕하세요.'
    : login == '임원'
      ? '환영합니다.'
      : login == ''
        ? '로그인이 필요합니다.'
        : '';

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// confirm(): 확인창
function watchingMovie() {
  let didWatchMovie = confirm('그 영화 봤니?');

  if (didWatchMovie) {
    alert('good!');
  } else {
    let goingToWatchMovie = confirm('영화 볼거니?');

    if (goingToWatchMovie) {
      let withWho = prompt('누구랑 갈거야?');
      console.log(withWho);

      if (withWho == 'you') {
        console.log('좋아!');
      } else {
        console.log('그렇구나,,');
      }
    } else {
      console.log('알겠어!');
    }
  }
}

// 영화 볼거니?

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
//include(): 문자열 안에 뭔자가 있는지 확인

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const answer = didWatchMovie.includes('yes')
  ? 'ok'
  : goingToWatchMovie.includes('yes')
    ? console.log('good!')
    : 'ok';

function render(node, isActive) {
  // 조건부 랜더링
  let template = `
    <div>${isActive ? '안녕' : '잘가'}</div>
  `;

  node.insertAdjacentHTML('beforeend', template);
}
