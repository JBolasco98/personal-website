const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSectionId = link.getAttribute('href').substring(1); // Extract ID from href

    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
    });

    // Show the target section
    document.getElementById(targetSectionId).style.display = 'block';
  });
});
