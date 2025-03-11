const hamMenu = document.querySelector('.ham-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle menu visibility when the hamburger is clicked
hamMenu.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevents click from propagating to document
  const isActive = navLinks.classList.contains('active');
  if (isActive) {
    navLinks.classList.remove('active');
    hamMenu.classList.remove('active');
  } else {
    navLinks.classList.add('active');
    hamMenu.classList.add('active');
  }
});

// Close the menu if clicking outside of it
document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !hamMenu.contains(event.target)) {
    navLinks.classList.remove('active');
    hamMenu.classList.remove('active');
  }
});
