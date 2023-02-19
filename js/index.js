
/*burger menu*/

const btn = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

let isOpen = false;

btn.addEventListener('click', (event) => toggleMenu(event)); // toggle menu on burger click

document.querySelectorAll('.menu-item').forEach(el => el.addEventListener('click', closeMenu)) // close menu on links click

function closeMenu () {
    menu.classList.remove('menu-open');
    btn.classList.remove('burger-open');
    body.classList.remove('no-scroll');
    isOpen = false;
}

function toggleMenu (event) {
    menu.classList.toggle('menu-open');
    btn.classList.toggle('burger-open');
    body.classList.toggle('no-scroll');
    isOpen = !isOpen;
    event.stopPropagation();
    if(isOpen) {
    document.addEventListener('click', (e) => {
    if (!e.composedPath().includes(menu)) {
        closeMenu()
    }})
}
}
window.addEventListener('resize', () => {
    if(window.innerWidth > 700 && isOpen) {
    closeMenu()
}
})

/*menu hover effect*/
