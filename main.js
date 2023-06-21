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

/* Project's modal window */

/// Variables
const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-modal]');
const overlay = document.getElementById('overlay');

/// Events and methods

/// Open modal
openModalButton.forEach(button => {
    button.addEventListener('click',() => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)
    })
})

/// Active overlay
overlay.addEventListener('click',() => {
    const modals = document.querySelectorAll('.projects__modal--conatiner.active')
    modals.forEach(modal => {
        closeModal(modal);
    })
})

/// Close modal
closeModalButton.forEach(button => {
    button.addEventListener('click',() => {
        const modal = button.closest('.projects__modal--conatiner');
        closeModal(modal);

    })
})

/// Functions
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}