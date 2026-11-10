'use strict';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';

const validateForm = function (form) {
  const firstName = form.elements.namedItem('first-name');
  const lastName = form.elements.namedItem('last-name');
  const email = form.elements.namedItem('email');
  const password = form.elements.namedItem('password');

  const firstNameError = document.getElementById('first-name-error');
  const lastNameError = document.getElementById('last-name-error');
  const emailError = document.getElementById(`${email.id}-error`);
  const passwordError = document.getElementById(`${password.id}-error`);

  let isValid = true;

  // Only for register form
  if (firstName && firstName.validity.valueMissing) {
    firstNameError.textContent = 'First name is required';
    firstNameError.hidden = false;
    isValid = false;
  } else {
    firstNameError.hidden = true;
  }

  if (lastName && lastName.validity.valueMissing) {
    lastNameError.textContent = 'Last name is required';
    lastNameError.hidden = false;
    isValid = false;
  } else {
    lastNameError.hidden = true;
  }

  // For both login and register forms
  if (email.validity.valueMissing) {
    emailError.textContent = 'Email is required';
    emailError.hidden = false;
    isValid = false;
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email';
    emailError.hidden = false;
    isValid = false;
  } else {
    emailError.hidden = true;
  }

  if (password.validity.valueMissing) {
    passwordError.textContent = 'Password is required';
    passwordError.hidden = false;
    isValid = false;
    // Only for register form, check for too short and too long
  } else if (form.id === 'register-form' && password.validity.tooShort) {
    passwordError.textContent = 'Password is too short';
    passwordError.hidden = false;
    isValid = false;
  } else if (form.id === 'register-form' && password.validity.tooLong) {
    passwordError.textContent = 'Password is too long';
    passwordError.hidden = false;
    isValid = false;
  } else {
    passwordError.hidden = true;
  }

  return isValid;
};

// Initialize authentication form handling (login and register)
export const initAuthentication = function () {
  document.addEventListener('submit', async (event) => {
    const form = event.target;
    if (form.id !== 'register-form' && form.id !== 'login-form') return;

    event.preventDefault();

    const data = new FormData(form);
    const email = data.get('email').trim();
    const password = data.get('password');
    if (!validateForm(form)) return;

    if (form.id === 'register-form') {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Account created!');
        window.location.hash = '#home';
      } catch (error) {
        console.error('Error creating user:', error);
        alert(`Registration failed. (${error.code})`);
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Logged in!');
        window.location.hash = '#home';
      } catch (error) {
        console.error('Error logging in:', error);
        alert(`Login failed. (${error.code})`);
      }
    }

    form.reset();
  });

  // Handle input events to validate the form fields in real-time
  document.addEventListener('input', (event) => {
    const field = event.target;
    if (!field.classList.contains('auth__input')) return;

    const error = document.getElementById(`${field.id}-error`);
    if (!error || error.hidden) return;

    const form = field.closest('form');

    validateForm(form);
  });
};
