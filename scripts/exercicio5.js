async function pegaPoke(poke) {
  console.log(poke)
  const pokemon = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)).json()
  console.log(pokemon)
  for (const key in pokemon.stats) {
    console.log(pokemon.stats[key].stat.name)    
    const status = pokemon.stats[key].stat.name
    const baseState = pokemon.stats[key].base_stat
    const paragrafo = document.createElement('p')
    paragrafo.innerHTML = `${status}:${baseState}`
    document.getElementById('id-lista-informacao-pokemon').appendChild(paragrafo)
  }
}

let radio = document.getElementById('btn-5');
radio.addEventListener("click", () => {
  document.getElementById('id-lista-informacao-pokemon').innerText = "" //limpa div
  let pokemonEscolhido = document.querySelector('input[name="pokemon"]:checked').value;
  console.log(pokemonEscolhido)
  pegaPoke(pokemonEscolhido)
})

