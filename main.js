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

  const websiteURL = "https://addbot.netlify.app/";
  document.querySelector('#demoModal iframe').src = websiteURL;
  const modal = new bootstrap.Modal(document.getElementById('demoModal'));
  modal.show();
}
