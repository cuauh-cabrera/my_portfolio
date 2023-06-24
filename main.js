/// //* Project's modal window *///////

/* Projects Section Call */
const projectSection = document.getElementById('projects-container');

/* Card's Info */
const cardItemsData = [
  {
    id: 1,
    image: 'assets/modal_hero_desktop.png',
    title: 'Project One',
    technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://github.com/cuauh-cabrera',
    sourceCode: 'https://github.com/cuauh-cabrera',
  },
  {
    id: 2,
    image: 'assets/modal_hero_desktop.png',
    title: 'Project Two',
    technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://github.com/cuauh-cabrera',
    sourceCode: 'https://github.com/cuauh-cabrera',
  },
  {
    id: 3,
    image: 'assets/modal_hero_desktop.png',
    title: 'Project Three',
    technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://github.com/cuauh-cabrera',
    sourceCode: 'https://github.com/cuauh-cabrera',
  },
  {
    id: 4,
    image: 'assets/modal_hero_desktop.png',
    title: 'Project Four',
    technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://github.com/cuauh-cabrera',
    sourceCode: 'https://github.com/cuauh-cabrera',
  },
  {
    id: 5,
    image: 'assets/modal_hero_desktop.png',
    title: 'Project Five',
    technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://github.com/cuauh-cabrera',
    sourceCode: 'https://github.com/cuauh-cabrera',
  },
  {
    id: 6,
    image: 'assets/modal_hero_desktop.png',
    title: 'Project Six',
    technologies: ['Ruby on Rails', 'CSS', 'HTML', 'JavaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    liveLink: 'https://github.com/cuauh-cabrera',
    sourceCode: 'https://github.com/cuauh-cabrera',
  }];

/* Card generator */
function displayProjects() {
  projectSection.innerHTML = cardItemsData.map((projectCard) => `
        <!--card 1-->
        <article id=project-card${projectCard.id} class="projects__card">
            <div class="projects__card--img">
                <img src="${projectCard.image}" alt="project image">
            </div>
            <div class="projects__card--text">
                <h3 class="projects__card--title">${projectCard.title}</h3>
                <div class="projects__card--tags">
                    <ul>
                        <li>${projectCard.technologies[0]}</li>
                        <li>${projectCard.technologies[1]}</li>
                        <li>${projectCard.technologies[2]}</li>
                        <li>${projectCard.technologies[3]}</li>
                    </ul>
                </div>
                <button data-modal-target="#modal${projectCard.id}" class="action-btn">See project</button>
            </div>
        </article>
    <!--Modal window-->
    <article class="projects__modal--conatiner" id="modal${projectCard.id}">
        <div class="projects__modal--body">
            <button data-close-modal class="close-modal-desk">&times;</button>
            <div class="projects__modal--hero">
                <button data-close-modal class="close-modal">&times;</button>
            </div>
            <h1 class="projects__modal--title">${projectCard.title}</h1>
            <div class="projects__modal--tags">
                <ul>
                    <li>Ruby on Rails</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li class="projects__modal--tags-boot">Boostrap</li>
                    <li class="projects__modal--tags-ter">Terminal</li>
                    <li class="projects__modal--tags-code">Codepen</li>
                </ul>
            </div>
            <div class="projects__modal--text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it 1960s. <br>
                    <br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it 1960s.
                </p></span>
            </div>
            <div class="projects__modal--actions">
                <button class="action-btn">See live<img src="./assets/modal_see live icon.svg" alt=""></button>
                <button class="action-btn">See source<img src="./assets/modal_Icon -GitHub.svg" alt=""></button>
            </div>
        </div>
    </article>
        `).join('');
}

displayProjects();

/// //* Modal window display *////

/// Variables
const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-modal]');
const overlay = document.getElementById('overlay');

/// Functions
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

/// Events and methods

/// Open modal
openModalButton.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

/// Active overlay
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.projects__modal--conatiner.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

/// Close modal
closeModalButton.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.projects__modal--conatiner');
    closeModal(modal);
  });
});

/// //* Responsive Mobile menu */////

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

/// //* Form validation *////

const emailError = document.getElementById('email-error');
const formError = document.getElementById('submit-error');
const validateForm = document.getElementById('button-form');

/// Email address validation
function checkEmail() {
  const email = document.getElementById('email').value;
  if (email.length === 0) {
    emailError.innerHTML = 'Please enter an email address';
    return false;
  }
  if (!email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
    emailError.innerHTML = 'Email address should be in lower case';
    return false;
  }
  emailError.innerHTML = '';
  return true;
}

/// Form submission validation
function checkForm() {
  if (!checkEmail()) {
    formError.style.display = 'block';
    formError.innerHTML = 'Please enter the correct information';
    setTimeout(() => { formError.style.display = 'none'; }, 1000);
    return false;
  }
  return checkForm;
}

/// Form validation
validateForm.addEventListener('click', checkForm());
