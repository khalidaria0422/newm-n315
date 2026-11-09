export default function authentication() {
  return `
      <div class="auth container-lg">
        <!-- Login Form -->
        <form id="login-form" class="auth__form">
          <h1 class="auth__title">Login Here!</h1>

          <input
            type="text"
            id="login-email"
            name="email"
            class="auth__input"
            placeholder="Email"
          />

          <input
            type="password"
            id="login-password"
            name="password"
            class="auth__input"
            placeholder="Password"
          />

          <div class="auth__actions">
            <button type="submit" data-auth-mode="login" class="btn btn--primary">
              Login
            </button>
  
            <button type="button" data-auth-mode="register" class="btn btn--secondary">Register</button>
          </div>
        </form>

        <!-- Register Form -->
        <form id="register-form" class="auth__form">
          <div class="auth__header">
            <p class="auth__eyebrow">Don't have an account?</p>
            <h1 class="auth__title">Sign Up!</h1>
          </div>

          <input
            type="text"
            id="first-name"
            name="first-name"
            class="auth__input"
            placeholder="First Name"
          />

          <input
            type="text"
            id="last-name"
            name="last-name"
            class="auth__input"
            placeholder="Last Name"
          />

          <input
            type="text"
            id="register-email"
            name="email"
            class="auth__input"
            placeholder="Email"
          />

          <input
            type="password"
            id="register-password"
            name="password"
            class="auth__input"
            placeholder="Password"
          />

          <div class="auth__actions">
            <button type="submit" data-auth-mode="register" class="btn btn--primary">
              Sign Up
            </button>

            <button type="button" data-auth-mode="login" class="btn btn--secondary">
              Login
            </button>
          </div>
        </form>
      </div>
  `;
}
