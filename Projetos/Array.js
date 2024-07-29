// Adicionando Elementos
const numeros1 = [1, 2, 3]
console.log(numeros1)

// Adicionar no Inicio
numeros1.unshift(0)
console.log(numeros1)

// Adicionar no Meio
numeros1.splice(1, 0, 'a')
console.log(numeros1)

// Adicionar no Final
numeros1.push(4)
console.log(numeros1)



console.log('')



// Removendo elementos do array
const numeros2 = [1, 2, 3, 4, 5, 6]
console.log(numeros2)

// Remover no Inicio
const primeiro = numeros2.shift()
console.log(numeros2)

// Remover no Meio
const meio = numeros2.splice(2, 1)
console.log(numeros2)

// Remover no Fim
const final = numeros2.pop()
console.log(numeros2)



console.log('')



// Encontrando elementos por referencia
const marcas = [
    { id: 1, nome: 'a'},
    { id: 2, nome: 'b'},
    { id: 3, nome: 'c'}
]

const marca = marcas.find(function (marca) {
    return marca.nome === 'a'
})

console.log(marca)



console.log('')



// Combinando Arrays
const numeros3 = [1, 2, 3, 4, 5, 6]

const combinado = numeros3.join('.')
console.log(combinado)

const frase = 'Ola bem vindo ao meu site'
const resultado = frase.split(' ')
console.log(resultado)

console.log(resultado.join('-'))