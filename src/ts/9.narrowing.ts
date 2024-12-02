type Cat = {
  name: string;
  age: number;
};

function f(x: number | string | Date | Cat) {
  //타입 정제
  if (typeof x === "string") {
    x.toUpperCase();
  } else if (typeof x === "number") {
    x.toFixed();
  } else if (x instanceof Date) {
    x.getTime();
  }
  // 특정 키 값이 x에 포함되어 있는지 확인하여 판단
  else if ("age" in x) {
    console.log(x.age);
  }
}
