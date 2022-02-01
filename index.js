const mobileBtn = document.querySelector('.mobile-btn');
const header = document.querySelector('.header');

mobileBtn.addEventListener('click', () => {
    header.classList.toggle('nav-open')
})
