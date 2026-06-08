let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// --- ADD THIS NEW CODE BELOW ---

// Select all the links inside the navbar
let navLinks = document.querySelectorAll('.navbar a');

// Tell each link to close the menu when clicked
navLinks.forEach(link => {
  link.onclick = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
});
