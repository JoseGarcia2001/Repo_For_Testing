function newFunction(name, age, country) {
  name = name || "Jose";
  age = age || 18;
  country = country || "COL";
}

// ec6
function newFunction2(name = "Jose", age = 18, country = "Col") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Anibal", 23, "MX");

console.log(`lorem 
holi`);

let persona = {
  nombre: "Jose",
  age: 18,
  country: "Colombia",
};

console.log(persona.nombre, persona.age, persona.country);

let { nombre, age, country } = persona;

console.log(nombre, age, country);

let frutas1 = ["pera", "papaya", "manzana"];
let frutas2 = ["mango", "banano", "kiwi"];
let comboFrutas = ["pitaya", ...frutas1, ...frutas2];

console.log(comboFrutas);

let name = "Jose";
let age = "18";

var jose = {
  name: name,
  age: age,
};

var jose2 = {
  name,
  age,
};

const descripcionJose = () => {
  console.log(jose);
  console.log(jose2);
};

descripcionJose();

const firstPromise = () => {
  return new Promise((resolve, reject) => {
    if (0) {
      resolve("Correcto");
    } else {
      reject("rayos, está mal");
    }
  });
};

firstPromise()
  .then((response) => console.log(`Lo lograste!, esto es ${response}`))
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

import { buenas } from "./module";

console.log(valor);

function* helloWorld() {
  if (true) {
    yield "Hello";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
