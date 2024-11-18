const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = (t) => {
  t.style.height = 0;
};

function vanilla() {
  // depth의 top값 설정 요소
  depthList.forEach((depth) => {
    depth.style.top = header.offsetHeight + 'px';
  });

  aList.forEach((a) => {
    a.addEventListener('mouseenter', (e) => {
      // depth만 가져와 저장
      const currentDepth = e.currentTarget.lastElementChild;
      console.log(currentDepth);

      // 전체 depth의 높이를 모두 0으로 주고 이후에 mouseenter된 요소만 depth의 높이를 100px로 지정
      depthList.forEach((d) => (d.style.height = 0));

      currentDepth.style.height = '100px';
    });
  });

  // 마우스가 떨어질 때 depth의 높이를 0으로 함
  header.addEventListener('mouseleave', () => {
    depthList.forEach(h);
  });
}

/* global gsap */
gsap.set(depthList, { top: header.offsetHeight });

aList.forEach((a) => {
  const currentDepth = a.lastElementChild;

  const tl = gsap.timeline({ paused: true }).to(currentDepth, { height: 100 });

  a.addEventListener('mouseenter', () => tl.play());
  a.addEventListener('mouseleave', () => tl.reverse());
});
