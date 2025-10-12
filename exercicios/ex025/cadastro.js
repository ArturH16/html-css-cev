
let botao = document.getElementById('botao')
botao.addEventListener('click',clicado) 
function clicado() {
    let nometxt = document.getElementById('nome')
let sobrenometxt = document.getElementById('sobrenome')
    if (nometxt.value.length || sobrenometxt.value.length == 0) {
        alert('INSIRA OS DADOS ANTES DE ENVIAR!!')
    }
}