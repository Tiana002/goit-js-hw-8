import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData() {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
}
 function reloadPage() {
    if (dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
    }
 }

 function onFormSubmit(evt) {
    evt.preventDefault();
    console.log({ email: email.value, message: message.value });
    if (email.value === '' || message.value === '') {
        return alert('Будь ласка, заповніть усі поля!')
    }
    localStorage.removeItem(LOCAL_KEY);
    evt.currentTarget.reset();
    dataForm = {};
 }





