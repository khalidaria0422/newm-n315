'use strict';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';

export const initAuthentication = function () {
  document.addEventListener('submit', async (event) => {
    const form = event.target;
    if (form.id !== 'register-form' && form.id !== 'login-form') return;

    event.preventDefault();

    if (form.id === 'register-form') {
      const data = new FormData(form);
      const email = data.get('email').trim();
      const password = data.get('password');

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        form.reset();
        alert('Account created!');
      } catch (error) {
        console.error('Error creating user:', error);
        alert(`Registration failed. (${error.code})`);
      }
    } else {
      const data = new FormData(form);
      const email = data.get('email').trim();
      const password = data.get('password');

      try {
        await signInWithEmailAndPassword(auth, email, password);
        form.reset();
        alert('Logged in!');
      } catch (error) {
        console.error('Error logging in:', error);
        alert(`Login failed. (${error.code})`);
      }
    }
  });
};
