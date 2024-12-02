window.addEventListener('load', ()=>{
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // if the texts need to fade out again after being off screen, then uncomment the line of code below.
                // entry.target.classList.remove('show');
            }
        });
    });
    hiddenElements.forEach((el) => observer.observe(el));
})
