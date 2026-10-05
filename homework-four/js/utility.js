'use strict';

export function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toastContainer');

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast--hide');
  }, 3000);

  setTimeout(() => {
    toast.remove();
  }, 3400);
}
