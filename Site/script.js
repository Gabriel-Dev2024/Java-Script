function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
     
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        /* Bom Dia */
        img.src = 'Dia-novo.png'
        document.body.style.background = '#F0D08A'
    } else if (hora >= 12 && hora < 18){
        /* Boa Tarde */
        img.src = 'Tarde-novo.png'
        document.body.style.background = '#B15C16'
    } else {
        /* Boa Noite */
        img.src = 'Noite-nova.png'
        document.body.style.background = '#020314'
    }
}
