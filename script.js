const hamMenu = document.querySelector('.ham-menu');
const navLinks = document.querySelector('.nav-links');

hamMenu.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevents the click from bubbling up to document
  hamMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !hamMenu.contains(event.target)) {
    hamMenu.classList.remove('active');
    navLinks.classList.remove('active');
  }
});
