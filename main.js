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

function openModal(imgElement) {
  var modalImage = document.getElementById("modalImage");
  modalImage.src = imgElement.src; // Set the image source in the modal
}