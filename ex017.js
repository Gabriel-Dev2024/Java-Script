let num = [1, 4, 6, 3, 8]
num.push(5) // Adicionou o valor 5 no array
num.sort() // Colocou o array em ordem crescente 
console.log(num)
console.log(`O array tem ${num.length} posições`)
console.log(`O primeiro valor do array é ${num[0]}`) 

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} 

for (let pos in num) {
    console.log(num[pos])
}
