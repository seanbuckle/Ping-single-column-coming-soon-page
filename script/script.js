window.addEventListener('load', () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let emailValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        let email = document.getElementById('email');
        let emailValue = email.value;
        let errorTxt = document.querySelector('.error-text');
        if (emailValue == '') {
            errorTxt.innerHTML = "Whoops! It looks like you forgot to add your email";
            email.classList.add("email__error");
            return false;
        } else if (!emailValue.match(emailValid)) {
            errorTxt.innerHTML = "Please provide a valid email address";
            email.classList.add("email__error");
            return false;

        } else {
            errorTxt.innerHTML = "";
            email.classList.remove("email__error");
        }
    });
});