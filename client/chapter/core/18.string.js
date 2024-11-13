/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice();

// 부분 문자열 추출
let slice = message.slice(3, -1);
let subString = message.substring(2, 5);
// let subStr = message.subStr();

// 문자열 포함 여부 확인
// 값이 존재하면 양수, 존재하지 않으면 음수
let indexOf = message.indexOf('is');

// 어느 브라우저에 접속중인지를 반환하는 함수
function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  function checkBrowser() {
    const agent = window.navigator.userAgent.toLowerCase();
    let browserName;

    switch (true) {
      case agent.indexOf('edg') > -1:
        browserName = 'MS Edge';
        break;
      case agent.indexOf('chrome') > -1 && !!window.chrome:
        browserName = 'Chrome';
        break;
      case agent.indexOf('safari') > -1:
        browserName = 'Apple Safari';
        break;
      case agent.indexOf('firefox') > -1:
        browserName = 'FireFox';
        break;
      case agent.indexOf('trident') > -1:
        browserName = 'IE';
        break;
      default:
        browserName = '무슨 브라우저에요..?';
    }

    return browserName;
  }
}
let lastIndexOf;
let includes = message.includes('Less');
let startsWith = message.startsWith('less');
let endsWith = message.endsWith('more');

// let str '     a              b           c d             ';
// 공백 잘라내기
let trimLeft = str.trimLeft();
let trimRight;
let trim = str.trim();
let replaceAll = str.replaceAll(' ', '');
let replace = str.replace(/\s*/g, '');

// 텍스트 반복
let repeat = message.repeat(3);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  // /(\s|-|_)+./g -> 여기서 걸러진 모든 문자가 $1로 들어감
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
