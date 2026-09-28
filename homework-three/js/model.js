'use strict';

import homePage from '../pages/home.js';
import aboutPage from '../pages/about.js';

const changeActiveNavLink = (hash) => {
  document
    .querySelector('.nav-link--active')
    ?.classList.remove('nav-link--active');

  document
    .querySelector(`.nav a[href="#${hash}"]`)
    ?.classList.add('nav-link--active');
};

export function loadPage(page) {
  const main = document.querySelector('#app');

  switch (page) {
    case 'home':
      main.innerHTML = homePage;
      break;
    case 'about':
      main.innerHTML = aboutPage;
      break;
    default:
      main.innerHTML = homePage;
      break;
  }

  changeActiveNavLink(page);
}
