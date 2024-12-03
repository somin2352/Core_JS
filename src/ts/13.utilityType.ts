// Omit -> 생략 적용
type User = {
  id: number;
  name: string;
  email: string;
};

type PublicUser = Omit<User, "email">;

const user: PublicUser = {
  id: 1,
  name: "tiger",
};

// Pick -> 선택 적용
const user2: Pick<User, "id" | "name"> = {
  id: 2,
  name: "beom",
};

// Partial -> 부분 적용
type Address = {
  lat: number;
  long: number;
};

type User3 = {
  id: number;
  name?: string;
  email: string;
  address: Address;
};

const user3: Partial<User3> = {
  name: "seon",
};

// Readonly -> 읽기 전용
type User4 = {
  id: number;
  name: string;
  email: string;
};

const user4: Readonly<User4> = {
  id: 1,
  name: "tiger",
  email: "tiger@naver.com",
};

// Required -> 필수 입력
const user5: Required<User3> = {
  id: 1,
  name: "tiger",
  email: "tiger@naver.com",
  address: {
    lat: 20,
    long: 33.5,
  },
};

type ShallowPartial<T> = {
  [K in keyof T]?: T[K];
};

const user6: ShallowPartial<User3> = {
  name: "tiger",
  address: {
    lat: 20,
    long: 33.5,
  },
};
