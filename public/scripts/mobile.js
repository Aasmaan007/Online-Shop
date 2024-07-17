const mobileMenuBtnElement = document.getElementById('mobile-menu-btn');
const mobileMenuElement = document.getElementById('mobile-menu');

function toggleMobileMenu() {
  mobileMenuElement.classList.toggle('open');
  // adds or removes open class to mobilemenuelement
}

mobileMenuBtnElement.addEventListener('click', toggleMobileMenu);