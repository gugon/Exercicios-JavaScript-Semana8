const cidade = document.createElement('p')
const rua = document.createElement('p')
const estado = document.createElement('p')

let element = document.getElementById('btn-4')
element.addEventListener("click", () => {
  document.getElementById('id-lista-informacao').innerText = "" //limpa div
  let meuCep = document.getElementById('inputCep').value
  pegaCep(meuCep)

})
async function pegaCep(cepp) {
  console.log(cepp)
  const cep = await (await fetch(`https://brasilapi.com.br/api/cep/v2/${cepp}`)).json()
  console.log(cep)
  for (const key in cep) {
    const paragrafo = document.createElement('p')
    paragrafo.innerHTML = cep[key]
    document.getElementById('id-lista-informacao').appendChild(paragrafo)
  }

}