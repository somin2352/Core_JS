import {
  insertLast,
  som,
  getNode,
  renderUserCard,
  changeColor,
  renderLoadingSpinner,
  delayP,
  renderEmptyCard,
} from './lib/index.js';

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const userCardInner = getNode('.user-card-inner');

// user 데이터 fetch
async function renderUserList() {
  // 데이터 호출 전에 스피너를 보여줌
  renderLoadingSpinner(userCardInner);

  try {
    const response = await som.get(END_POINT);

    // 데이터 불러오기를 완료하면 로딩 스피너 제거
    // getNode('.loadingSpinner').remove();

    // 로딩 스피너를 부드럽게 사라지게 하기 위한 애니메이션
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        this._targets[0].remove();
      },
    });

    const data = response.data;

    // delay를 주어서 아래 코드의 렌더링을 늦춤
    await delayP(500);

    // fetch 데이터 유저의 이름만 콘솔에 출력
    data.forEach((user) => renderUserCard(userCardInner, user));

    // 카드 컴포넌트에 색상 주기
    changeColor('.user-card');

    // 카드 컴포넌트 렌더링 애니메이션
    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: 0.1,
    });
  } catch {
    // 실제 에러가 발생 후 empty 카드가 렌더링
    renderEmptyCard(userCardInner);
    throw new Error('error@');
  }
}

renderUserList();

// delete 이벤트
// userCardInner에 이벤트를 주고 이벤트 위임
function handleDeleteCard(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const article = button.parentElement;

  // id값만 뽑아내기
  const index = article.dataset.index.slice(5);

  // handler를 비동기로 만들지 않기 때문에 promise then으로 작성
  som.delete(`${END_POINT}/${index}`).then(() => {
    alert('complete delete!');
  });
}

userCardInner.addEventListener('click', handleDeleteCard);
