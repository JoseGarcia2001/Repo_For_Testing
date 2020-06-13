// var numero = 1;

// switch (numero) {
//   case 1:
//     console.log("Soy uno!");
//     break;

//   case 10:
//     console.log("Soy un diez!");
//     break;

//   default:
//     console.log("No soy nada");
// }

var maquina;
var usuario;
var valor = {
  piedra: 1,
  papel: 2,
  tijera: 3,
};

function aleatorio() {
  return Math.floor(Math.random() * 3 + 1);
}

function juega(usuario) {
  maquina = aleatorio();

  switch (usuario) {
    case 1:
      if (maquina == 1) {
        console.log("Empate ambos sacaron piedra");
      } else if (maquina == 2) {
        console.log("Perdiste la la maquina sacó papel");
      } else if (maquina == 3) {
        console.log("Ganaste la maquina sacó tijeras");
      }
      break;

    case 2:
      if (maquina == 1) {
        console.log("Ganaste la maquina sacó piedra");
      } else if (maquina == 2) {
        console.log("Empate ambos sacaron papel");
      } else if (maquina == 3) {
        console.log("Perdiste la maquina sacó tijeras");
      }
      break;

    case 3:
      if (maquina == 1) {
        console.log("Perdiste la maquina sacó piedra");
      } else if (maquina == 2) {
        console.log("Ganaste la maquina sacó papel");
      } else if (maquina == 3) {
        console.log("Empate ambos sacaron tijeras");
      }
      break;
    default:
      console.log("No elegiste un valor valido");
  }
}
