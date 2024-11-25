import { getStorage, getNode, setStorage, deleteStorage } from './lib/index.js';

// 1. input event binding
// 2. input 값을 로컬 스토리지에 저장(타이핑하는 순간순간마다)
// 3. init 함수 안에서 로컬스토리지에 있는 값을 가져와 input의 value로 설정
// 4. 새로고침 -> 데이터 유지

const text = getNode('textarea');
const clear = getNode('button[data-name="clear"]');

// 새로고침을 해도 textarea 입력란에 데이터 유지
function init() {
  getStorage('text').then((res) => {
    text.value = res;
  });
}

// 로컬 스토리지에 입력값 저장
function handleInput() {
  setStorage('text', this.value);
}

// 로컬 스토리지의 데이터 삭제
function handleClear() {
  text.value = '';
  deleteStorage('text');
}

text.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);

init();
