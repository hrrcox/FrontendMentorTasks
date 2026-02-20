document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".signup-form");
    const validationField = document.querySelector("#email-input");
    const validationMessage = document.querySelector(".validation");
    const signUp = document.querySelector(".cta-wrapper");
    const success = document.querySelector(".success-message");
    const dismiss = document.querySelector(".dismiss")


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (validationField.value === '') {
            validationField.setAttribute('aria-describedby', 'validation-message');
            validationMessage.style.display = "block";
            validationMessage.setAttribute('aria-hidden', 'false');
            validationMessage.style.color = 'red';
            validationField.style.borderColor = 'red';
            validationField.focus();
        } else if (!validationField.value.includes('@')) {
            validationField.setAttribute('aria-describedby', 'validation-message');
            validationMessage.style.display = "block";
            validationMessage.setAttribute('aria-hidden', 'false');
            validationMessage.textContent = 'Please enter a valid email address';
            validationMessage.style.color = 'red';
            validationField.focus();
        } else {
            validationField.removeAttribute('aria-describedby');
            validationMessage.style.display = "none";
            validationMessage.setAttribute('aria-hidden', 'true');
            signUp.classList.add("remove");
            success.style.display = 'block';
            success.focus()
        }
    });

    dismiss.addEventListener("click", (e) => {
        signUp.classList.remove("remove");
        success.style.display = "none";
        validationField.removeAttribute('aria-describedby');
        validationField.value = "";
        validationField.style.borderColor = '';
        signUp.focus();
    });
});