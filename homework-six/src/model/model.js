'use strict';

const pages = import.meta.glob('../pages/*.js');

export const loadPage = async function (page) {
  const app = document.getElementById('app');
  const pagePath = `../pages/${page}.js`;

  if (!pages[pagePath]) {
    app.innerHTML = '<h1>404 - Page not found</h1>';
    return;
  }

  const module = await pages[pagePath]();

  app.innerHTML = module.default();
};
