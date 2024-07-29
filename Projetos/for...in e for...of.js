const objeto = {a: 1, b: 2, c: 3, d: 4,}

for (let propriedade in objeto){
    console.log(`${propriedade}: ${objeto[propriedade]}`)
}

console.log('')

const nomes = ['Gabriel', 'Prudecio', 'Santos' , 1]

for (let name of nomes) {
    console.log(name)
}