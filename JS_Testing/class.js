function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

const esAlta = 1.6;

Persona.prototype.saludar = function () {
  console.log(`Hola!, me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.soyAlto = function () {
  if (this.altura > esAlta) {
    console.log(`Soy una persona alta :D`);
  } else {
    console.log(`Soy un pitufo we :(`);
  }
};

var jose = new Persona("Jose", "Garcia", 1.64);
var patricia = new Persona("Patricia", "Giraldo", 1.51);
var sindy = new Persona("Sindy", "Garcia", 1.55);
var anderson = new Persona("Anderson", "Garcia", 1.67);
