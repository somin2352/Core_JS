// array type
let arr: number[] = [1, 2, 3];

let str: string[] = ["a", "b", "c"];

// generic type
// 타입 변수 -> 함수
let _arr: Array<number> = [1, 2, 3];
let _str: Array<string> = ["a", "b", "c"];

// union type
let multi: (string | number | boolean)[] = ["hello", 10, false];

// tuple type
// 길이 고정, 자리 지정
// 배열처럼 길이가 동적으로 변경되지 않음
let tupleA: [number, number] = [1, 2];

// 다차원 배열
const user: [string, number][] = [
  ["심선범", 30],
  ["심선범", 36],
  ["심선범", 48],
];
