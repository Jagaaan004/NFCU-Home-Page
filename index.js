
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

// Ignore for now 
// function enterSignIn() { 
//     const passwordInput = document.getElementsByClassName("password-input")[0];

//     passwordInput.addEventListener("keydown", function(event) {
//         if (event.keycode === 13) {
//             // event.preventDefault();
//             document.getElementsById("btn").click();
//             console.log("Clicked");
//         }
//     });
// }
    


// Ignore for now 
// const passwordInput = document.getElementById("btn");
// btn.AddEventListener("click", (ev)=>{
//     console.log("btn clicked");
// });

// document.addEventListener("keypress", (event)=>{
//     let keycode = event.keycode ? event.keycode : event.which;

//     if (keycode === 13) {
//         btn.click();
//     }
// });
// }