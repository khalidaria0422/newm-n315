'use strict';

import { showToast } from './utility.js';
import { loadPages } from './model.js';

// Initialize the modal functionality
const initModal = function () {
  const modalShow = document.getElementById('modalShow');
  const modalClose = document.getElementById('modalClose');

  modalShow.addEventListener('click', toggleModal);
  modalClose.addEventListener('click', toggleModal);
};

// Toggle the visibility of the login modal
const toggleModal = function () {
  const modal = document.querySelector('.modal');
  const landing = document.querySelector('.landing');

  landing.classList.toggle('hidden');
  modal.classList.toggle('hidden');
};

// Toggle the visibility of the home page (header and footer)
const toggleHome = function () {
  const main = document.getElementById('app');
  const header = document.querySelector('.header');
  const footer = document.querySelector('.footer');

  header.classList.toggle('hidden');
  footer.classList.toggle('hidden');
  main.classList.toggle('main--height-full');
  main.classList.toggle('main--height');
};

// Load the home page after successful login
const loadHome = function (loginForm) {
  loginForm.reset();

  showToast('Login form submitted', 'success');

  setTimeout(() => {
    showToast('Redirecting to home page...', 'pending');
  }, 1000);

  setTimeout(() => {
    toggleModal();
    toggleHome();
  }, 2000);

  setTimeout(() => {
    showToast('Loading home page...', 'warning');
  }, 2500);

  setTimeout(() => {
    loadPages('home');
    showToast('Home page loaded', 'success');
  }, 3000);
};

// Initialize login form validation and submission handling including logout functionality
const initLogin = function () {
  const loginForm = document.querySelector('.modal__content');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('#email').value.trim();
    const password = loginForm.querySelector('#password').value.trim();

    if (email === '' || password === '') {
      showToast('Please fill in both email and password', 'error');
      return;
    } else if (!email.includes('@') || !email.includes('.')) {
      showToast('Please enter a valid email address', 'error');
      return;
    } else if (email.length < 5 || email.length > 254) {
      showToast('Email must be between 5 and 254 characters', 'error');
      return;
    } else if (password.length < 8 || password.length > 64) {
      showToast('Password must be between 8 and 64 characters', 'error');
      return;
    } else {
      loadHome(loginForm);
    }
  });
};

const initLogout = function () {
  const btnLogout = document.getElementById('logout');

  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();

    toggleHome();
    loadPages('landing');

    // Landing DOM was recreated, so attach its listeners again
    initModal();
    initLogin();
  });
};

const initApp = function () {
  // Listen for hash changes to load the corresponding page
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');

    loadPages(hash);
  });

  toggleHome(); // Initially hide the header and footer
  loadPages('landing'); // Load the landing page initially
  initModal();
  initLogin();
  initLogout();
};

initApp();
