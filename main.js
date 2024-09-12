const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSectionId = link.getAttribute('href').substring(1);


    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
    });


    document.getElementById(targetSectionId).style.display = 'block';
  });
});

function openModal(imgElement) {
  var modalImage = document.getElementById("modalImage");
  modalImage.src = imgElement.src; // Set the image source in the modal
}

function openDemo() {
  // const demoModal = new bootstrap.Modal(document.getElementById('Adbot.html'));
  // demoModal.show();
  window.open('addbotproject/ADbot.html', '_blank');
}
