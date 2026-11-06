'use strict';

const homePage = `      <section class="hero container">
<div class="hero__content">
  <h1 class="hero__heading">Start fundraising on ComeFundMe</h1>
  <p class="hero__description">
    Raise funds for your cause or support others in need. Learn more
    about how ComeFundMe works and get started today.
  </p>
  <a href="#" class="btn btn--primary">Start a ComeFundMe</a>
</div>
<img
  src="images/hero.jpg"
  alt="A mother and a son"
  class="hero__image"
/>
</section>

<section class="benefits-bar">
<p class="benefits-bar__benefit">
  <i class="ph ph-globe-hemisphere-west"></i>Help people all around the
  world
</p>
<p class="benefits-bar__benefit">
  <i class="ph ph-gear"></i>Easy to manage your fundraising campaigns
</p>
<p class="benefits-bar__benefit">
  <i class="ph ph-shield-check"></i>Secure platform for all your
  fundraising needs
</p>
</section>`;

const donatePage = `      <section class="donate container">
<p class="donate__eyebrow">Make donations with ease</p>
<h2 class="donate__heading">
  Donate to medical & emergency fundraising
</h2>

<p class="donate__results">Showing 6 of 4,202,398 results</p>
<div class="donate__grid">
  <a href="#" class="donate__card">
    <div class="donate__card-image-wrapper">
      <img
        src="images/card-01.jpg"
        alt="Medical patient"
        class="donate__card-image"
      />
    </div>
    <h3 class="donate__card-heading">
      Support John Doe and his family
    </h3>
    <p class="donate__card-text">$40,123 raised</p>
  </a>

  <a href="#" class="donate__card">
    <div class="donate__card-image-wrapper">
      <img
        src="images/card-02.jpg"
        alt="Medical patient"
        class="donate__card-image"
      />
    </div>
    <h3 class="donate__card-heading">
      Support John Doe and his family
    </h3>
    <p class="donate__card-text">$40,123 raised</p>
  </a>

  <a href="#" class="donate__card">
    <div class="donate__card-image-wrapper">
      <img
        src="images/card-03.jpg"
        alt="Medical patient"
        class="donate__card-image"
      />
    </div>
    <h3 class="donate__card-heading">
      Support John Doe and his family
    </h3>
    <p class="donate__card-text">$40,123 raised</p>
  </a>

  <a href="#" class="donate__card">
    <div class="donate__card-image-wrapper">
      <img
        src="images/card-04.jpg"
        alt="Medical patient"
        class="donate__card-image"
      />
    </div>
    <h3 class="donate__card-heading">
      Support John Doe and his family
    </h3>
    <p class="donate__card-text">$40,123 raised</p>
  </a>

  <a href="#" class="donate__card">
    <div class="donate__card-image-wrapper">
      <img
        src="images/card-05.jpg"
        alt="Medical patient"
        class="donate__card-image"
      />
    </div>
    <h3 class="donate__card-heading">
      Support John Doe and his family
    </h3>
    <p class="donate__card-text">$40,123 raised</p>
  </a>

  <a href="#" class="donate__card">
    <div class="donate__card-image-wrapper">
      <img
        src="images/card-06.jpg"
        alt="Medical patient"
        class="donate__card-image"
      />
    </div>
    <h3 class="donate__card-heading">
      Support John Doe and his family
    </h3>
    <p class="donate__card-text">$40,123 raised</p>
  </a>
</div>

<nav class="donate__pagination">
  <ul class="donate__pagination-list">
    <li>
      <a
        href="#"
        class="donate__pagination-link donate__pagination-link--active"
        >1</a
      >
    </li>
    <li><a href="#" class="donate__pagination-link">2</a></li>
    <li><a href="#" class="donate__pagination-link">3</a></li>
    <li><a href="#" class="donate__pagination-link">4</a></li>
    <li><a href="#" class="donate__pagination-link">5</a></li>
  </ul>
</nav>
</section>`;

const fundraisePage = ``;
const aboutPage = ``;
const ctaPage = ``;

const pages = {
  home: homePage,
  donate: donatePage,
  fundraise: fundraisePage,
  about: aboutPage,
  cta: ctaPage,
};

export const changePage = (page) =>
  (document.querySelector('#app').innerHTML = pages[page]);
