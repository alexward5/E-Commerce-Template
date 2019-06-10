const socialIcons = document.querySelector('.social-icons');
const toggleButton = document.querySelector('.fa-bars');
const toggleMenu = document.querySelector('.toggle-menu');

// collapse nav menu when screen size is less than 1100px
function setMenu() {
  // fire when above 1203
  if (document.documentElement.clientWidth > 1084) {
    socialIcons.innerHTML = '<i class="fab fa-facebook-square icon"></i><i class="fab fa-twitter-square icon"></i><i class="fab fa-instagram icon"></i>';
    toggleMenu.classList.add('closed');
  }
  // fire when below 1203
  else {
    socialIcons.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

window.addEventListener('DOMContentLoaded', setMenu);

window.addEventListener('resize', setMenu, true);

socialIcons.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-bars')) {
    toggleMenu.classList.toggle('closed');
  }
});
