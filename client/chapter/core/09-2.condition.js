/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// logical AND assignment
// a = a && b
// a &&= b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// loical OR assignment
// a = a || b
// a ||= b;

// 부정 연산자
let reverseValue = value;
console.log(!reverseValue);

// 조건 처리
// 첫번째 Falsy를 찾는 연산 (&&)
// let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

console.clear();

//optional chaining ? -> uesr(password)가 null이면 뒤의 option을 실행하지 않음
// 함수는 return을 만나면 그 즉시 종료됨

function login() {
  let user = prompt("Who's there?");

  // if (!user) {
  //   return; //user가 null일 경우 그 즉시 함수 종료
  // }
  // if(user === null || user === undefined) return;

  if (user?.toLowerCase() === 'admin') {
    let password = prompt('Password?');

    if (password?.toLowerCase() === 'themaster') {
      console.log('환영합니다!');
    } else if (password === null) {
      console.log('취소되었습니다.');
    } else {
      console.log('인증에 실패하였습니다.');
      login(); //재귀
    }
  } // user.replaceAll(): 문자를 모두 찾아서 다른 값으로 대체
  // user.replace(Reg,'') -> user.replace(/\s*/g,'')
  else if (user === null || user.replaceAll(' ', '') === '') {
    console.log('취소되었습니다.');
  } else {
    console.log("I don't know you");
  }
}

login();
