const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// promise 안에 result 안에 response 객체가 반환
// const response = await fetch(END_POINT, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ name: 'som', age: 22 }),
// });

// json 매서드를 이용해서 데이터를 result로 갖고 있는 promise를 반환하고 await를 통해 result(data)를 반환
// const data = await response.json();
// console.log(data);

const defaultOption = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

// 화살표 함수에서 async
export const som = async (options) => {
  const { url, ...rest } = {
    ...defaultOption,
    ...options,
    headers: {
      ...defaultOption.headers,
      ...options.headers,
    },
  };

  // response 객체 반환
  const response = await fetch(url, rest);

  // response의 ok 상태가 true일 때 response의 데이터 반환
  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

// const response = await som({ url: END_POINT });

som.get = (url, options) => {
  return som({
    url,
    ...options,
  });
};

som.post = (url, body, options) => {
  return som({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

som.put = (url, body, options) => {
  return som({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

som.patch = (url, body, options) => {
  return som({
    method: 'PATCH',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

som.delete = (url, options) => {
  return som({
    method: 'DELETE',
    url,
    ...options,
  });
};
