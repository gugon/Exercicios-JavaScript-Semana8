let prev = ''
let next = ''
urlInicial = 'https://rickandmortyapi.com/api/character'

async function procuraPersonagens(url) {
  const personagemAchado = await (await fetch(url)).json()
  console.log(personagemAchado)
  console.log(personagemAchado.info.pages)
  console.log(personagemAchado.info.prev)
  console.log(personagemAchado.results)
  for (const key in personagemAchado.results) {
    if (personagemAchado.results[key].status == "Alive") {
      const nome = personagemAchado.results[key].name
      const status = personagemAchado.results[key].status

      const nomeElement = document.createElement('td')
      const statusElement = document.createElement('td')
      const trElement = document.createElement("tr")

      nomeElement.innerHTML = `${nome}`
      statusElement.innerHTML = `${status}`

      trElement.appendChild(nomeElement)
      trElement.appendChild(statusElement)
      
      document.getElementById("id-table").appendChild(trElement)
    }
  }
  prev = personagemAchado.info.prev
  next = personagemAchado.info.next
}

document.getElementById('id-lista-informacao-pokemon').innerText = ""

let btnPesonagem = document.getElementById('btn-perso')

btnPesonagem.addEventListener("click", () => {
  document.getElementById('id-table').innerText = ""  
  procuraPersonagens(urlInicial)
})

let btnNext = document.getElementById('id-next')
btnNext.addEventListener("click", () => {
  document.getElementById('id-table').innerText = ""  
  next == null ? (alert('Não possui nenhuma informação'),0) : procuraPersonagens(next)
})

let btnPrev = document.getElementById('id-prev')
btnPrev.addEventListener("click", () => {
  document.getElementById('id-table').innerText = ""  
  prev == null ? (alert('Não possui nenhuma informação'),0) : procuraPersonagens(prev)
})

