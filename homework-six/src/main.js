'use strict';

import './scss/style.scss';
import { initRouter } from './controllers/router.js';
import { initNavigation } from './controllers/navigation.js';

const init = function () {
  initRouter();
  initNavigation();

  // Set copyright year in the footer dynamically
  document.getElementById('copyright-year').textContent =
    new Date().getFullYear();
};

init();
