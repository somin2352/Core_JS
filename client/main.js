// named export => import { } from '...'
//default export => import ... from '...'

// import { getNode as $ } from './lib/dom/getNode.js';
// import { insertLast } from './lib/dom/insert.js';
// import { clearContents } from './lib/dom/clearContents.js';

import {
  getNode as $,
  getNodes,
  insertLast,
  clearContents,
} from './lib/dom/index.js';

function phase1() {
  // 1. input 선택하기
  // 2. input 이벤트 바인딩
  // 3. input의 value 값 가져오기
  // 4. 숫자 더하기
  // 5. result에 출력하기

  /* global clearContents */

  const first = $('#firstNumber');
  const second = $('#secondNumber');
  const result = $('.result');

  function handleInput() {
    const firstValue = Number(first.value);
    const secondValue = +second.value;
    const total = firstValue + secondValue;

    result.textContent = '';
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    clearContents(first);
    clearContents(second);

    result.textContent = '-';
  }

  first.addEventListener('input', handleInput);
  second.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}

function phase2() {
  const calculator = $('calculator');
  const result = $('.result');
  const clear = $('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear')];

  function handleInput() {
    const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    numberInputs.forEach(clearContents);
    //numberInputs.forEach((input)=>{clearContents(input)})
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}
