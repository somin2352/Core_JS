// void type

function sayHi(): string {
  return "hello";
}

// return값이 없으므로 void
function printHi(): void {
  console.log("hello");
}

// never type
// 존재하지 않는 불가능한 타입 / 어떤 값도 정의할 수 없는 타입
function showError(message: string): never {
  throw new Error(message);
}

showError("해당 함수는 에러가 발생했습니다.");

function loop(): never {
  while (true) {
    // ...
  }
}

/*
  Generator<T,R,P>
  T: yield 반환되는 값의 타입
  R: 함수에서 반환하는 값의 타입
  P:  next() 메서드에서 전달되는 값의 타입 
*/
