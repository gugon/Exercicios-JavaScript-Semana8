// -----------------------------------------------------------------------------
// ----------------------------------- Função 1 --------------------------------
// -----------------------------------------------------------------------------
// obs: está função funcionando direto pela web

let arrayNumeros = [25, 64, 4, 9, 81, 36, 49, 1, 100, 121, 16 ];
let novaArray = []

function retornaArray (array) {
    const retornaArrayCrescente = (array) => {
        novaArray = array.sort((a,b) => a - b)
        return novaArray
    }      

    const newDiv = document.createElement('div')
    newDiv.innerHTML = 'Nova Array na ordem crescente = [' +
      retornaArrayCrescente(array) + ']'
    document.getElementById('id-resp').appendChild(newDiv)
}

const retornaValores = {    

    retornaDobro: function (array){
        const newArray = array.map(number => number * 2)
        const newDiv = document.createElement('div')
        // newDiv.className = 'div-3'
        newDiv.innerHTML = 'Nova Array com dobro dos valores = [' +
        newArray + ']'
        document.getElementById('id-resp').appendChild(newDiv)
        return newArray
    },

    retornaMetade: function (array){
        const newArray = array.map(number => number / 2)
        const newDiv = document.createElement('div')
        newDiv.innerHTML = 'Nova Array com metade dos valores = [' +
        newArray + ']'
        document.getElementById('id-resp').appendChild(newDiv)
        return newArray
    },

    retornaRaiz: function (array){
        const newArray = array.map(number => Math.sqrt(number))
        const newDiv = document.createElement('div')
        newDiv.innerHTML = 'Nova Array com a raiz dos valores = [' +
        newArray + ']'
        document.getElementById('id-resp').appendChild(newDiv)
        return newArray
    }    

}

let visualiza1 = document.getElementById('id-summary-1')
// visualiza1.scrollIntoView(alignToTop);
visualiza1.addEventListener("click", () => { 
    document.getElementById('id-resp').innerText = ""
    retornaArray(arrayNumeros)  
})

let visualiza2 = document.getElementById('id-A')
visualiza2.addEventListener("click", () => { 
    document.getElementById('id-resp').innerText = ""
    retornaValores.retornaDobro(novaArray)
})

let visualiza3 = document.getElementById('id-B')
visualiza3.addEventListener("click", () => { 
    document.getElementById('id-resp').innerText = ""
    retornaValores.retornaMetade(novaArray) 
})

let visualiza4 = document.getElementById('id-C')
visualiza4.addEventListener("click", () => { 
    document.getElementById('id-resp').innerText = ""
    retornaValores.retornaRaiz(novaArray) 
})




