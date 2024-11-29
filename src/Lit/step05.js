import { LitElement, html } from "lit";

class NameTag extends LitElement {
  static properties = {
    checked: { type: Boolean },
    value: { type: String },
  };

  constructor() {
    super();
    this.checked = false;
    this.value = "hello~";
  }

  setChecked(e) {
    this.checked = e.target.checked;
    console.log(this.checked);
  }

  render() {
    return html`
      <div>
        <input type="text" .value=${this.value} ?disabled=${this.checked} />
      </div>
      <label>
        <input type="checkbox" @change=${this.setChecked} />
      </label>
    `;
  }
}

customElements.define("name-tag", NameTag);
app.append(document.createElement("name-tag"));
