function contagem(valor) {
    let asterisco = ''
    for (let i = 1; i <= valor; i++) {
        console.log(asterisco += '*')
    }
}

contagem(10)