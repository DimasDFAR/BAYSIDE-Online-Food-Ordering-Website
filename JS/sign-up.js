const signUpForm = document.getElementById("sign-up-form");
const fullNameInput = document.getElementById("full-name");
const userEmailInput = document.getElementById("user-email");
const submitButton = document.getElementById("submit-button");
const restaurantImage = document.getElementById("restaraunt-image");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function checkInputs() {
  const isNameValid = fullNameInput.value.trim() !== "";
  const isEmailValid = userEmailInput.value.trim() !== "";
  submitButton.disabled = !(isNameValid && isEmailValid);
}

function updateImageVisibility() {
  restaurantImage.style.display = window.innerWidth <= 768 ? "none" : "inline";
}

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("full-name", fullNameInput.value);
  localStorage.setItem("user-email", userEmailInput.value);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "shop.html";
});

fullNameInput.addEventListener("input", checkInputs);
userEmailInput.addEventListener("input", checkInputs);
window.addEventListener("resize", updateImageVisibility);

// Initial state
checkInputs();
updateImageVisibility();
