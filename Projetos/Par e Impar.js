function exibirTipo(limite){
    for (let i = 1; i <= limite; i++){
        if (i % 2 === 0) {
            console.log(i,' Par')
        } else {
            console.log(i,' Impar')
        }
    }
}

exibirTipo(5)