const BASE_URL = "https://pokeapi.co/api/v2/pokemon/641";

export default async function getPokemon() {
  let response = await fetch(BASE_URL);
  let data = await response.json();
  return data;
}
