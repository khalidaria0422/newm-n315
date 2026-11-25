'use strict';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';
import { showToast, toggleNavButtons } from './utilities';

// Validate authentication form fields (login and register)
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

    if (!validateForm(form)) return; // Stop submission if form is invalid

    const messages = {
      // Login
      'auth/invalid-credential': 'Incorrect email or password.',
      'auth/user-not-found': 'Incorrect email or password.',
      'auth/wrong-password': 'Incorrect email or password.',
      'auth/user-disabled': 'This account has been disabled. Contact support.',

      // Registration
      'auth/email-already-in-use': 'Email is already in use. Try logging in.',
      'auth/weak-password':
        'Your password does not meet the requirements. Choose a stronger password.',

      // Shared
      'auth/too-many-requests': 'Too many attempts. Please try again later.',
      'auth/network-request-failed': 'Connection failed. Check your internet.',
    };

    if (form.id === 'register-form') {
      try {
        await createUserWithEmailAndPassword(auth, email, password);

        toggleNavButtons();
        showToast('Account created!');
        window.location.hash = '#home';
      } catch (error) {
        const message = messages[error.code] || 'An unexpected error occurred.';
        showToast(`Account creation failed. (${message})`, 'error');
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);

        toggleNavButtons();
        showToast('Logged in successfully!');
        window.location.hash = '#home';
      } catch (error) {
        const message = messages[error.code] || 'An unexpected error occurred.';
        showToast(`Login failed. (${message})`, 'error');
        console.error(error);
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
