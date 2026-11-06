'use strict';

const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

export const updateActiveNavLinks = function (page) {
  document
    .querySelector('.nav-link--active-header')
    ?.classList.remove('nav-link--active-header');
  document
    .querySelector('.nav-link--active-mobile')
    ?.classList.remove('nav-link--active-mobile');

  document
    .getElementById(`${page}-header`)
    ?.classList.add('nav-link--active-header');
  document
    .getElementById(`${page}-mobile`)
    ?.classList.add('nav-link--active-mobile');
};

export const updateMobileNavColor = function (page) {
  const removeAllColors = () =>
    mobileNav.classList.remove(
      'mobile-nav--red',
      'mobile-nav--green',
      'mobile-nav--yellow',
      'mobile-nav--white',
    );

  switch (page) {
    case 'home':
      removeAllColors();
      mobileNav.classList.add('mobile-nav--red');
      break;
    case 'browse':
    case 'your-recipes':
      removeAllColors();
      mobileNav.classList.add('mobile-nav--green');
      break;
    case 'login':
      removeAllColors();
      mobileNav.classList.add('mobile-nav--yellow');
      break;
    case 'create-recipe':
    case 'your-recipe':
    case 'edit-recipe':
    default:
      removeAllColors();
      mobileNav.classList.add('mobile-nav--white');
      break;
  }
};

const toggleMobileNav = function () {
  hamburger.classList.toggle('hamburger--open');
  mobileNav.classList.toggle('mobile-nav--open');
};

// For mobile menu expansion effect
const setMobileNavCenter = function () {
  const rect = hamburger.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  mobileNav.style.setProperty('--hamburger-x', `${centerX}px`);
  mobileNav.style.setProperty('--hamburger-y', `${centerY}px`);
};

export const initNavigation = function () {
  hamburger.addEventListener('click', toggleMobileNav);
  window.addEventListener('resize', setMobileNavCenter);
  setMobileNavCenter();
};
