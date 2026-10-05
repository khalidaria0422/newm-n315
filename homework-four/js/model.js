'use strict';

import landing from '../pages/landing.js';
import home from '../pages/home.js';

// Function to load the content of a page based on the hash in the URL
export const loadPages = (hash) => {
  let pageContent = '';

  switch (hash) {
    case 'landing':
      pageContent = landing;
      break;
    case 'home':
      pageContent = home;
      break;
    default:
      pageContent = landing;
  }

  document.getElementById('app').innerHTML = pageContent;
};
