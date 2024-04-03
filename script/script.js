"use strict";
window.addEventListener("load", () => {
    const form = document.getElementById("form");
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        const email = document.getElementById("email");
        let emailValue = email.value;
        const errorLabel = document.getElementById("error-label");
        if (emailValue === "") {
            if (errorLabel) {
                errorLabel.textContent =
                    "Whoops! It looks like you forgot to add your email";
            }
            email.classList.add("email__error");
            return false;
        }
        else if (!emailValue.match(emailRegex)) {
            if (errorLabel) {
                errorLabel.textContent = "Please provide a valid email address";
            }
            email.classList.add("email__error");
            return false;
        }
        else {
            if (errorLabel) {
                errorLabel.textContent = "";
            }
            email.classList.remove("email__error");
        }
    });
});
