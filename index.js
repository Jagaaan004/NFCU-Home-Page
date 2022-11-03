function errorMessage() {

const username = document.getElementsByClassName("username-input")[0];
const passy = document.getElementsByClassName("password-input")[0];
const error = document.getElementsByClassName("error-message-div")[0];

if (!passy.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/) || passy.value.length < 6) {
error.textContent = "Password must be more than 6 digits and contain at least one number, one uppercase letter, and one lowercase letter";
error.style.color = "red";
}
else {
error.textContent = ""
}
}


