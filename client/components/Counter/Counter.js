export class Counter extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.state = {
      // 문자로 들어올 경우 숫자로 변환
      value: +this.getAttribute('data-value') || 0,
    };

    this.render();
  }

  static get observedAttributes() {
    return ['data-value'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-value') {
      this.state.value = +newValue;
      this.render();
    }
  }

  handleIncrement() {
    this.state.value += 1;
    // 'data-value'에 state.value값 넣기
    this.dataset.value = this.state.value;
  }
  handleDecrement() {
    this.state.value -= 1;
    this.dataset.value = this.state.value;
  }

  // 이벤트 위임
  delegationEvent() {
    this.shadowRoot.addEventListener('click', (e) => {
      const target = e.target.closest('button');

      if (!target) return;

      if (target.classList.contains('increment')) {
        this.handleIncrement();
      } else {
        this.handleDecrement();
      }
    });
  }

  render() {
    const { value } = this.state;

    this.shadowRoot.innerHTML = `
      <style>@import url('./components/Counter/Counter.css');</style>
      <div class="counter">
        <button type="button" class="decrement" aria-label="감소 버튼"> - </button>
        <span>${value}</span>
        <button type="button" class="increment" aria-label="증가 버튼"> + </button>
        
      </div>
    `;
  }
}
