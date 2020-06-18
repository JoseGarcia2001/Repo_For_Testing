var jose = {
  nombre: "Jose",
  apellido: "Garcia",
  altura: 1.7,
  cantidadDeLibros: 30,
};

var anderson = {
  nombre: "Anderson",
  apellido: "Garcia",
  altura: 1.73,
  cantidadDeLibros: 50,
};

var sindy = {
  nombre: "Syndi",
  apellido: "Garcia",
  altura: 1.56,
  cantidadDeLibros: 74,
};

var javier = {
  nombre: "Javier",
  apellido: "Perez",
  altura: 1.67,
  cantidadDeLibros: 92,
};

var patricia = {
  nombre: "Patricia",
  apellido: "Giraldo",
  altura: 1.5,
  cantidadDeLibros: 23,
};

var personas = [jose, anderson, sindy, javier, patricia];

// var acum = 0;

// for (i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros;
// }

// console.log(acum);

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;
var totalDeLibros = personas.reduce(reducer, 0);

console.log(totalDeLibros);
