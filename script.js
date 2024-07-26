// Function to toggle menu
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

// Event listener for menu anchor links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.menu').classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to create particles
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        container.appendChild(particle);
    }
}

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', createParticles);

// Get all buttons and modals
const buttons = document.querySelectorAll('.button');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

// Function to open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close modal
function closeModal(modal) {
    modal.style.display = 'none';
}

// Add click event to buttons
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.textContent.toLowerCase() + 'Modal';
        openModal(modalId);
    });
});

// Add click event to close buttons
closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        closeModal(this.closest('.modal'));
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

// Function to show certificate
function showCertificate() {
    openModal('certificateModal');
}

// Add certificate button if it doesn't exist
if (!document.querySelector('.button[onclick="showCertificate()"]')) {
    const certificateBtn = document.createElement('button');
    certificateBtn.className = 'button';
    certificateBtn.textContent = 'Certificate';
    certificateBtn.onclick = showCertificate;
    document.querySelector('.buttons').appendChild(certificateBtn);
}
