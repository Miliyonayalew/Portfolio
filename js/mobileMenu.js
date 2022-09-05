const menuItem = document.querySelector('.item-navigation');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.hamburger-menu');

function show() {
  menuItem.style.display = 'flex';
  menuItem.style.top = '0';
}

function close() {
  menuItem.style.top = '-200%';
}
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);