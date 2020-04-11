function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora } horas.`

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = "manha2.png" 
        document.body.style.background = "#afa62c"
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = "tarde2.png"
        document.body.style.background = "#af812c"
    } else {
        //Boa noite
        img.src = "noite2.png"
        document.body.style.background = "#2c44af"
       
    }
}
