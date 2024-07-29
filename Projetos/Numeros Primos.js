function numerosPrimos(num) {
    for (let numero = 2; numero <= num; numero++) {
        let primo = true
        if (teste(numero)) {
            console.log(numero)
        }
    }
}

function teste(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                return false
            }
        }
        return true
}

numerosPrimos(15)