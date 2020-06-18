var jose = {
  nombre: "Jose",
  apellido: "Garcia",
  altura: 1.7,
};

var anderson = {
  nombre: "Anderson",
  apellido: "Garcia",
  altura: 1.73,
};

var sindy = {
  nombre: "Syndi",
  apellido: "Garcia",
  altura: 1.56,
};

var javier = {
  nombre: "Javier",
  apellido: "Perez",
  altura: 1.67,
};

var patricia = {
  nombre: "Patricia",
  apellido: "Giraldo",
  altura: 1.5,
};

var personas = [jose, anderson, sindy, javier, patricia];

const esAlta = ({ altura }) => altura > 1.6;
const esBaja = ({ altura }) => altura < 1.6;

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

// console.log(personasAltas);
// console.log(personasBajas);

// for (var i = 0; i < personas.length; i++) {
//   console.log(`Hola! ${personas[i].nombre} mides ${personas[i].altura}`);
// }

const pasarAlturacms = (persona) => ({
  ...persona,
  altura: persona.altura * 100,
});

var personasCms = personas.map(pasarAlturacms);

console.log(personasCms);
