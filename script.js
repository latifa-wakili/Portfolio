// Toggle the navigation menu
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Enlarge certificate image on click
document.querySelectorAll('.certificate-image').forEach((image) => {
  image.addEventListener('click', () => {
    // Toggle a class that enlarges the image
    image.classList.toggle('enlarged');
  });
});

// Form validation and localStorage management
function validateForm() {
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const messageField = document.getElementById('message');
  const emailPattern = /^[^\s@]+@[^\s]+\.[^\s@]+$/;

  if (nameField.value === '' || emailField.value === '' || messageField.value === '') {
    alert('All fields are required.');
    return false;
  }

  if (!emailPattern.test(emailField.value)) {
    alert('Please enter a valid email address.');
    return false;
  }

  return true;
}

document.getElementById('contact-form').addEventListener('submit', (e) => {
  if (!validateForm()) {
    e.preventDefault();
  }
});

// Project popup management
const projects = [
  {
    title: 'A Roman Numeral Converter',
    description: 'A Roman Numeral Converter is a tool designed to translate Roman numerals into their equivalent decimal values and vice versa. This converter simplifies the process of understanding and working with Roman numerals, which are commonly used in historical contexts, clock faces, and some legal documents. By automating the conversion, the tool helps users quickly and accurately interpret and convert these ancient symbols.',
    image: 'R.N.C.jpg',
    liveLink: 'https://latifa-wakili.github.io/Roman-Numeral-Converter/',
    sourceLink: 'https://github.com/latifa-wakili/Roman-Numeral-Converter?tab=readme-ov-file',
  },
  {
    title: 'A Plondoriam checker',
    description: 'The Plondoriam Checker is a specialized tool built with HTML, CSS, and JavaScript, designed to validate and analyze Plondoriam sequences or data sets. This project demonstrates advanced logic and algorithm implementation, providing accurate results for specific input criteria. Its an excellent example of applying programming skills to create a niche solution for specialized tasks.',
    image: 'P.C.jpg',
    liveLink: 'https://latifa-wakili.github.io/first-js-repo/',
    sourceLink: 'https://github.com/latifa-wakili/first-js-repo/tree/feature-branch',
  },
  {
    title: 'Pokeman search app',
    description: 'The Pokémon Search App is a dynamic web application built with HTML, CSS, and JavaScript, designed to search and display detailed information about various Pokémon. Users can easily search by name or type, with the app fetching real-time data from a Pokémon API. This project demonstrates core web development skills and provides a fun, interactive way to explore the Pokémon universe.',
    image: 'Pik.png',
    liveLink: 'https://latifa-wakili.github.io/Pok-mon-Search-App/',
    sourceLink: 'https://github.com/latifa-wakili/Pok-mon-Search-App',
  },
  {
    title: 'A Cash Ragister',
    description: 'This Cash Register project is a simple yet effective demonstration of JavaScript s capabilities, built using HTML, CSS, and JavaScript. It showcases fundamental programming concepts by calculating and displaying the correct change due based on user input. The project serves as an excellent foundation for understanding how front-end technologies work together in creating interactive web applications.',
    image: 'C.R.png',
    liveLink: 'https://latifa-wakili.github.io/-Cash-Register/',
    sourceLink: 'https://github.com/latifa-wakili/-Cash-Register',
  },
];

document.querySelectorAll('.see-project').forEach((button) => {
  button.addEventListener('click', (e) => {
    const projectId = e.currentTarget.parentElement.getAttribute('data-id');
    const project = projects[projectId];

    document.getElementById('popup-title').textContent = project.title;
    document.getElementById('popup-description').textContent = project.description;
    document.getElementById('popup-image').src = project.image;
    document.getElementById('popup-live-link').href = project.liveLink;
    document.getElementById('popup-source-link').href = project.sourceLink;

    document.getElementById('project-popup').style.display = 'flex';
  });
});

function closePopup() {
  document.getElementById('project-popup').style.display = 'none';
  // Clear content to reset state
  document.getElementById('popup-title').textContent = '';
  document.getElementById('popup-description').textContent = '';
  document.getElementById('popup-image').src = '';
  document.getElementById('popup-live-link').href = '#';
  document.getElementById('popup-source-link').href = '#';
}

document.querySelector('.close-btn').addEventListener('click', closePopup);

window.addEventListener('click', (event) => {
  if (event.target === document.getElementById('project-popup')) {
    closePopup();
  }
});

// Ensure the popup resets correctly each time it's closed
window.addEventListener('unload', closePopup);

function toggleMenu() {
  document.querySelector('.header').classList.toggle('active');
}

document.getElementById('menuButton').addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-links a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.header').classList.remove('active');
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  if (formData.name) document.querySelector('#name').value = formData.name;
  if (formData.email) document.querySelector('#email').value = formData.email;
  if (formData.message) document.querySelector('#message').value = formData.message;

  document.querySelector('#contact-form').addEventListener('input', (e) => {
    const field = e.target;
    const data = JSON.parse(localStorage.getItem('formData')) || {};
    data[field.name] = field.value;
    localStorage.setItem('formData', JSON.stringify(data));
  });

  document.querySelector('#contact-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const messageField = document.querySelector('#message');
    const emailPattern = /^[^\s@]+@[^\s]+\.[^\s@]+$/;
    const errorElement = document.querySelector('#error-message');

    if (
      nameField.value.length <= 30
      && nameField.value !== ''
      && emailPattern.test(emailField.value)
      && emailField.value !== ''
      && messageField.value.length >= 50
      && messageField.value !== ''
    ) {
      errorElement.style.display = 'none';
      event.target.submit();
      localStorage.removeItem('formData');
    } else {
      errorElement.style.display = 'block';
    }
  });
});
