window.addEventListener('scroll', ()=>{
    var nav = document.querySelector('.nav-bar');    
    nav.classList.toggle('sticky',window.scrollY > 0);

    var hamburger = document.getElementById('hamburger'),
        navLinks = document.getElementById('nav-links');

    hamburger.classList.toggle('hidden-burger',window.scrollY<=0);
    navLinks.classList.toggle('hidden-burger', window.scrollY<=0);
})