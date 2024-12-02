// union type 합집합

let str: "name" | "age" | "address";

// str = 'address'

type CompanyA = {
  companyName: string;
  since: number;
};

type CompanyB = {
  ceo: string;
};
// intersection type 교집합
type Company = CompanyA & CompanyB;

// union type 합집합
type _Company = CompanyA | CompanyB;

// 확장을 통한 추가
interface CompanyC extends CompanyA {
  ceo: string;
}

const company1: Company = {
  companyName: "8b-studio",
  since: 2022,
  ceo: "kindtiger",
};

const company2: Company = {
  companyName: "apple",
  ceo: "steve",
  since: 2010,
};
