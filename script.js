const btnMenu = document.getElementById("burguer");

btnMenu.addEventListener("click", ()=> {
    if (cabecalho__menu.style.display == 'block') {
        cabecalho__menu.style.display = 'none'
    } else {
        cabecalho__menu.style.display = 'block'
    }
})
