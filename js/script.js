// This script handles the email validation and form submission for a sign-up page

const form = document.querySelector("#form");
const successMessage = document.querySelector(".success-message");
const signUpPage = document.querySelector(".main-container");
const dismissMessage = document.querySelector(".dismiss-message");
const emailInput = document.querySelector("#email");
const subscribeBtn = document.querySelector(".subscribe");

// Event listener for email input to validate the email format and toggle the subscribe button state
emailInput.addEventListener('input', function () {
  const userEmail = emailInput.value.trim(); // Get the email input value and remove leading/trailing whitespace
  if (validateEmail(userEmail)) {
    subscribeBtn.classList.add('active'); // Add 'active' class if email is valid
  } else {
    subscribeBtn.classList.remove('active'); // Remove 'active' class if email is invalid
  }
});


// Event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  const emailInput = document.querySelector('#email');
  const userEmail = emailInput.value.trim(); // Get the email input value and remove leading/trailing whitespace
  const emailError = document.querySelector('#email-error'); // Select the error message element

  if (validateEmail(userEmail)) {
    emailError.textContent = ''; // Clear any previous error message
    emailInput.classList.remove('error'); // Remove error class if it exists
    const registeredEmail = document.querySelector('#registered-email');
    registeredEmail.textContent = userEmail.toLowerCase(); // Display the entered email in the success message

    signUpPage.classList.add('hidden'); // Hide the sign-up page
    successMessage.classList.remove('hidden'); // Show the success message
    emailInput.value = ''; // Clear the email input field
  } else {
    emailInput.classList.add('error'); // Add error class to the input field

    if (userEmail === '') {
      emailError.textContent = 'Email address is required.'; // Show error if input is empty
    } else {
      emailError.textContent = 'Valid email address required.'; // Show error for invalid email
    }
  }

});

dismissMessage.addEventListener('click', function () {
  successMessage.classList.add('hidden'); // Hide the success message
  signUpPage.classList.remove('hidden'); // Show the sign-up page again
  subscribeBtn.classList.remove('active'); // Remove 'active' class if email is invalid
});

// Function to validate the email format using a regular expression
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}