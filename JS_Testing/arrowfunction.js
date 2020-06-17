var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
};

var juan = {
  nombre: "Juan",
  apellido: "Gomez",
  edad: 17,
};

const MAYORIA_DE_EDAD = 18;

// estas dos funciones son totalmente iguales
// const esMayorEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD;
// };

const esMayorEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

const esMenorEdad = ({ edad }) => edad < MAYORIA_DE_EDAD;

function imprimirMayorEdad(persona) {
  if (esMayorEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

function permitirAcceso(persona) {
  if (esMenorEdad(persona)) {
    console.log("ACCESO DENEGADO");
  } else {
    console.log("ACCESP PERMITIDO");
  }
}
