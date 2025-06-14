// const form = document.querySelector('.form');
// const successMessage = document.querySelector('.success-message');

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Simulate a successful form submission
//     setTimeout(() => {
//         successMessage.style.display = 'block'; // Show the success message
//         form.reset(); // Reset the form fields
//     }, 1000); // Simulate a delay for the submission
// });

const form = document.querySelector('#form');
const successMessage = document.querySelector('.success-message');
const signUpPage = document.querySelector('.main-container');
const dismissMessage = document.querySelector('.dismiss-message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    signUpPage.classList.add('hidden'); // Hide the sign-up page
    successMessage.classList.remove('hidden'); // Show the success message
});
dismissMessage.addEventListener('click', function() {
    successMessage.classList.add('hidden'); // Hide the success message
    signUpPage.classList.remove('hidden'); // Show the sign-up page again
});