// Wrap in DOMContentLoaded Event
// Ensure the script runs only after the DOM has finished loading:
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

// Add Event Listener for Submission
// Prevent the default form submission and prepare for validation
  form.addEventListener('submit', (event) => {
    event.preventDefault();

// Retrieve and Trim Input Values
// Fetch the user’s input and clean up whitespace
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

// Initialize Validation Variables
// We’ll keep track of overall validity and messages:
    let isValid = true;
    const messages = [];

    // Username validation
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // // Email validation
    // if (!email.includes('@') || !email.includes('.')) {
    //   isValid = false;
    //   messages.push('Please enter a valid email address.');
    // }

        // Email validation (explicit @ and . check)
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

    // Password validation
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Display feedback
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
