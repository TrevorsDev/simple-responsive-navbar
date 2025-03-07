const hamMenu = document.querySelector('.ham-menu');

const navLinks = document.querySelector('.nav-links');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
})