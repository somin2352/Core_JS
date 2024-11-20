/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler(e) {
  console.log('hello');
}
// 2. DOM 프로퍼티 : element.onclick = handler
const about = getNode('.about');
const home = getNode('.home');

// about.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

// about.addEventListener('click', handler);

//const remove = bindEvent(about, 'click', handler);
//home.addEventListener('click', remove);

const ground = getNode('.ground');
const ball = getNode('.ball');

// 마우스의 이동에 따라 공 이미지가 움직이는 함수
function handleBall({ offsetX: x, offsetY: y }) {
  // 마우스의 상대적 위치 좌표
  // const x = e.offsetX;
  // const y = e.offsetY;
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  // ball 이미지에 중앙에 마우스가 위치하도록 값을 조정
  ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;
}

// 마우스의 자취대로 이모지를 그려주는 함수
function handleMove({ offsetX: x, offsetY: y }) {
  // const w = ball.offsetWidth;
  // const h = ball.offsetHeight;

  // ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;

  const templete = `<div class="emotion" style="top:${y}px; left:${x}px">⭐</div>`;

  // ground.insertAdjacentHTML('beforeend',templete);
  insertLast(ground, templete);
}

// ground.addEventListener('mousemove', handleMove);

// 타이핑 하나하나마다의 자취를 따라감
// const input = getNode('input');
// function handleInput() {
//   if (this.value === 'seonbeom@gmail.com') {
//   }
// }
// input.addEventListener('input', handleInput);

// debounce
// 앞의 반환값이 다음 값이 호출됨과 동시에 제거되므로 최종적으로 마지막 실행값만 반환됨
function handle(e) {
  console.log(e);
}
ground.addEventListener('mousemove', debounce(handle, 1000));

// closure
function debounce(callback, limit = 500) {
  let timeout;
  return function (e) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.call(this.e);
    }, limit);
  };
}

// throttle
// limit time마다 타이핑 값을 반환
// 물이 쫄쫄쫄 떨어지는것(?)같은 원리
function throttle(callback, limit = 500) {
  let wait = false;
  return function () {
    if (!wait) {
      callback();
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
}

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener
