const poke_container = document.getElementById("pokedex-container");
let pokemons_number_min = 1;
let pokemons_number_limit = 151;
const colors = {
  fire: "#EE8130",
  grass: "#7AC74C",
  electric: "#F7D02C",
  water: "#6390F0",
  ground: "#E2BF65",
  rock: "#B6A136",
  poison: "#A33EA1",
  bug: "#A6B91A",
  dragon: "#6F35FC",
  psychic: "#F95587",
  flying: "#A98FF3",
  fighting: "#C22E28",
  normal: "#A8A77A",
  ice: "#96D9D6",
  ghost: "#735797",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const fetchPokemons = async () => {
  poke_container.innerHTML = "";
  for (let i = pokemons_number_min; i <= pokemons_number_limit; i++) {
    await getPokemon(i);
  }
};

function updatePokemonNumber() {
  const input1 = document.getElementById("pokemon-number-limit");
  const input2 = document.getElementById("pokemon-number-min");
  pokemons_number_min = parseInt(input2.value);
  pokemons_number_limit = parseInt(input1.value); // Update the pokemons_number value
  fetchPokemons(); // Re-fetch pokemons with the updated number
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, "0");
  const poke_types = pokemon.types.map((type) => type.type.name);
  const type1 = poke_types[0];
  let type2;
  if (poke_types.length > 1) {
    type2 = poke_types[1];
  } else {
    type2 = ""; // or any default value you want to assign
  }
  const color1 = colors[type1];
  const color2 = colors[type2];
  const type2Span = type2
    ? `<span class="type2" style="background-color: ${color2};">${type2}</span>`
    : "";

  if (color1 && color2) {
    pokemonEl.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  } else {
    pokemonEl.style.backgroundColor = color1; // Fallback to a single color
  }

  const pokemonInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="">
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span class="type1" style="background-color: ${color1};">${type1}</span>${type2Span}</small>
        </div>
    `;

  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
