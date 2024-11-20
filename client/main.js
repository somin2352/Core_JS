import {
  diceAnimation,
  getNodes,
  getNode,
  insertLast,
  attr,
  clearContents,
  endScroll,
  memo,
} from './lib/index.js';

// [주사위 굴리기 버튼을 누르면]
// 1. 주사위 굴리기 버튼 선택
// 2. 클릭 이벤트 바인딩

// [애니메이션 작동]
// 1. setInterval
// 2. diceAnimation()

// [같을 버튼을 눌렀을 때]
// 1. 상태 변수 true | false
// 2. 조건 처리

// [애니메이션 동작/정지]
// 1. setInterval
// 2. clearInterval ( scope )

// [기록 버튼을 누르면 table이 등장]
// 1. recordButton에 클릭 이벤트 바인딩

// [table이 등장]
// 1. recordListWrapper에 hidden 속성 제어하기(true | false)

// [table 안쪽에 tr 태그 렌더링]
// 1. 태그 만들기
// 2. insertLast 함수 사용하기 (tbody 안쪽에 랜더링)

// [table 안쪽에 tr 태그에 데이터를 넣고 렌더링]

// [item의 갯수가 많아짐에 따라 스크롤을 제일 하단으로 올 수 있도록]
// 1. scrollTop
// 2. scrollHeight

// [reset 버튼을 눌렀을 때 모든 항목 초기화]
// hidden
// 변수 초기화

// 구조 분해 할당
const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);
const recordListWrapper = getNode('.recordListWrapper');

// closure
// IFFE pattern
const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }
    isClicked = !isClicked;
  };
})();

let count = 0;
let total = 0;

function createItem(value) {
  const templete = `
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${(total += value)}</td>
  </tr>
  `;

  return templete;
}

function renderRecordItem() {
  const diceNumber = memo('cube').getAttribute('dice');

  insertLast('tbody', createItem(diceNumber));
}

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
  endScroll(recordListWrapper);
}

function handleReset() {
  recordListWrapper.hidden = true;
  clearContents('tbody');
  count = 0;
  total = 0;
}

// 함수가 리턴되므로 실행시킨 결과가 나오게 하기 위해서 한번 실행된 형태로 내보내줌
rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
