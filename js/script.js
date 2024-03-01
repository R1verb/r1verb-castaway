const mobileMenu = document.querySelector('.burger_menu');
const navList = document.querySelector('.header_nav');
const bodyScroll = document.querySelector('body');
const mobileMenuLinks = document.querySelectorAll('.nav_link');

function closeMenu() {
  mobileMenu.classList.remove('burger_menu-active');
  navList.classList.remove('header_nav-active');
  bodyScroll.classList.remove('scroll');
}

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('burger_menu-active');
  navList.classList.toggle('header_nav-active');
  bodyScroll.classList.toggle('scroll');

  if (mobileMenu.classList.contains('burger_menu-active')) {
    window.scrollTo(0, 0);
  }
});

window.addEventListener('resize', closeMenu);

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('load', () => {
  closeMenu();
  window.scrollTo(0, 0);
});
