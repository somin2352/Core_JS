const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete  => 성공 | 실패

function xhr({
  method = 'GET',
  url = '',
  success = null,
  fail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  // delete 메서드는 headers를 받지 않음
  if (method !== 'DELETE') {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  // readyState가 바뀔 때 동작
  xhr.addEventListener('readystatechange', () => {
    const { status, response, readyState } = xhr;

    // complete state
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);
        success(data);
      } else {
        fail({ message: '알 수 없는 오류가 발생했습니다.' });
      }
    }
  });
  // post 시 body에 값을 전달
  // xhr.send(JSON.stringify(body));
}

const obj = {
  name: 'tiger',
  age: 38,
};

// xhr({
//   method: 'DELETE',
//   url: END_POINT,
//   success: (data) => {
//     console.log(data);
//   },
//   fail: () => {},
// });

// get
xhr.get = (url, success, fail) => {
  xhr({
    url,
    success,
    fail,
  });
};

// post
xhr.post = (url, body, success, fail) => {
  xhr({
    method: 'POST',
    url,
    success,
    fail,
    body,
  });
};

// delete
xhr.delete = (url, success, fail) => {
  xhr({
    method: 'DELETE',
    url,
    success,
    fail,
  });
};

xhr.get(
  END_POINT,
  (data) => {
    // console.log(data);
  },
  () => {}
);

/* ------------- promise ------------  */

//mixin
// 기본값 설정
const defaultOption = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options = {}) {
  const config = {
    ...defaultOption,
    ...options,
    headers: { ...defaultOption.headers, ...options.headers }, //깊은 복사
  };

  const { method, url, body, errorMessage, headers } = config;

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  // method가 delete가 아닐 경우 headers의 정보를 배열 형태로 세팅
  if (method !== 'DELETE') {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  // body가 있으면 send, 없으면 null
  // xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(errorMessage);
        }
      }
    });
  });
}

xhrPromise({
  method: 'GET',
  url: END_POINT,
})
  .then((res) => {
    // console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// get
xhrPromise.get = (url) => {
  return xhrPromise({ url });
};

// post
xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'POST',
  });
};

// put
xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT',
  });
};

// delete
xhrPromise.post = (url) => {
  return xhrPromise({
    url,
    method: 'DELETE',
  });
};

// xhrPromise.get(END_POINT).then((res) => {
//   console.log(res);
// });

// xhrPromise
//   .post(END_POINT, {
//     name: 'tiger',
//     age: 35,
//   })
//   .then((res) => {
//     console.log(res);
//   });
