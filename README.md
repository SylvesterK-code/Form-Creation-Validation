Form Creation and Validation
🧠 Project Overview

This project — Deep Dive into JavaScript — focuses on creating a user registration form with input validation using vanilla JavaScript. It demonstrates core front-end concepts such as DOM manipulation, form validation, and user feedback handling.

By completing this project, you gain practical experience in:

Validating user inputs with JavaScript string methods and conditions.

Preventing invalid data submissions.

Providing user-friendly, real-time feedback.

Structuring clean, readable JavaScript within the DOMContentLoaded event.

📂 Repository Structure
Form-Creation-Validation/
│
├── index.html        # Form structure and markup
├── style.css         # Styling for layout and design
└── script.js         # JavaScript validation logic

⚙️ Features Implemented

Form Validation

Username must be at least 3 characters long.

Email must include both "@" and ".".

Password must be at least 8 characters long.

DOM Manipulation

Inputs and form elements accessed via document.getElementById().

Real-time feedback displayed dynamically in a styled feedback section.

User Feedback

Success message displayed in green (#28a745).

Error messages displayed in red (#dc3545).

Feedback div visibility toggled with style.display = "block".

Event Handling

JavaScript runs only after DOM loads using:

document.addEventListener('DOMContentLoaded', function() { ... });


Form submission handled using:

form.addEventListener('submit', function(event) { ... });


Prevents default form submission using event.preventDefault().

🧩 JavaScript Validation Logic Summary
if (username.length < 3) {
  isValid = false;
  messages.push('Username must be at least 3 characters long.');
}

if (!email.includes('@') || !email.includes('.')) {
  isValid = false;
  messages.push('Please enter a valid email address.');
}

if (password.length < 8) {
  isValid = false;
  messages.push('Password must be at least 8 characters long.');
}


If validation passes:

feedbackDiv.textContent = 'Registration successful!';
feedbackDiv.style.color = '#28a745';


If validation fails:

feedbackDiv.innerHTML = messages.join('<br>');
feedbackDiv.style.color = '#dc3545';

💻 How to Run the Project

Clone the repository:

git clone https://github.com/SylvesterK-code/Form-Creation-Validation.git


Navigate into the folder:

cd Form-Creation-Validation


Open index.html in your web browser.

Fill in the form fields and click Register to see validation feedback.

🧾 Example Output

Valid Input:

“Registration successful!” (green text)

Invalid Input:

“Username must be at least 3 characters long.”
“Please enter a valid email address.”
“Password must be at least 8 characters long.”
(red text)

📘 Learning Objectives

By completing this project, you should be able to:

Implement client-side validation in JavaScript.

Manipulate the DOM effectively.

Handle form submission events correctly.

Display dynamic feedback messages to improve user experience.

🧑‍💻 Author

Sylvester Kormla Nyadzinnor
GitHub Profile

Qualified Computing and ICT Teacher | Software Developer