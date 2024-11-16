/* -------------------- */
/* DOM Styling          */
/* -------------------- */

const nav = getNode('nav');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

console.log(nav.className); //getter

nav.className = 'navigation'; //setter

nav.classList.add('hello');
nav.classList.remove('hello');
nav.classList.contains('navigation'); //true

nav.classList.toggle('is-active'); // 다시 입력시 꺼짐

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

// nav.style.background = 'dodgerblue';

// nav.style.cssTxt = `color:white; paddind:1rem; background:black;`;

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// console.log(getComputedStyle(nav).backgroundColor);

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
