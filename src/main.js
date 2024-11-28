import { insertLast, getNode } from "kind-tiger";
import santa from "@/assets/santa.png";
import "@/style/style.css";
import { btn } from "@/style/style.module.css";

console.log(btn);

const app = getNode("#app");

const template = /* html */ `
  <figure class="container">
    <img style="width:30vw" src=${santa} />
    <figcaption>산타 모자를 쓴 호랑이</figcaption>
  </figure>
  <button type="button" class="${btn}">BUTTON</button>
`;

insertLast(app, template);
