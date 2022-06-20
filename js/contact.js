const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm() {
  event.preventDefault();

  if (findLength(name.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (findLength(lastName.value, 0)) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (findLength(message.value, 10)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  console.log("hi");
}

form.addEventListener("submit", validateForm);

function findLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  const patternMatches = regex.test(email);
  return patternMatches;
}
