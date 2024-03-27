const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const loginButton = document.getElementById('login');

function redirectToHomePage() {
  window.location.href = `index.html`;
}

function onLogin() {
  if (
    emailInput.value === 'admin@admin.com' &&
    passwordInput.value == '123456'
  ) {
    alert('Login Successful!');
    isLoggedIn = true;
    redirectToHomePage();
  } else {
    alert('Login Failed. Please enter proper credentials');
    emailInput.value = '';
    passwordInput.value = '';
  }
}
