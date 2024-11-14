/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

// const second = document.getElementsByClassName('second');
// const _second = document.querySelector('.second');

// console.log(second.parentElement); //h1
// console.log(second.parentElementSibling); //span.first
// console.log(second.nextElementSibling); //buton
// console.log(second.children);

// 1. nav 태그 요소
const nav = document.querySelectorAll('nav');

// 2. nav 태그 안에 잇는 about li 태그 요소
const about = nav.querySelector('.about');

// 3. data-name이 contact인 li 태그 요소
const contact = nav.querySelector('li[data-name="contact"]');
// 4. nav 요소 안에 있는 모든 자식 요소
const children = nav.querySelectorAll('*');
const _children = nav.children[0].children;

// _children을 배열로 만들고 li about을 찾아서 같은지 확인
const li = [..._children].find((li) => li.matches('.about'));
/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains
