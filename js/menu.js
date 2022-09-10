// Elements
const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

// Event Listeners
btn.addEventListener('click', navToggle);

// Functions
function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scroll');
    menu.classList.toggle('show-menu');
}