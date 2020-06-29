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
