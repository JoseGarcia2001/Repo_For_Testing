const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`Hubo un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`el personaje 1 es ${personaje.name}`);
  })

  .catch(onError);
