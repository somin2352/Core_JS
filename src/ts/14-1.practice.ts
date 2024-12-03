import { Main } from "./type";

const END_POINT = "https://pokeapi.co/api/v2/pokemon/3";

async function fetchData(url: string): Promise<Main> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function createCard(data: Main) {
  const tag = `
    <div class="card">
      <img src='${data.sprites["front_default"]}' alt='' />
      <h2>${data.name}</h2>
    </div>
  `;
  return tag;
}

function renderCard(target: Element, data: Main) {
  target.insertAdjacentHTML("beforeend", createCard(data));
}

async function render() {
  const data = await fetchData(END_POINT);
  renderCard(document.body, data);
}

//render();

function fetchPokemon() {
  const arr: Promise<Main>[] = [];

  // 길이가 10인 배열을 생성하여 1~10의 포켓몬 데이터를 저장
  Array(10)
    .fill(null)
    .forEach((_, i) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
      arr.push(fetch(url).then((res) => res.json()));
    });

  return arr;
}

async function createPokemonObject(arr: Promise<Main>[]) {
  let pokemon: unknown;

  // Promise.all()을 사용해 모든 Promise를 실행하고 결과를 기다림
  await Promise.all(arr).then((all) => {
    // 각 데이터를 이름과 이미지만 가지는 배열로 재가공
    pokemon = all.map((item) => ({
      name: item.name,
      image: item.sprites["front_default"],
    }));
  });

  return pokemon;
}

async function renderPokemon() {
  const data = fetchPokemon();

  const p = await createPokemonObject(data);

  if (Array.isArray(p)) {
    const tag = p
      .map(
        (item) => `
      <li class='card'>
        <img src='${item.image}' alt=''/>
        <h2>${item.name}</h2>
      </li>
    `
      )
      .join(""); // 배열의 모든 요소를 하나의 문자열로 결합

    // <ul> 태그에 대한 DOM 타입을 단언
    const ul = document.querySelector("ul") as HTMLUListElement;
    ul.insertAdjacentHTML("beforeend", tag);
  }
}

renderPokemon();
