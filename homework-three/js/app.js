'use strict';

import { loadPage } from './model.js';

function initApp() {
  loadPage('home');

  window.addEventListener('hashchange', () => {
    let hashTag = window.location.hash;
    hashTag = hashTag.substring(1);

    loadPage(hashTag);
  });
}

initApp();
