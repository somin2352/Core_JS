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

function handleBall({ offsetX: x, offsetY: y }) {
  // const x = e.offsetX;
  // const y = e.offsetY;
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;
}

function handleMove({ offsetX: x, offsetY: y }) {
  // const w = ball.offsetWidth;
  // const h = ball.offsetHeight;

  // ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;

  const templete = `<div class="emotion" style="top:${y}px; left:${x}px">⭐</div>`;

  insertLast(ground, templete);
}

// ground.addEventListener('mousemove', handleMove);

// const input = getNode('input');
// function handleInput() {
//   if (this.value === 'seonbeom@gmail.com') {
//   }
// }
// input.addEventListener('input', handleInput);

function handle(e) {
  console.log(e);
}
ground.addEventListener('mousemove', debounce(handle, 1000));

// debounce
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
