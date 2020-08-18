const input = document.getElementById("search");

async function getPokemon(id) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const pokemon = await data.json();
  return pokemon;
}

async function printPokemon(id) {
  const dataPokemon = await getPokemon(id);
  const pokemonName = dataPokemon.name;
  const pokemonImage = dataPokemon.sprites.other.dream_world.front_default;
  window.pokemon_name.textContent = pokemonName;
  window.pokemon_image.setAttribute("src", pokemonImage);
}

input.addEventListener("change", async () => {
  await printPokemon(input.value);
});
