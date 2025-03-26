const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
