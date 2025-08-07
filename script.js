// 🎯 PART 1: Event Handling
const clickBtn = document.getElementById("clickBtn");
const hoverBox = document.getElementById("hoverBox");
const keyInput = document.getElementById("keyInput");
const eventFeedback = document.getElementById("eventFeedback");

// Click event
clickBtn.addEventListener("click", () => {
  eventFeedback.textContent = "🎉 You clicked the button!";
});

// Mouseover event
hoverBox.addEventListener("mouseover", () => {
  eventFeedback.textContent = "🖱️ You're hovering!";
});

// Keyup event
keyInput.addEventListener("keyup", (e) => {
  eventFeedback.textContent = `⌨️ You typed: ${e.target.value}`;
});

// 🎮 PART 2: Interactive Features

// 1. Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Collapsible FAQ
const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// 📋✅ PART 3: Form Validation
const form = document.getElementById("registerForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("formSuccess").textContent = "";

  let valid = true;

  // Name validation
  if (nameField.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailField.value)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation
  if (passwordField.value.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
