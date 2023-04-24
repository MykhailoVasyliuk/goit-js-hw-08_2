
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

form.addEventListener('input', throttle(toFormInput, 500));

function toFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

if (formData.message) {
    messageInput.value = formData.message;
}
if (formData.email) {
    emailInput.value = formData.email;
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);

    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

