/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 15;

switch (a) {
  case 10:
    console.log('비교하려는 값보다 작습니다.');
    break;
  case 13:
    console.log('비교하려는 값보다 작습니다.');
    break;
  case 15:
    console.log('비교 값과 일치합니다.');
    break;
  case 20:
    console.log('비교하려는 값보다 큽니다.');
    break;
  default:
    console.log('어떤 값인지 파악이 되지 않았습니다.');
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LUNCH;

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
  default:
    console.log('알 수 없는 시간입니다.');
}

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} else {
  console.log('알 수 없는 시간입니다.');
}

/* switch vs. if -------------------------------------------------------- */
console.clear();

// prompt를 통해서 숫자를 입력받는다.(0~6)
// 받은 숫자를 사용해서 switch case문을 작성한다.
// 0: 일
// 1: 월
// 2: 화
// 3: 수
// 4: 목
// 5: 금
// 6: 토

// 함수는 하나의 기능만을 수행하는 것(클린코드)
// 함수는 재사용성을 고려해야함
// separation of concerns(관심사의 분리)

function getRandom(n) {
  //랜덤으로 0~7사이의 수를 출력하되 floor를 통해 소수점 내림 처리를 함
  // 0 <= value <= n-1
  const value = Math.floor(Math.random() * n);
  return value;
}

function getDay(num) {
  //switch case는 일치 비교를 하기 때문에 타입을 일치시키기 위해 prompt에서 받은 값을 숫자로 처리
  // const day = +prompt('숫자를 입력하세요.(0~6)', 0);

  switch (num) {
    case 0:
      return '일요일';
    case 1:
      return '월요일';
    case 2:
      return '화요일';
    case 3:
      return '수요일';
    case 4:
      return '목요일';
    case 5:
      return '금요일';
    case 6:
      return '토요일';
  }
}

// getDay(getRandom(7));

//getDay함수를 이용하여 주말인지 평일인지를 콘솔창에 보여주는 함수를 만들기
function weekend() {
  const today = getDay(getRandom(7));

  // if (today.includes('토요일') || today.includes('일요일')) {
  //   return `오늘은 ${today}이므로 주말입니다.`;
  // } else {
  //   return `오늘은 ${today}이므로 평일입니다.`;
  // }

  return today.includes('토요일') || today.includes('일요일')
    ? `오늘은 ${today}이므로 주말입니다.`
    : `오늘은 ${today}이므로 평일입니다.`;
}

const day = weekend();
