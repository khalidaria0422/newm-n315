'use strict';

import { showToast } from './utility.js';
import { loadPages } from './model.js';

const toggleModal = function () {
  const modal = document.querySelector('.modal');
  const landing = document.querySelector('.landing');

  landing.classList.toggle('hidden');
  modal.classList.toggle('hidden');
};

// Initialize login form validation and submission handling
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
      showToast('Login form submitted');
      loginForm.reset();
    }
  });
};

const initApp = function () {
  loadPages('landing'); // Load the home page initially

  const modalShow = document.getElementById('modalShow');
  const modalClose = document.getElementById('modalClose');

  modalShow.addEventListener('click', toggleModal);
  modalClose.addEventListener('click', toggleModal);

  // Listen for hash changes to load the corresponding page
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');

    loadPages(hash);
  });

  initLogin();
};

initApp();
