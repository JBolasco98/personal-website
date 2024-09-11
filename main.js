// Ensure the script runs after the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.nav-link[href="#about"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    const profilePic = document.getElementById('nav-profile-pic');
    const heroSection = document.querySelector('.hero');
    const aboutSection = document.getElementById('about');

    // Show profile picture beside nav-brand
    profilePic.classList.remove('d-none');

    // Hide hero section
    heroSection.classList.add('d-none');

    // Show about section
    aboutSection.classList.remove('d-none');
  });
});

