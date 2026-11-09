'use strict';

const pages = import.meta.glob('../pages/*.js');
import {
  updateActiveNavLinks,
  updateMobileNavColor,
  initAuthentication,
} from './navigation.js';

const loadPage = async function () {
  const page = window.location.hash.replace('#', '') || 'home';
  const app = document.getElementById('app');
  const pagePath = `../pages/${page}.js`;

  if (!pages[pagePath]) {
    app.innerHTML = '<h1>404 - Page not found</h1>';
    return;
  }

  const module = await pages[pagePath]();

  app.innerHTML = module.default();
  updateActiveNavLinks(page);
  updateMobileNavColor(page);
  if (page === 'authentication') initAuthentication();
};

export const initRouter = function () {
  window.addEventListener('hashchange', loadPage);
  loadPage();
};
