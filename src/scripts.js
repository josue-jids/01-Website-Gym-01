// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  // Toggle the 'active' class on nav-menu when hamburger is clicked
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Optional: Close the menu when a link is clicked (for better UX on mobile)
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

}); // End of script DOMContentLoaded
