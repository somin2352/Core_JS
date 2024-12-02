/* any & unknown */

// 문제: unknownValue 변수에 unknown 타입을 명시 후 아래와 같은 메서드가 실행될 수 있도록 만들어주세요

let unknownValue: unknown;

if (typeof unknownValue === "number") {
  unknownValue.toFixed(2);
}

if (typeof unknownValue === "string") {
  unknownValue.toUpperCase();
}

// instanceof
// 어디서부터 탄생했는지 -> 누구의 인스턴스인지
if (unknownValue instanceof Date) {
  unknownValue.getTime();
}

if (unknownValue instanceof HTMLElement) {
  unknownValue.nextElementSibling;
}
