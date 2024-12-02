// generic type

function sumFunc<T>(value: T): T {
  return value;
}

const a = sumFunc(10);
const b = sumFunc("halo");
const c = sumFunc(false);

/*
  T: Type
  U: Unknown | Unique | Util
  K: Key
  V: Value
  E: Element
  R: Return
*/

function swapAtoB<T, U>(a: T, b: U): (T | U)[] {
  return [b, a];
}

swapAtoB(1, true); // [true,1];

function getLength<T extends { length: number }>(data: T): number {
  return data.length;
}

const b1 = getLength([1, 2, 3]); // 3
const b2 = getLength("hi"); // 2
const b3 = getLength({ name: "tiger", length: 3 }); // 2
