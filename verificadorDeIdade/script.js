function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('cano');
    var res = document.querySelector('div#res');
  

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[Erro] Verifique o ano e tente novamente')
    } else {
        var fsex = document.getElementsByName('tsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img =  document.createElement('img')
        if(fsex[0].checked) {
            genero = 'Homem';
            if (idade >=0 && idade < 10 ){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50){
                //adulto
               img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10 ){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
        
} 