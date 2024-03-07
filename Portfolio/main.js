let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll =() => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
   });
   let header = document.querySelector('header');
   header.classList.toggle('sticky',window.scrollY >100);
};
ScorllReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScorllReveal().reveal('.home-content, .heading', { origin:'top'});
ScorllReveal().reveal('.icon, .services-container, .portfolio-box, .contant form', { origin:'bottom'});
ScorllReveal().reveal('.home-content h1, .about-img', { origin:'left'});
ScorllReveal().reveal('.home-content p, .about-content', { origin:'right'});

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Web Designer','Blogger'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


