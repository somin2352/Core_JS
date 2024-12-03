type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "tiger",
  age: 35,
};

function getProperty(obj: Person, key: keyof Person) {
  return obj[key];
}

getProperty(person, "name"); //tiger

// utility type
function validCssProperty<T extends keyof CSSStyleDeclaration>(prop: T): boolean {
  return prop in document.body.style;
  // return body[color]
}

validCssProperty("color"); // true

const product = {
  id: 1,
  name: "macbook",
  price: 300,
};

function setProperty<T, K extends keyof T>(product: T, key: K, value: T[K]): T {
  product[key] = value;
  return product;
}

setProperty(product, "price", 100); //{ id: 1, name: "macbook", price: 100 }

const products = [
  { name: "mac", price: 500 },
  { name: "iPhone", price: 300 },
  { name: "iPad", price: 300 },
];

function getProperties<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  return arr.map((item) => {
    return item[key];
  });
}

getProperties(products, "name"); //['mac','iPhone','iPad']
