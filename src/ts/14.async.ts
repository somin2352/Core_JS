import { _User } from "./type";

const defaultOptions = {
  timeout: 1000,
  condition: true,
  data: { name: "tiger", age: 20 },
};

type User = {
  name: string;
  age: number;
};

type Options = {
  timeout: number;
  condition: boolean;
  data: User;
};

function delayP(options: Partial<Options>): Promise<User> {
  const { condition, data, timeout } = { ...defaultOptions, ...options };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condition) {
        resolve(data);
      } else {
        reject();
      }
    }, timeout);
  });
}

const END_POINT = "https://jsonplaceholder.typicode.com/users";

async function fetchData(url: string): Promise<_User> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const data = await fetchData(END_POINT);

function render(target: Element | HTMLBodyElement = document.body, data: _User): void {
  if (Array.isArray(data)) {
    data.forEach((item) => {
      target.insertAdjacentHTML("beforeend", `<li>${item.name}</li>`);
    });
  }
}

render(document.body, data);
