/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const people = [
  {
    id: 0,
    name: 'MJ',
    age: 37,
    job: '음악하는 재미교포',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 1,
    name: '이성우',
    age: 13,
    job: '모집운동가',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/60.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 2,
    name: '윤헌주',
    age: 43,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
  {
    id: 3,
    name: '김미리',
    age: 36,
    job: '얼리버드',
    imgSrc: 'https://randomuser.me/api/portraits/med/women/30.jpg',
    imgAlt: '대체 텍스트입니다..',
  },
];

/* 요소 순환 ---------------------------- */

// forEach
people.forEach((user) => {
  // console.log(user.job);
});

// delegation ->  위임

// 클릭하면 스타일이 적용되는 함수를 forEach로 작성
const span = document.querySelectorAll('span');

span.forEach((elem, index) => {
  elem.addEventListener('click', function () {
    this.style.color = 'orange';

    console.log(index);
  });
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
const reverse = people.toReversed();
// splice
const splice = people.toSpliced(2, 1, { name: '선범' });
// sort
function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

const sort = people.sort(compare);

/* 새로운 배열 반환 ------------------------ */
// 원본을 훼손하지 않는 방식
// concat
// slice
// toSorted
// toReversed
// toSpliced
// map
const map = people.map((user) => user.job);

const age = people.map((user) => user.age + 2);

// 배열을 태그로 받아서 화면에 렌더링하는 함수
const cardTag = people.map((user) => {
  const template = /* html */ `
    <li class="userCard">
      <div>
        <img src=${user.imgSrc} alt=${user.imgAlt} />
      </div>
      <ul>
        <li> <span class="strong">이름</span> : ${user.name}</li>
        <li> <span class="strong">나이</span> : ${user.age}</li>
        <li> <span class="strong">직업</span> : ${user.job}</li>
      </ul>
    </li>
  `;

  return template;
});

const ul = document.querySelector('ul');
cardTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find -> 아이템 자체 하나만 반환
const mj = people.find((user) => {
  return user.age > 20;
});

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter -> 배열을 반환
const mz = people.filter((user) => {
  return user.age < 20;
});

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

const template = people.reduce((acc, cur) => {
  return acc + `<li class="userCard">${cur.name}, ${cur.age} ${cur.job}</li>`;
}, 0);

ul.insertAdjacentHTML('beforeend', template);

/* string ←→ array 변환 ------------------ */

// split
// join

const _arr = '강현/종국/세현/영현';

const stringToArray = _arr.split('/');
const arrayToString = stringToArray.join('/');

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

// forEach
// filter
// reduce
// map

const _forEach = (f, i) => {
  for (const a of i) {
    f(a);
  }
};

// 콜백함수가 f에 전달되어 실행
_forEach((item) => {
  console.log(item);
}, products);

// map은 배열로 반환되기 때문에 빈배열을 생성하여 push해줌
const _map = (f, i) => {
  const arr = [];
  for (const a of i) {
    arr.push(f(a));
  }
  return arr;
};

const newMap = _map((item) => {
  return item.price;
}, products);

const _filter = (f, i) => {
  const arr = [];
  for (const a of i) {
    if (f(a)) {
      //true
      arr.push(a);
    }
  }
  return arr;
};

// 콜백함수의 리턴값이 true | false가 나오기 때문에 true일 경우만 push 하도록 함
const product = _filter((item) => {
  return item.price < 15000;
}, products);

const _reduce = (f, acc, i) => {
  if (!i) {
    // i = acc;
    // acc = i.shift();
    i = acc[Symbol.iterator]();
    acc = i.next().value;
  }
  for (const a of i) {
    acc = f(acc, a);
  }
  return acc;
};

const t = _reduce(
  (acc, cur) => {
    return acc + cur.price;
  },
  0,
  products
);

const add = (a, b) => a + b;

console.log(
  _reduce(
    add,
    _map(
      (p) => p.price,
      _filter((p) => p.price < 20000, products)
    )
  )
);

// currying function

// reduce,
// add,
// map,
// filter,
// log(products)
