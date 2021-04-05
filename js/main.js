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

// Modal window
const modalButton = document.querySelector('.btn');
const modalWind = document.querySelector('#modal-wind');
const modalClose = document.querySelector('.modalclose');

const showModal = function () {
    modalWind.classList.add('show');
}

const closeModal = function () {
    modalWind.classList.remove('show');
}

modalButton.addEventListener('click', showModal);
modalClose.addEventListener('click', closeModal);

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

const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]');
const windowHeight = document.documentElement.clientHeight;



let lazyImgPositions = [];
if (lazyImages.length > 0) {
    lazyImages.forEach(img => {
        if (img.dataset.src || img.dataset.srcset) {
            lazyImgPositions.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck();
        }
    });
}

window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
    if (document.querySelectorAll('img[data-src]').length > 0) {
        lazyScrollCheck();
    }
}

function lazyScrollCheck() {
    let imgIndex = lazyImgPositions.findIndex(
        item => pageYOffset > item - windowHeight
    );
    if (imgIndex >= 0) {
        if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            lazyImages[imgIndex].removeAttribute('data-src');
        }
        delete lazyImgPositions[imgIndex];
    }
}
