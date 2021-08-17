//Button shows Dialogg

const but = document.querySelector('.hamburguer');
const menu = document.querySelector('.navbar-linksMobile');
but.addEventListener('click', function aparece(e){
    
    menu.classList.toggle("active");
    
})

//Intersectional 
const nav = document.querySelector(".navbar");
const papelDeParede = document.querySelector(".sectionMain");

const papelDeParedeOptions = {
    rootMargin: "-300px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        //console.log(entry.target);
        if (!entry.isIntersecting) {
            nav.classList.add("navScrolled");
        } else{
            nav.classList.remove("navScrolled");
        }
    })
}, papelDeParedeOptions);

sectionOneObserver.observe(papelDeParede);

