class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(fn) {
    var { nombre, apellido } = this;
    // var nombre = this.nombre;
    // var apellido = this.apellido;
    console.log(`Hola!, me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre, apellido);
    }
  }

  soyAlto() {
    if (this.altura > esAlta) {
      console.log(`Soy una persona alta :D`);
    } else {
      console.log(`Soy un pitufo we :(`);
    }
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saludar(fn) {
    // var nombre = this.nombre;
    // var apellido = this.apellido;
    var { nombre, apellido } = this;
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrolador`);
    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}

const esAlta = 1.6;

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Pero bueeno ${nombre} me alegro de que seas desarrolador/a`);
  }
}

var jose = new Persona("Jose", "Garcia", 1.64);
var patricia = new Persona("Patricia", "Giraldo", 1.51);
var sindy = new Desarrollador("Sindy", "Garcia", 1.55);
var anderson = new Desarrollador("Anderson", "Garcia", 1.67);

jose.saludar(responderSaludo);
patricia.saludar();
sindy.saludar(responderSaludo);
anderson.saludar();
