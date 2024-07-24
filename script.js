function conversao() {
    var n = document.getElementById('num')
    var c = Number(n.value)
    var resultado = document.getElementsByClassName('res')[0]
    f = (c * 9/5) + 32
    resultado.innerText = f
}