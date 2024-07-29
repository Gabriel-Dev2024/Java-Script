let numero = document.getElementById('num')
let res = document.getElementById('res')
let array = []

function adicionar() {
    fim.innerHTML = ''
    let num = Number(numero.value)
    if (numero.value.length === 0 || num > 100 || isNaN(num)) {
        window.alert('[ERRO] Dados Inválidos')
    } else if (array.includes(num)) {
        window.alert('Esse numero ja foi adicionado')
    } else {
        array.push(num)
        res.innerHTML += `Adicionado: ${num} <br>`
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    if (array.length === 0) {
        window.alert('Adicione valores antes de finalizar ')
    } else {
        let soma = 0
        fim.innerHTML += `<br> Ao todo, temos ${array.length} números <br>`
        fim.innerHTML += `<br> O maior valor é ${Math.max(...array)} <br>`
        fim.innerHTML += `<br> O menor valor é ${Math.min(...array)} <br>`
        for (valor of array) {
            soma += valor
        }
        fim.innerHTML += `<br> A soma dos valores é ${soma} <br>`
        fim.innerHTML += `<br> A media dos valores é ${soma / array.length}`
    }
}