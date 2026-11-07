const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('re-password');
const bio = document.getElementById('bio');
const charCount = document.getElementById('charCount');
const submitBtn = document.querySelector('.submit');

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function checkValidation(event) {
    const field = event.target;
    let fieldValid = true;

    // Empty field validation
    if (!field.value.trim()) {
        fieldValid = false;
    }

    // Email validation
    if (field.id === 'email' && field.value && !isValidEmail(field.value)) {
        fieldValid = false;
    }

    // Password validation
    if (field.id === 'password' && field.value.length < 6) {
        fieldValid = false;
    }

    // Confirm password validation
    if (field.id === 're-password' && field.value !== password.value) {
        fieldValid = false;
    }

    // Show/Hide error for current field
    if (fieldValid) {
        field.nextElementSibling.classList.add('hide-class');
        field.classList.remove('error-border');
    } else {
        field.nextElementSibling.classList.remove('hide-class');
        field.classList.add('error-border');
    }

    // Check entire form validity
    const formValid =
        username.value.trim() &&
        email.value.trim() &&
        password.value.trim() &&
        repassword.value.trim() &&
        bio.value.trim() &&
        isValidEmail(email.value) &&
        password.value.length >= 6 &&
        password.value === repassword.value;

    submitBtn.disabled = !formValid;
}

function submitForm() {
    document.querySelector('.success').classList.remove('hide-class');
    username.value = '';
    email.value = '';
    password.value = '';
    repassword.value = '';
    bio.value = '';
    updateCharCount();
}

function updateCharCount() {
    charCount.textContent = bio.value.length + '/200 characters';
}

updateCharCount();