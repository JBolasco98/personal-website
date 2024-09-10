function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));

  // Show the selected section
  document.getElementById(sectionId).classList.add('active');
}

// Initialize by showing only the "Overview" section
document.addEventListener('DOMContentLoaded', () => {
  showSection('overview');
});