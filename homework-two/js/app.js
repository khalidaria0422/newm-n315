'use strict';
import { changePage } from './model.js';

const initListeners = function () {
  // changePage('home');

  document.querySelectorAll('.link').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const page = event.currentTarget.id;
      console.log(page);
      changePage(page);
    });
  });
};

initListeners();
