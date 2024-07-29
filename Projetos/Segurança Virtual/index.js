function verificar() {
    const nome_usuario = document.getElementById('nome_usuario').value
    const resultado = document.getElementById('resultado')
    const convidados_carlinhos = ['Dalva', 'Cleide', 'Coringao', 'Gabriel']
    if (convidados_carlinhos.includes(nome_usuario)) {
        resultado.innerHTML = 'Pode entrar'
    } else {
        resultado.innerHTML = 'Não pode entrar'
    }
}