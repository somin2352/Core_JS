import { 
  som, 
  delayP,
  getNode,
  insertLast, 
  changeColor,
  clearContents,
  renderLoadingSpinner,
  renderUserCard,
  renderEmptyCard,
 } from "./lib/index.js";



const END_POINT = 'http://localhost:3000/users'
const userCardInner = getNode('.user-card-inner');




async function renderUserList(){

  renderLoadingSpinner(userCardInner)

  try{

    const response = await som.get(END_POINT);

    // getNode('.loadingSpinner').remove()

    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        this._targets[0].remove() //애니메이션 완료 후 제거 
      }
    })

    const data = response.data;
  
    
    await delayP(1000)
  
    
    data.forEach((user)=> {
      
      renderUserCard(userCardInner,user)
    })
  
    changeColor('.user-card');
  
    gsap.from('.user-card',{
      x:-100,
      opacity:0,
      stagger:{
        each:0.1,
        from:'start'
      }
    })
  
  
  }
  catch{
    // 데이터 로드 실패 시 빈 상태 카드 렌더링 
    renderEmptyCard(userCardInner)
    
  }

}


renderUserList()

// 카드 삭제 함수 
function handleDeleteCard(e){
  const button = e.target.closest('button');

  if(!button) return;

  const article = button.parentElement;
  const index = article.dataset.index.slice(5);
  
  // delete 요청 시 뒤에 index를 추가하여 삭제할 요소 구분
  som.delete(`${END_POINT}/${index}`).then(()=>{
    alert('삭제가 완료됐습니다.')


    // 기존 카드 컨텐츠 제거 
    clearContents(userCardInner)
    renderUserList() //삭제 후 리스트 재렌더링 
  })

}



userCardInner.addEventListener('click',handleDeleteCard)




const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');

// create 버튼을 선택한다.
// 클릭 이벤트를 바인딩한다.
// create에 open 클래스를 추가한다.

// cancel 버튼을 선택한다.
// 클릭 이벤트를 바인딩한다.
// create에 open 클래스를 제거한다.


// POST 통신을 해주세요.

// 1. input의 value를 가져온다.
// 2. value를 모아서 객체를 생성
// 3. 생성 버튼을 누르면 POST통신을 한다.
// 4. body에 생성한 객체를 실어보낸다.
// 5. 카드 컨텐츠 비우기
// 6. 유저카드 리랜더링

const nameField = getNode('#nameField');

// 생성 버튼 클릭 이벤트 
function handleCreate(){
  gsap.to('.pop',{autoAlpha:1})
  // this.classList.add('open');
  // getNode('#nameField').focus()
  
}

// 취소 버튼 클릭 이벤트 
function handleCancel(e){
  // 이벤트 버블링 방지 
  e.stopPropagation(); 
  // createButton.classList.remove('open');
  gsap.to('.pop',{autoAlpha:0})
}

// 완료 버튼 클릭 이벤트 
function handleDone(e){
  e.preventDefault();

  const username = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  
  som.post(END_POINT,{ username, email, website })
  .then(()=>{
    // createButton.classList.remove('open');
    gsap.to('.pop',{autoAlpha:0})

    // 기존 카드 제거하고 재렌더링
    clearContents(userCardInner) 
    renderUserList(); 

    // input창 초기화 
    getNode('#nameField').value = ''
    getNode('#emailField').value = ''
    getNode('#siteField').value = ''
    
  })
  
}


createButton.addEventListener('click',handleCreate)
cancelButton.addEventListener('click',handleCancel)
doneButton.addEventListener('click',handleDone)