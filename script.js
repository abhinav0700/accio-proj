const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    if (email.value === '' || password.value === '') {
        alert('Please fill in both email and password fields.');
    } else {
      if(validateEmail(email.value) && password.value.length >= 8) {  

        alert('Form submitted successfully!');
        // Here you can add code to actually submit the form if needed
    }
      else {
        alert('Please enter a valid email address.');
      }
    }
});
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

