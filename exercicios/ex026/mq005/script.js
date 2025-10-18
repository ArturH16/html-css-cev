let menu = document.getElementById('itens')

function mostrarOpcoes() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}

let corpo = document.getElementById('corpo')
corpo.addEventListener('resize',mudouTamanho)
let menu_icon = document.getElementById('burguer')
menu_icon.addEventListener('click',mostrarOpcoes)

