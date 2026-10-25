import '../scss/style.scss';
import { loadPage } from './model.js';
import { initIcons } from './icons.js';

const init = () => {
  loadPage('shop');

  window.addEventListener('hashchange', () => {
    const page = window.location.hash.replace('#', '');
    loadPage(page);
  });
};

initIcons();
init();
