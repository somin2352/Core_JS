import data from './data/data.js';
import {
  getNode as $,
  insertLast,
  getRandom,
  clearContents,
  addClass,
  removeClass,
  showAlert,
  isNumericString,
  shake,
  copy,
} from './lib/index.js';

//[phase-1]
// 1. 주접떨기 버튼을 클릭하는 함수
// -주접 떨기 버튼 가져오기
// -이벤트 연결

// 2. input 값 가져오기
// - 콘솔에 출력

// 3. data 함수에서 주접 1개 꺼내기
// - n번째 랜덤 주접 꺼내기
// - Math.random()

// 4. result에 렌더링하기
// - insertLast()

// [phase-2]
// 5. 예외처리
// - 이름이 없을 경우 콘솔에 에러 출력
// - 숫자만 들어오면 콘솔에 에러 출력

const submit = $('#submit');
const nameField = $('#nameField');
const result = $('.result');

function handleSubmit(e) {
  e.preventDefault();
  const name = nameField.value;
  const list = data(name);
  const random = list[getRandom(list.length)];

  if (!name || name.replaceAll(' ', '') === '') {
    showAlert('.alert-error', '공백은 허용하지 않습니다.', 1200);
    // addClass(nameField, 'shake');
    shake(nameField);

    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '정확한 이름을 입력해 주세요', 1200);

    return;
  }
  clearContents(result);
  insertLast(result, random);
}

function handleCopy() {
  const text = this.textContent;
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!');
  });
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);
