// I do not feel good with the current design of the hamburger menu option nav links.
// I think I might go for having the nav links pop out of the side bar in the future.

window.addEventListener('load', ()=>{
    var hamburger = document.getElementById('hamburger');
    var hamburgerIcon = document.getElementById('hamburger-icon');
    var navLinks = document.getElementById('nav-links');
    var navLinkClicked = false;

    navLinks.addEventListener('click',()=>{
        navLinkClicked = true;
    });

    hamburger.addEventListener('click', ()=>{
        if(hamburgerIcon.src.endsWith('hamburger.svg')){
            hamburgerIcon.src = './img/X.svg';
            navLinks.classList.add('open');
        } else {
            hamburgerIcon.src = './img/hamburger.svg';
            navLinks.classList.remove('open');
            navLinks.classList.add('closed'); 
            setTimeout(()=>{
                navLinks.classList.remove('closed')
            },50);
            if(navLinkClicked){
                window.scrollTo(0,window.scrollY+175);
                navLinkClicked = false;
            }
        }
    });

    hamburger.addEventListener('mousedown', () => {
        hamburgerIcon.classList.add('active'); 
        setTimeout(()=>{hamburgerIcon.classList.remove('active')},1000);
    });
})