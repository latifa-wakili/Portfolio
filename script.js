document.querySelectorAll('.certificate-image').forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('enlarged');
  });
});

function toggleMenu() {
  document.querySelector('.header').classList.toggle('active');
}

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
  if (formData.name) document.querySelector("#name").value = formData.name;
  if (formData.email) document.querySelector("#email").value = formData.email;
  if (formData.message) document.querySelector("#message").value = formData.message;

  document.querySelector("#contact-form").addEventListener('input', (e) => {
    const field = e.target;
    const data = JSON.parse(localStorage.getItem('formData')) || {};
    data[field.name] = field.value;
    localStorage.setItem('formData', JSON.stringify(data));
  });

  document.querySelector("#contact-form").addEventListener('submit', (event) => {
    event.preventDefault();

    let nameField = document.querySelector("#name");
    let emailField = document.querySelector("#email");
    let messageField = document.querySelector("#message");
    let emailPattern = /^[^\s@]+@[^\s]+\.[^\s@]+$/;
    const errorElement = document.querySelector('#error-message');

    if (nameField.value.length <= 30 && nameField.value !== "" &&
        emailPattern.test(emailField.value) && emailField.value !== "" &&
        messageField.value.length >= 50 && messageField.value !== "") {

      errorElement.style.display = 'none';
      
      event.target.submit();

      localStorage.removeItem('formData');
      
    } else {
      errorElement.style.display = 'block';
    }
  });
});

const projects = [
  {
      title: "Effective",
      description: "A Roman Numeral Converter",
      image: "R.N.C.jpg",
      liveLink: "https://latifa-wakili.github.io/Roman-Numeral-Converter/",
      sourceLink: "https://github.com/latifa-wakili/Roman-Numeral-Converter?tab=readme-ov-file"
  },
  {
      title: "Effective",
      description: "A Plondoriam checker",
      image: "P.C.jpg",
      liveLink: "https://latifa-wakili.github.io/first-js-repo/",
      sourceLink: "https://github.com/latifa-wakili/first-js-repo/tree/feature-branch"
  },
  {
      title: "Effective",
      description: "Pokeman search app",
      image: "Pik.png",
      liveLink: "https://latifa-wakili.github.io/Pok-mon-Search-App/",
      sourceLink: "https://github.com/latifa-wakili/Pok-mon-Search-App"
  },
  {
    title: "Effective",
    description: "A Cash Ragister",
    image: "C.R.png",
    liveLink: "https://latifa-wakili.github.io/-Cash-Register/",
    sourceLink: "https://github.com/latifa-wakili/-Cash-Register"
}
];

document.querySelectorAll('.see-project').forEach(button => {
  button.addEventListener('click', () => {
      const projectId = button.parentElement.getAttribute('data-id');
      const project = projects[projectId];

      document.getElementById('popup-title').textContent = project.title;
      document.getElementById('popup-description').textContent = project.description;
      document.getElementById('popup-image').src = project.image;
      document.getElementById('popup-live-link').href = project.liveLink;
      document.getElementById('popup-source-link').href = project.sourceLink;

      document.getElementById('project-popup').style.display = 'flex';
  });
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('project-popup').style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === document.getElementById('project-popup')) {
      document.getElementById('project-popup').style.display = 'none';
  }
});
