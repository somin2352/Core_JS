export class Button extends HTMLElement {
  // 최초 1회 실행
  constructor() {
    super();
    //shaow DOM을 동작시키기 위해서 열어주어야 함
    this.attachShadow({ mode: 'open' });

    // 상태는 렌더링되기 이전에 생성해줘야 함
    this.state = {
      active: this.getAttribute('active') || false,
    };

    this.render();
  }

  // 상태값 관찰
  static get observedAttributes() {
    return ['active'];
  }

  // 상태값이 변경됨에 따라 실행
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'active') {
      this.state.active = newValue === 'true';
      this.render();
    }
  }

  // 클릭 이벤트 바인딩
  handleClick() {
    const newActiveState = !this.state.active;
    this.setAttribute('active', newActiveState);
  }

  render() {
    // 상태값을 구조 분해 할당으로 가져옴
    const { active } = this.state;

    // html 렌더링
    this.shadowRoot.innerHTML = `
    <style>@import url('./components/Button/Button.css'); button{background-color: ${active ? 'orange' : '#ff7272'}}</style>
    <button 
      type="button",
      aria-pressed=${active},
      aria-label="${active ? '활성화' : '비활성화'}"
    >
      ${active ? '🐯' : '❌'}
    </button>
  `;
    // 렌더링될 떄마다 이벤트를 다시 바인딩
    this.shadowRoot
      .querySelector('button')
      .addEventListener('click', this.handleClick.bind(this));
  }
}
