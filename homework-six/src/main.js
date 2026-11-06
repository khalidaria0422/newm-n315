'use strict';

import './scss/style.scss';
import { loadPage } from './model/model.js';

const changePage = function () {
  const page = window.location.hash.replace('#', '');
  loadPage(page);
};

const init = function () {
  // loadPage('home');
  window.addEventListener('hashchange', changePage);

  // Set copyright year in the footer dynamically
  document.getElementById('copyright-year').textContent =
    new Date().getFullYear();
};

init();
