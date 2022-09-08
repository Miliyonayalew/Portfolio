const form = document.querySelector('.contact-form');
const email = document.querySelector('.email-address');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  const emailVal = email.value;
  const reg = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

  if (emailVal.match(reg)) {
    return true;
  }
  error.style.display = 'block';
  error.innerHTML = 'Email should only contain lowercase letters';
  email.style.border = '1px solid rgb(204, 11, 11)';
  e.preventDefault();
  return false;
});