document.addEventListener('DOMContentLoaded', function() {
  // Form Selection
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Form Submission and Event Prevention
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve User Inputs and Trim
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Initialize Validation Variables
    let isValid = true;
    const messages = [];

    // Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // // Email Validation
    // if (!email.includes('@') || !email.includes('.')) {
    //   isValid = false;
    //   messages.push('Please enter a valid email address.');
    // }


    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Email must include both "@" and "." characters.');
    } else {
      // Optional: ensure '@' appears before '.'
      const atIndex = email.indexOf('@');
      const dotIndex = email.lastIndexOf('.');
      if (atIndex > dotIndex) {
        isValid = false;
        messages.push('The "." must appear after the "@".');
      }
    }

    // Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Feedback Display Logic
    feedbackDiv.style.display = 'block';
    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745';
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545';
    }
  });
});

