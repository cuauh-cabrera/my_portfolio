/* Mobile menu */

/// Vartiables
const iconMenu = document.getElementById('icon-menu');
const mainMenu = document.getElementById('main-menu');
const closeMenu = document.getElementById('icon-close');

/// Events
iconMenu.addEventListener('click', () => mainMenu.classList.toggle('menu-show'));
iconMenu.addEventListener('click', () => { iconMenu.style.display = 'none'; });
closeMenu.addEventListener('click', () => { iconMenu.style.display = 'flex'; });
closeMenu.addEventListener('click', () => mainMenu.classList.toggle('menu-show'));
mainMenu.addEventListener('click', () => mainMenu.classList.toggle('menu-show'));
mainMenu.addEventListener('click', () => { iconMenu.style.display = 'flex'; });
closeMenu.addEventListener('click', () => mainMenu.classList.toggle('menu-show'));
