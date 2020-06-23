$.get("https://swapi.dev/api/people/1", { crossDomain: true }, function (
  personaje
) {
  console.log(`Hola!, yo soy ${personaje.name} y estoy vivooo`);
});
