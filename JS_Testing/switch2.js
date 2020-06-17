var signo = prompt("¿Cual es tu signo?");

switch (signo) {
  case "acuario":
    console.log("eres acuario");
    break;

  case "leo":
  case "Leo":
    console.log("eres leo");
    break;

  case "virgo":
    console.log("eres virgo");
    break;
  default:
    console.log("no es un dato valido");
    break;
}
