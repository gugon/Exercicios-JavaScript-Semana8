// -----------------------------------------------------------------------------
// ----------------------------------- Função 3 --------------------------------
// -----------------------------------------------------------------------------
var pessoa = {
    nome: ['Bob', 'Smith'],
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar']
}

var endereco = {
    cep: '88321671',
    rua: 'Rua jenoveva pereira',
    numero: 127
}

function juntarObjetos(objeto1,objeto2){
    const objetos = { ...objeto1, ...objeto2}
    return objetos
}

console.log(" --------------------- ")
console.log(" ---- Exercício 1 --- ")
console.log(" --------------------\n ")
console.log("Função 3: ") 
console.log(juntarObjetos(pessoa,endereco))

// -----------------------------------------------------------------------------
// ----------------------------------- Função 4 --------------------------------
// -----------------------------------------------------------------------------

let arrayNumeros = [25, 64, 4, 9, 81, 36, 49, 1, 100, 121, 16 ]
var posicao = 0
const encontrarMinimo = arrayNumeros.reduce( (prev, current) => { 
        posicao++
        return prev < current ? prev : current 
    })

console.log(" -------------------- ")
console.log("Função 4: ") 
console.log(encontrarMinimo)
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------