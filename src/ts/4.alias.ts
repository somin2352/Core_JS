// alias type

// type
type User = {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
};

type User1 = {
  address: string;
};

type mixed = User & User1;

const user1: User = {
  id: 1,
  name: "tiger",
  auth: "admin",
  isPaid: true,
};

// interface
interface _User {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}

// interface _User {
//   address: string
// }

const user2: _User = {
  id: 1,
  name: "tiger",
  auth: "admin",
  isPaid: true,
};

// index signature
// 객체의 키가 동적으로 결정될 때 사용 가능
type Person = {
  name: string;
  age: number;
  [key: string]: string | number;
};

const person: Person = {
  name: "beom",
  age: 30,
  email: "tiger@naver.com",
  address: "서울시 중랑구 ",
};
