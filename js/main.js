// menu
const menuBtn = document.querySelector('.nav-btn');
const closeMenuBtn = document.querySelector('.btn-close')
const menu = document.querySelector('.nav');

const showMenu = function() {
    menu.classList.add('show');
}

const closeMenu = function() {
    menu.classList.remove('show');
}

menuBtn.addEventListener('click', showMenu);
closeMenuBtn.addEventListener('click', closeMenu);

//scrolltop
{
    const scrollLinks = document.querySelectorAll('a.scroll-link');

    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            const id = scrollLinks[i].getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });        
    }
}