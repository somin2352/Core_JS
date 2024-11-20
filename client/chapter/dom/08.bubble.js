/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */
const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  // console.log('%c section','color:dodgerblue');

  console.log('target : ', e.target); //p
  console.log('currentTarget : ', e.currentTarget); //section
});

// article.addEventListener('click', () => {
//   console.log('%c article', 'color:hotpink');
// });

// p.addEventListener('click', (e) => {
//   e.stopPropagation(); // 부모의 클릭 이벤트가 실행되는 것을 방지
//   console.log('%c p', 'color:orange');
// });

/* 캡처링 ----------------------------------------------------------------- */
