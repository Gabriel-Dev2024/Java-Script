const filme = {
    nome: 'Clube da Luta',
    ano: 1999,
    diretor: 'Joel Miller',
    personagem: 'Tyler Durden',
    duração: '2h30'
}

exibirPropriedades(filme)
function exibirPropriedades(obj){
    for (prop in filme){
        if (typeof obj[prop] === 'string') {
            console.log(prop,obj[prop])
        }
    }
}
