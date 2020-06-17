var maquina;
var usuario;
var valor = {
  piedra: 1,
  papel: 2,
  tijera: 3,
};

function aleatorio() {
  return Math.floor(Math.random() * (3 + 1 - 1) + 1);
}

var dario = {
  nombre: "Dario",
  apellido: "Susnisky",
  edad: 27,
};

var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
};

function imprimirNombreYEdad(persona) {
  console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años`);
}



function validacionMayoriaDeEdad (persona) {
    console.log(persona.nombre + 'es: ')
    if(persona.edad >= 18) {
        console.log('mayor de edad')
    }
    else(persona.edad < 18) {
        console.log('menor de edad')
    }
}