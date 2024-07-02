document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.querySelector('.header__burger-btn');
  const closeBtn = document.querySelector('.nav-menu-mobile__close-btn');
  const navMenu = document.querySelector('.nav-menu-mobile-container');

  openBtn.addEventListener('click', function () {
    navMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', function () {
    navMenu.classList.add('hidden');
    document.body.style.overflow = '';
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      navMenu.classList.add('hidden');
    }
  });
});
