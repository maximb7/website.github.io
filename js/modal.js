document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to all project cards after the DOM is fully loaded
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            openProjectModal(project);
        });
    });

    // Add event listener for closing the modal
    document.getElementById('close-modal').addEventListener('click', function() {
        closeModal();
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('project-modal')) {
            closeModal();
        }
    });
});

// Function to open the modal with dynamic content
function openProjectModal(project) {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const additionalImagesDiv = document.getElementById("additional-images");
    const modalImage = document.getElementById("modal-image");

    additionalImagesDiv.innerHTML = ''; // Reset additional images container

    // Get project details
    const imageSrc = project.querySelector('.image-container img').src;
    const title = project.querySelector('h3').textContent;
    const description = project.querySelector('p').textContent;

    // Set modal content based on the project clicked
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // Hide the main image initially
    modalImage.style.display = 'none';

    // Move the main image into the additional images container
    const mainImage = document.createElement('img');
    mainImage.src = imageSrc;
    mainImage.alt = 'Main Image';
    mainImage.classList.add('modal-image');
    additionalImagesDiv.appendChild(mainImage);

    // Get extra images from the data attribute if it exists
    const extraImages = project.getAttribute('data-extra-images');
    if (extraImages) {
        const extraImagesArray = extraImages.split(',');
        extraImagesArray.forEach(imagePath => {
            const img = document.createElement('img');
            img.src = imagePath.trim(); // Ensure there's no extra space
            img.alt = 'Additional Image';
            img.classList.add('modal-image'); // Add class for styling
            additionalImagesDiv.appendChild(img);
        });
    }

    // Add modal-images-container class to ensure layout is correct
    additionalImagesDiv.classList.add('modal-images-container');

    // Show the modal and make the main image visible
    modal.style.display = 'flex';
    mainImage.style.display = 'block'; // Show the main image after modal is opened
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("project-modal");
    modal.style.display = 'none'; // Hide the modal
}

