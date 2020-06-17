var jose = {
  nombre: "Jose",
  apellido: "Garcia",
  edad: 28,
  peso: 60,
};

console.log(`Al inicio del año ${jose.nombre} pesa ${jose.peso}kg`);

const VARIA_PESO = 0.2;
const DIAS_DEL_AÑO = 365;
const PESO_IDEAL = jose.peso - 3;

const aumentarDePeso = (persona) => (persona.peso += VARIA_PESO);
const adelgazarDePeso = (persona) => (persona.peso -= VARIA_PESO);

const comeMucho () => Math.random() < 0.25
const haceEjercicio () => Math.random() < 0.5

// for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
//   var random = Math.random();

//   if (random < 0.25) {
//     aumentarDePeso(jose);
//   } else if (random < 0.5) {
//     adelgazarDePeso(jose);
//   }
// }

// console.log(`Al final del año ${jose.nombre} pesa ${jose.peso.toFixed(1)}kg`);

while (peso.jose > PESO_IDEAL) {
  if(comeMucho()) {
    aumentarDePeso(jose)
  }
  if(haceEjercicio()) {
    adelgazarDePeso(jose)
  }
}