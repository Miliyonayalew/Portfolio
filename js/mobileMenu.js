const menuItem = document.querySelector('.item-navigation');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.hamburger-menu');

function show() {
  menuItem.classList.toggle('visible');
  closeMenu.style.display = 'flex';
}

function close() {
  menuItem.classList.remove('visible');
  closeMenu.style.display = 'none';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
menuItem.addEventListener('click', close);