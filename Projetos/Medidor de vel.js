function verificarVelocidade(vel) {
    const velocidadeMax = 70
    const pontosPorKm = 5
    if (vel <= velocidadeMax) {
        console.log('Ok')
    } else {
        const pontos = Math.floor((vel - velocidadeMax) / pontosPorKm)
        if (pontos >= 12) {
            console.log('Carteira Suspensa')
        } else {
            console.log(`Você recebeu ${pontos} pontos pela velocidade acima de ${velocidadeMax}`)
        }
    }
}

verificarVelocidade(120)