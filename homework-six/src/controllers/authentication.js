'use strict';

const validateForm = function (form) {
  const firstName = form.elements.namedItem('first-name');
  const lastName = form.elements.namedItem('last-name');
  const email = form.elements.namedItem('email');
  const password = form.elements.namedItem('password');

  const firstNameError = document.getElementById('first-name-error');
  const lastNameError = document.getElementById('last-name-error');
  const emailError = document.getElementById(`${email.id}-error`);
  const passwordError = document.getElementById(`${password.id}-error`);

  // Only for register form
  if (firstName && firstName.validity.valueMissing) {
    firstNameError.textContent = 'First name is required';
    firstNameError.hidden = false;
  } else {
    firstNameError.hidden = true;
  }

  if (lastName && lastName.validity.valueMissing) {
    lastNameError.textContent = 'Last name is required';
    lastNameError.hidden = false;
  } else {
    lastNameError.hidden = true;
  }

  // For both login and register forms
  if (email.validity.valueMissing) {
    emailError.textContent = 'Email is required';
    emailError.hidden = false;
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email';
    emailError.hidden = false;
  } else {
    emailError.hidden = true;
  }

  if (password.validity.valueMissing) {
    passwordError.textContent = 'Password is required';
    passwordError.hidden = false;
    // Only for register form, check for too short and too long
  } else if (form.id === 'register-form' && password.validity.tooShort) {
    passwordError.textContent = 'Password is too short';
    passwordError.hidden = false;
  } else if (form.id === 'register-form' && password.validity.tooLong) {
    passwordError.textContent = 'Password is too long';
    passwordError.hidden = false;
  } else {
    passwordError.hidden = true;
  }
};

export const initAuthentication = function () {
  // Handle form submissions for authentication (login and register)
  document.addEventListener('submit', async (event) => {
    const form = event.target;
    if (form.id !== 'register-form' && form.id !== 'login-form') return;

    event.preventDefault();

    const data = new FormData(form);
    validateForm(form);
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
