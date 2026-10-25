import shop from '../pages/shop.js';
import guides from '../pages/guides.js';
import about from '../pages/about.js';
import contact from '../pages/contact.js';
import signin from '../pages/signin.js';
import signup from '../pages/signup.js';

const pages = {
  shop,
  guides,
  about,
  contact,
  signin,
  signup,
};

export const loadPage = (page) => {
  document.querySelector('#app').innerHTML = (pages[page] || pages['shop'])();
};
