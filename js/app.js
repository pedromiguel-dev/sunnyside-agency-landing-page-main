const but = document.querySelector('.hamburguer');
const menu = document.querySelector('.navbar-links');
but.addEventListener('click', function aparece(e){
    
    menu.classList.toggle("active");
    
})