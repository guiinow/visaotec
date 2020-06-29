// Adiciona um evento quando o usuário der scroll
window.addEventListener('scroll', function(e) {
    //console.log(window.pageYOffset) // Em qual altura de página o usuário está
    let menu = document.getElementById('menu') //Identifica o menu na página
    if(window.pageYOffset > 0) { //Maior que 100 pois a div #home não está colada no topo, mas poderia ser > 0.
        menu.classList.add('scrolled')  //Adiciona a classe "scrolled" no menu
    } else {
        menu.classList.remove('scrolled')   //Remove a classe "scrolled" no menu
    }
});

function myFunction() {
    alert("Olá, não foi possível enviar seu e-mail no momento!");
}