const { localStorage: storage } = window;

// storage.setItem('user', JSON.stringify({ name: 'tiger', age: 40 }));

// localStorage.setItem
export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (typeof key === 'string') {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject({ message: 'setStorage 함수의 첫번째 인수는 문자여야 합니다.' });
    }
  });
}

// setStorage('user', { name: 'tiger', age: 40 }).then(() => {
//   console.log('저장 완료');
// });

// localStorage.getItem
export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (typeof key === 'string') {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({ message: '해당 키가 존재하지 않습니다.' });
    }
  });
}

// const value = storage.getItem('user');
// console.log(JSON.parse(value));

// getStorage('user').then((res) => {
//   console.log(res.name);
// });

// localStorage.removeItem
export function deleteStorage(key) {
  return new Promise((resolve) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}

// deleteStorage('user');

//cookie
export function setCookieValue(name, value, days, path = '/') {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=${path}`;

  if (days) {
    const date = new Date();
    //days를 ms로 바꿈
    date.setTime(data.getTime() + days * 24 * 60 * 60 * 1000);
    // 표준시로 바꿈
    cookieString += `; expires=${date.toUTCString()}`;
  }

  document.cookie = cookieString;
}

export function getCookieValue(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${encodeURIComponent(name)}=`);

  console.log(parts);

  if (parts.length === 2) {
    return decodeURIComponent(parts.pop().split(';').shift());
  }
  return null;
}
