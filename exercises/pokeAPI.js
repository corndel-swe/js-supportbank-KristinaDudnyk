export async function getPokemonList() {
  const link = 'https://pokeapi.co/api/v2/pokemon'
  const response = await fetch(link)

  const data = await response.json()
  const pNames = data.results.map((pokemon) => pokemon.name)
  console.log(pNames)
  return pNames
}
getPokemonList()
