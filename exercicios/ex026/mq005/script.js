function mostrarOpcoes() {
    let menu = document.getElementById('itens')
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}


let menu_icon = document.getElementById('burguer')
menu_icon.addEventListener('click',mostrarOpcoes)