
// Function to toggle menu
function toggleMenu() {
  document.querySelector('.header').classList.toggle('active');
}



// Event listener for menu anchor links
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
  // بارگذاری داده‌ها از localStorage در صورت وجود
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  if (formData.name) document.querySelector("#name").value = formData.name;
  if (formData.email) document.querySelector("#email").value = formData.email;
  if (formData.message) document.querySelector("#message").value = formData.message;

  // ثبت رویداد برای ذخیره داده‌ها در localStorage
  document.querySelector("#contact-form").addEventListener('input', (e) => {
    const field = e.target;
    const data = JSON.parse(localStorage.getItem('formData')) || {};
    data[field.name] = field.value;
    localStorage.setItem('formData', JSON.stringify(data));
  });

  // مدیریت ارسال فرم
  document.querySelector("#contact-form").addEventListener('submit', (event) => {
    event.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم

    let nameField = document.querySelector("#name");
    let emailField = document.querySelector("#email");
    let messageField = document.querySelector("#message");
    let emailPattern = /^[^\s@]+@[^\s]+\.[^\s@]+$/;
    const errorElement = document.querySelector('#error-message');

    // اعتبارسنجی فرم
    if (nameField.value.length <= 30 && nameField.value !== "" &&
        emailPattern.test(emailField.value) && emailField.value !== "" &&
        messageField.value.length >= 50 && messageField.value !== "") {

      // پاک‌کردن پیام خطا
      errorElement.style.display = 'none';
      
      // ارسال فرم به Formspree
      event.target.submit();

      // پاک‌کردن داده‌ها از localStorage
      localStorage.removeItem('formData');
      
    } else {
      // نمایش پیام خطا
      errorElement.style.display = 'block';
    }
  });
});


const projects = [
  {
      title: "Effective",
      description: "A Roman Numeral Converter",
      image: "R.N.C.jpg",
      liveLink: "https://example.com/live1",
      sourceLink: "https://github.com/example/repo1"
  },
  {
      title: "Effective",
      description: "A Plondoriam checker",
      image: "P.C.jpg",
      liveLink: "https://example.com/live2",
      sourceLink: "https://github.com/example/repo2"
  },
  {
      title: "Effective",
      description: "A platform for e-learning website",
      image: "Pik.png",
      liveLink: "https://example.com/live3",
      sourceLink: "https://github.com/example/repo3"
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