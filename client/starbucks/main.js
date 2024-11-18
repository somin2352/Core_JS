const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

// 초기 depth의 높이 설정 함수
const h = (t) => {
  t.style.height = 0;
};

function vanilla() {
  // depth의 top값 설정 요소
  depthList.forEach((depth) => {
    depth.style.top = header.offsetHeight + 'px';
  });

  aList.forEach((a) => {
    // 마우스를 가져가면 이벤트 실행
    a.addEventListener('mouseenter', (e) => {
      // aList의 마지막 자식 요소인 depth만 가져와 저장
      const currentDepth = e.currentTarget.lastElementChild;
      console.log(currentDepth);

      // 전체 depth의 높이를 모두 0으로 주고 이후에 mouseenter된 요소만 depth의 높이를 100px로 지정
      depthList.forEach((d) => (d.style.height = 0));
      // 이후 이벤트 실행 시 mouseenter된 요소만 높이 조정
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
  // 반대로 실행 -> 높이가 100px이었다가 0px이 되도록
  a.addEventListener('mouseleave', () => tl.reverse());
});
