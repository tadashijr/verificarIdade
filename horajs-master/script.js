function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        msg.innerHTML = `Bom dia, agora são ${hora} horas.`
        img.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        msg.innerHTML = `Boa tarde, agora são ${hora} horas.`
        img.src = 'img/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        msg.innerHTML = `Boa noite, agora são ${hora} horas.`
        img.src = 'img/noite.png'
        document.body.style.background = '#515154'
    }
}