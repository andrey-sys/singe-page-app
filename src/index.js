
// func for settting error/success message
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}
//setFormMessage(loginForm, "success", "You're logged in!")

// func for setting error messages for individual fields, by using the first form and after go to parent and take the another form
function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

// func for clearing the error messages in fields where the input is incorrect
function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}


// posibility to navigate with links to Login and Create Account page 
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e=> {
        // prevent the jumping back to the first page after clicking the link
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e=> {
        // prevent the jumping back to the first page after clicking the link
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    // setting the error message for Continue button on login form
    loginForm.addEventListener("submit", e=> {
        e.preventDefault();

        // perform login server part

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    // setting the error message for fields in create account form (for now the message appears just for Username field)
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
            //another fields
        });

        // clear input error messasge when adding character to current filds
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});