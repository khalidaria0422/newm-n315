'use strict';

export default `      <section class="section container">
<h2 class="section__title">Contact Us</h2>
<p class="section__description">
  Get in touch with us for any inquiries or project discussions.
</p>

<form class="contact-form">
  <div class="contact-form__field">
    <label for="name">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      required
      class="contact-form__input"
    />
  </div>

  <div class="contact-form__field">
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      class="contact-form__input"
    />
  </div>

  <div class="contact-form__field">
    <label for="message">Message</label>
    <textarea
      id="message"
      name="message"
      rows="6"
      required
      class="contact-form__input contact-form__textarea"
    ></textarea>
  </div>

  <button type="submit" class="btn">Send Message</button>
</form>
</section>`;
