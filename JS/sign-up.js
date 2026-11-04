const signUpForm = document.getElementById("sign-up-form")

const fullNameInput = document.getElementById("full-name");
const userEmailInput = document.getElementById("user-email");

const submitButton = document.getElementById("submit-button");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function checkInputs() {
    const isNameValid = fullNameInput.value.trim() !== "";
    const isEmailValid = userEmailInput.value.trim() !== "";

    submitButton.disabled = !(isNameValid && isEmailValid);
}

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('full-name', fullNameInput.value)
    localStorage.setItem('user-email', userEmailInput.value)
    window.location.href = "shop.html";
})

fullNameInput.addEventListener("input", checkInputs);
userEmailInput.addEventListener("input", checkInputs);

// Set the correct initial state on page load
checkInputs();