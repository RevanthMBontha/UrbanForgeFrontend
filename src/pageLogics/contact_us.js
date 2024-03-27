import { getCurrentTime } from '../common/getCurrentTime.js';

const toastTrigger = document.getElementById('liveToastBtn');
const toastElement = document.getElementById('liveToast');

const toastTimeContainer = document.getElementById('time_now');
const toastMessageContainer = document.getElementById('toast_message');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement);
  toastTrigger.addEventListener('click', () => {
    // Adding current time to the toast
    let currentTime = getCurrentTime();
    toastTimeContainer.innerHTML = `at <small>${currentTime}</small>`;

    if (nameInput.value === '') {
      toastMessageContainer.innerHTML = 'Please enter a valid name';
    } else if (emailInput.value === '') {
      toastMessageContainer.innerHTML = 'Please enter a valid email';
    } else if (phoneInput.value === '') {
      toastMessageContainer.innerHTML = 'Please enter a valid phone number';
    } else if (messageInput.value === '') {
      toastMessageContainer.innerHTML = 'Please enter a message to send us';
    } else {
      toastMessageContainer.innerHTML =
        'Hey there! We have received your message and will get back to you soon.';

      //Resetting the inputs
      nameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
      messageInput.value = '';
    }
    toastBootstrap.show();
  });
}
