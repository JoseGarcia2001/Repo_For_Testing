const APIKEY = "b89fc45c2067cbd33560270639722eae";

async function obtenerPeliculas() {
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`;
  const data = await fetch(url);
  const movies = await data.json();
  return movies.results;
}

async function obtenerTopPeliculas(n = 3) {
  const movies = await obtenerPeliculas();
  const topMoviesIds = movies.slice(0, n).map((movie) => movie.id);
  return topMoviesIds;
}

async function obtenerPeliculaPorId(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`;
  const movies = await fetch(url);
  return movies.json();
}

function pintarPelicula(movies) {
  const listaPeliculas = document.getElementById("listMovies");
  listaPeliculas.innerHTML = "";

  movies.forEach((movie) => {
    const ItemDeLista = document.createElement("li");
    ItemDeLista.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}">
    <p>Intro: ${movie.overview}</p>
    <p>Fecha de lanzamiento: ${movie.release_date}</p>
    `;

    listaPeliculas.appendChild(ItemDeLista);
  });
}

async function peliculasEnSequencia() {
  const ids = await obtenerTopPeliculas();
  const movies = [];
  for (const id of ids) {
    const movie = await obtenerPeliculaPorId(id);
    movies.push(movie);
  }
  return movies;
}

async function peliculasEnParalelo() {
  const ids = await obtenerTopPeliculas();
  const moviesPromises = ids.map((id) => obtenerPeliculaPorId(id));
  const movies = await Promise.all(moviesPromises);
  return movies;
}

async function peliculaMasRapida() {
  const ids = await obtenerTopPeliculas();
  const moviesPromises = ids.map((id) => obtenerPeliculaPorId(id));
  const movies = await Promise.race(moviesPromises);
  return movies;
}

const sequenceButton = document.getElementById("sequence");
const parallelButton = document.getElementById("parallel");
const fastestButton = document.getElementById("fastest");

sequenceButton.onclick = async () => {
  const movies = await peliculasEnSequencia();

  pintarPelicula(movies);
};

parallelButton.onclick = async () => {
  const movies = await peliculasEnParalelo();

  pintarPelicula(movies);
};

fastestButton.onclick = async () => {
  const movie = await peliculaMasRapida();

  pintarPelicula([movie]);
};
