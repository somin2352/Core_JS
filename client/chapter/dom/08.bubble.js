/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */
const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  // console.log('%c section', 'color:dodgerblue');
  console.log('target:', e.target);
  console.log('currentTarget:', e.currentTarget);
  console.log(this);
});

// article.addEventListener('click', () => {
//   console.log('%c article', 'color:hotpink');
// });

// p.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('%c p', 'color:orange');
// });

/* 캡처링 ----------------------------------------------------------------- */
