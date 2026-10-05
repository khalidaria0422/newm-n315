'use strict';

export default `
<section class="section container landing">
<h1 class="landing__heading">Welcome to Panjsher University</h1>
<p class="landing__subheading">
  Your gateway to quality education and research opportunities.
</p>
<a href="#login" class="btn" id="modalShow">Log In</a>
</section>

<div class="modal center center--full hidden">
<form novalidate class="modal__content">
  <i class="ph ph-x modal__icon" id="modalClose"></i>

  <h2 class="modal__heading">Log In</h2>

  <div class="modal__field">
    <label for="email" class="modal__label">Email</label>
    <input type="text" id="email" minLength="5" maxLength="254" class="modal__input" />
  </div>

  <div class="modal__field">
    <label for="password" class="modal__label">Password</label>
    <input type="password" id="password" minLength="8" maxLength="64" class="modal__input" />
  </div>

  <button type="submit" class="btn" id="modalSubmit">Log In</button>
</form>
</div>
`;
