
// Sub Menu bits
function mySubMenu(i) {
  let subMenu = document.getElementById(`sub-menu-${i}`);
  subMenu.style.display = subMenu.style.display == "block" ? "none" : "block";
}

// Hamburger Menu bits
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  // Toggle the 'active' class on both the hamburger and the menu
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');

  // Toggle the aria-expanded attribute for accessibility
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !isExpanded);
});

