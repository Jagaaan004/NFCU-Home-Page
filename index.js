function errorMessage() {

const username = document.getElementsByClassName("username-input")[0];
const passy = document.getElementsByClassName("password-input")[0];
const error = document.getElementsByClassName("error-message-div")[0];

if (!passy.value.match(/[0-9]/)) {
error.textContent = "Password must be more than 6 digits and contain at least one number, one uppercase letter, and one lowercase letter";
error.style.color = "red";
} else if (!passy.value.match(/[A-Z]/)) {
error.textContent = "Password must be more than 6 digits and contain at least one number, one uppercase letter, and one lowercase letter";
error.style.color = "red";
} else if (!passy.value.match(/[a-z]/)) {
error.textContent = "Password must be more than 6 digits and contain at least one number, one uppercase letter, and one lowercase letter";
error.style.color = "red";
} else if (passy.value.length < 6) {
error.textContent = "Password must be more than 6 digits and contain at least one number, one uppercase letter, and one lowercase letter";
error.style.color = "red";
} else {
error.textContent = ""
}
}


