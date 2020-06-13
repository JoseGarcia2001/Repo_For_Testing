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
