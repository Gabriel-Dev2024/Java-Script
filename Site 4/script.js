function gerar() {
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    
    if (num.value.length === 0) {
        window.alert('[ERRO] Dados inválidos')
    } else {
        let num1 = Number(num.value)
        let vez = 1
        res.innerHTML = ''

        while (vez <= 10) {
            res.innerHTML += `${num1} x ${vez} = ${num1*vez} <br>`
            vez += 1
        }
    }
}