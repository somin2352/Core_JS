/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;

//명시적 변환
console.log(String(YEAR));
//암시적 변환
console.log(YEAR + '');

// undefined, null

let days = null;
console.log(days + '');

let undef = undefined;
console.log(undef + '');

// boolean

let isClicked = true;
console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined => NaN

let friend = undefined;
//명시적 변환
console.log(Number(friend));

// null => 0

let money = null;
//암시적 변환
console.log(friend / 1);

// boolean

let isActive = false; // true = 1, false = 0
console.log(isActive * 1);

// string

let num = '100';
console.log(+num);

// numeric string

const width = '120.5px';
//parseInt, parseFloat -> 숫자로 변환
console.log(parseFloat(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

//명시적 변환
console.log(Boolean(null)); //false
console.log('0'); //true

//암시적 변환
console.log(!!'0'); //true
console.log(!!{}); //true
console.log(!![]); //true

console.log(Boolean(() => {})); //true
