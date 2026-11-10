export default function authentication() {
  return `
      <div class="auth container-lg">
        <!-- Login Form -->
        <form novalidate id="login-form" class="auth__form">
          <h1 class="auth__title">Login Here!</h1>

          <div class="auth__field">
            <input
              type="email"
              id="login-email"
              name="email"
              class="auth__input"
              placeholder="Email"
              aria-describedby="login-email-error"
              required
            />

            <span class="auth__error" id="login-email-error" hidden></span>
          </div>

          <div class="auth__field">
            <input
              type="password"
              id="login-password"
              name="password"
              class="auth__input"
              placeholder="Password"
              aria-describedby="login-password-error"
              required
            />

            <span class="auth__error" id="login-password-error" hidden></span>
          </div>

          <div class="auth__actions">
            <button
              type="submit"
              data-auth-mode="login"
              class="btn btn--primary"
            >
              Login
            </button>

            <button
              type="button"
              data-auth-mode="register"
              class="btn btn--secondary"
            >
              Register
            </button>
          </div>
        </form>

        <!-- Register Form -->
        <form
          id="register-form"
          class="auth__form auth__form--active"
          novalidate
        >
          <div>
            <p class="auth__eyebrow">Don't have an account?</p>
            <h1 class="auth__title">Sign Up!</h1>
          </div>

          <div class="auth__field">
            <input
              type="text"
              id="first-name"
              name="first-name"
              class="auth__input"
              placeholder="First Name"
              required
            />

            <span class="auth__error" id="first-name-error" hidden></span>
          </div>

          <div class="auth__field">
            <input
              type="text"
              id="last-name"
              name="last-name"
              class="auth__input"
              placeholder="Last Name"
              required
            />

            <span class="auth__error" id="last-name-error" hidden></span>
          </div>

          <div class="auth__field">
            <input
              type="email"
              id="register-email"
              name="email"
              class="auth__input"
              placeholder="Email"
              aria-describedby="register-email-error"
              required
            />

            <span class="auth__error" id="register-email-error" hidden></span>
          </div>

          <div class="auth__field">
            <input
              type="password"
              id="register-password"
              name="password"
              class="auth__input"
              placeholder="Password"
              aria-describedby="register-password-error"
              minlength="8"
              maxlength="64"
              required
            />

            <span class="auth__error" id="register-password-error" hidden></span>
          </div>

          <div class="auth__actions">
            <button
              type="submit"
              data-auth-mode="register"
              class="btn btn--primary"
            >
              Sign Up
            </button>

            <button
              type="button"
              data-auth-mode="login"
              class="btn btn--secondary"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    
  `;
}
