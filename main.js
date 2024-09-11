const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = e.target.getAttribute('data-section');

    // Hide all sections
    sections.forEach(section => {
      section.style.display = 'none';
    });

    // Show the target section
    document.getElementById(targetSection).style.display = 'block';
  });
});