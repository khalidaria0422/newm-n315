'use strict';

export const showToast = function (message, type = 'success') {
  const toastContainer = document.querySelector('.toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast--hide');

    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 3000);
};

export const toggleNavButtons = function () {
  const navButtons = document.querySelectorAll('[data-auth-mode]');

  navButtons.forEach((btn) => btn.classList.toggle('btn--hidden'));
};
