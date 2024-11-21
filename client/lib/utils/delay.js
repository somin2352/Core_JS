import { getNode } from './../dom/getNode.js';
import { isNumber, isObject } from './type.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}
// 콟백함수 사용 시 콜백지옥이 생기게 됨
// const first = getNode('.first');
// const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';

//   delay(() => {
//     first.style.transform = 'rotate(360deg)';

//     delay(() => {
//       first.style.top = '0px';
//     });
//   });
// });

const shouldRejected = false;

const p = new Promise((성공, 실패) => {
  if (!shouldRejected) {
    성공('success');
  } else {
    실패('fail');
  }
});

p.then((res) => {
  // console.log(res);
});

// 기본 값 설정
const defaultOption = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

// promise 객체를 반환하는 함수 => 재사용
function delayP(options) {
  let config = { ...defaultOption };

  // options 값으로 숫자를 받을 경우 timeout에 덮어쓰기
  if (isNumber(options)) {
    config.timeout = options;
  }

  // options 값으로 객체를 받을 경우 config 믹스인으로 재정의
  if (isObject(options)) {
    config = { ...defaultOption, ...options };
  }

  const { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

delayP({
  timeout: 2000,
});

// delayP(false)
//   .then((res) => {
//     first.style.top = '-100px';
//     return delayP(false);
//   })
//   .then((res) => {
//     first.style.transform = 'rotate(360deg)';
//     return delayP(false);
//   })
//   .then((res) => {
//     first.style.top = '0px';
//     return delayP(false);
//   });
