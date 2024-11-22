import { getNode } from './../dom/getNode.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';
import { insertLast } from './../index.js';

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

/* ----------- async & await -------------- */
// async 함수는 무조건 promise object를 반환
// await의 2가지 기능
// 1. 코드 실행 흐름 제어
// 2. result 꺼내오기

async function d() {
  return 1;
}

const _d = d();

_d.then(console.log);

async function delayA() {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      resolve('성공');
    }, 2000);
  });
  const result = await p; // promise 실행 완료할 때까지 대기

  return result;
}

// console.log(delayA());

// promise .then
function _라면끓이기() {
  delayP({ data: '물' })
    .then((res) => {
      console.log(res);

      return delayP({ data: '스프' });
    })
    .then((res) => {
      console.log(res);

      return delayP({ data: '면' });
    })
    .then((res) => {
      console.log(res);

      return delayP({ data: '계란' });
    })
    .then((res) => {
      console.log(res);

      return delayP({ data: '그릇' });
    })
    .then((res) => {
      console.log(res);
    });
}

// async await
async function 라면끓이기() {
  const a = await delayP({ data: '물' });
  console.log(a);

  const b = await delayP({ data: '스프' });
  console.log(b);

  // const c = await delayP({data:'면'})
  console.log('면');

  // const d = await delayP({data:'계란'})
  console.log('계란');

  const e = await delayP({ data: '그릇' });
  console.log(e);
}

function _getData() {
  xhrPromise.get('https://pokeapi.co/api/v2/pokemon/7').then((res) => {
    console.log(res);

    insertLast(
      document.body,
      `<img src="${res.sprites.other.showdown['front_default']}" alt="" />`
    );
  });
}

async function getData() {
  const result = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/7');

  insertLast(
    document.body,
    `<img src="${result.sprites.other.showdown['front_default']}" alt="" />`
  );
}

getData();
