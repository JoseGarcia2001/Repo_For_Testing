var contador = 0;

const lluve = () => Math.random() < 0.25;

do {
  contador++;
} while (!lluve());

var cantidad;

function cantidadVeces() {
  if (contador > 1) {
    cantidad = "veces";
  } else {
    cantidad = "vez";
  }
}

cantidadVeces();

console.log(`fui a ver si llovia ${contador} ${cantidad}`);
