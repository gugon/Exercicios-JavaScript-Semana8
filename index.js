import "./styles/styles.css"
import "./scripts/exercicios1"
import "./scripts/destructuring"
import "./scripts/exercicio4"
import "./scripts/exercicio5"
import "./scripts/exercicio6"

import { soma, subtracao, multiplicacao, divisao,} from "./modules/operators"
import { addLeadingZeros, convert_to_cpf, currencyFormat, sortArray } from "./modules/util"


let botaoSoma = document.getElementById('btn-soma')
botaoSoma.addEventListener("click", () => {
  const numero1 = document.getElementById('soma-1').value
  const numero2 = document.getElementById('soma-2').value
  const resposta = soma(parseInt(numero1),parseInt(numero2))
  document.getElementById('id-lista-informacao-soma').innerText = resposta
})

let botaoSubtacao = document.getElementById('btn-sub')
botaoSubtacao.addEventListener("click", () => {
  const numero1 = document.getElementById('sub-1').value
  const numero2 = document.getElementById('sub-2').value
  const resposta = subtracao(parseInt(numero1),parseInt(numero2))
  document.getElementById('id-lista-informacao-sub').innerText = resposta
})

let botaoMultiplicacao = document.getElementById('btn-multi')
botaoMultiplicacao.addEventListener("click", () => {
  const numero1 = document.getElementById('multi-1').value
  const numero2 = document.getElementById('multi-2').value
  const resposta = multiplicacao(parseInt(numero1),parseInt(numero2))
  document.getElementById('id-lista-informacao-multi').innerText = resposta
})

let botaoDivisao = document.getElementById('btn-divisao')
botaoDivisao.addEventListener("click", () => {
  const numero1 = document.getElementById('divisao-1').value
  const numero2 = document.getElementById('divisao-2').value
  const resposta = divisao(parseInt(numero1),parseInt(numero2))
  document.getElementById('id-lista-informacao-divisao').innerText = resposta
})


                // #### FUNCOES utils ####

let botaoConversao = document.getElementById('btn-reais')
botaoConversao.addEventListener("click", () => {
  const resposta = currencyFormat( document.getElementById('id-reais').value)
  document.getElementById('id-lista-informacao-reais').innerText = resposta
})

let botaoAdiconaZero = document.getElementById('btn-addzeros')
botaoAdiconaZero.addEventListener("click", () => {
  const seqNumero = document.getElementById('id-addzeros-1').value
  const quantidadeCatacters = document.getElementById('id-addzeros-2').value
  const resposta = addLeadingZeros(seqNumero,quantidadeCatacters)
  document.getElementById('id-lista-informacao-addzeros').innerText = resposta
})

let botaoFormataCPF = document.getElementById('btn-cpf')
botaoFormataCPF.addEventListener("click", () => {
  const resposta = convert_to_cpf(document.getElementById('id-cpf').value)
  document.getElementById('id-lista-informacao-cpf').innerText = resposta})


let botaoSortArray = document.getElementById('btn-sort')
var respostaArray = new Array()
botaoSortArray.addEventListener("click", () => {
  const arrays = document.getElementById('id-sort-1').value
  const tipo = document.getElementById('id-sort-2').value
  console.log(arrays)
  console.log(tipo)
  respostaArray = sortArray(arrays,tipo)
  document.getElementById('id-lista-informacao-sort').innerText = respostaArray
})

