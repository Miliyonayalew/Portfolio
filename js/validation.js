const form = document.querySelector('.contact-form');
const email = document.querySelector('.email-address');
const error = document.querySelector('.error');
const reg = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

function validate(e) {
  const emailVal = email.value;
  const formData = {
    fullName: document.querySelector('.name').value,
    emailAddress: document.querySelector('.email-address').value,
    feedback: document.querySelector('.textarea').value,
  };

  if (emailVal.match(reg)) {
    localStorage.setItem('DATA', JSON.stringify(formData));
    error.style.display = 'none';
    email.style.border = '1px solid #d0d9d4';
    return true;
  }
  error.style.display = 'block';
  error.innerHTML = 'Email should only contain lowercase letters';
  email.style.border = '1px solid rgb(204, 11, 11)';
  e.preventDefault();
  return false;
}

form.addEventListener('submit', validate);
const getInfo = localStorage.getItem('DATA');
const getContactInfo = JSON.parse(getInfo);
window.addEventListener('load', () => {
  if (localStorage.getItem('DATA')) {
    document.querySelector('.name').value = getContactInfo.fullName;
    document.querySelector('.email-address').value = getContactInfo.emailAddress;
    document.querySelector('.textarea').value = getContactInfo.feedback;
  }
});