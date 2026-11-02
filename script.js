function checar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.querySelector(`input#inascimento`)
  var resultado = window.document.querySelector(`div#resultado`)
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert(`[ERROR]Verifique os dados e tente novamente!![ERROR]`)
  } else {
    var fsex = window.document.querySelectorAll(`input[name="radsex"]`)
    var idade = ano - Number(fano.value)
    var genero = ``
    var img = window.document.querySelector(`img`)

    if (fsex[0].checked) {
      genero = `Homem`
      if (idade >= 0 && idade < 10) {
        img.src = `imagens/homem-crianca.png`
        resultado.innerHTML = `Detectamos criança/${genero} com ${idade} anos`
      } else if (idade < 21) {
        img.src = `imagens/homem-adolescente.png`
        resultado.innerHTML = `Detectamos adolescente/${genero} com ${idade} anos`
      } else if (idade < 50) {
        img.src = `imagens/homem-adulto.png`
        resultado.innerHTML = `Detectamos Adulto/${genero}  com ${idade} anos`
      } else {
        img.src = `imagens/homem-idoso.png`
        resultado.innerHTML = `Detectamos Idoso/${genero}  com ${idade} anos`
      }
    } else if (fsex[1].checked) {
      genero = `Mulher`
      if (idade >= 0 && idade < 10) {
        img.src = `imagens/mulher-crianca.png`
        resultado.innerHTML = `Detectamos criança/${genero}  com ${idade} anos`
      } else if (idade < 21) {
        img.src = `imagens/mulher-adolescente.png`
        resultado.innerHTML = `Detectamos adolescente/${genero}  com ${idade} anos`
      } else if (idade < 50) {
        img.src = `imagens/mulher-adulta.png`
        resultado.innerHTML = `Detectamos adulta/${genero}  com ${idade} anos`
      } else {
        img.src = `imagens/mulher-idosa.png`
        resultado.innerHTML = `Detectamos Idosa/${genero}  com ${idade} anos`
      }
    }
    resultado.style.textAlign = `center`
    //resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
  }
}
