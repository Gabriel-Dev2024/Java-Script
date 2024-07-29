var hora = 3

if (hora > 5 && hora <= 11) {
    console.log('Bom Dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite')
} else if (hora >= 0 && hora <= 5) {
    console.log('Boa Madrugada')
} else {
    console.log('[ERRO] Não existe esse horario')
}