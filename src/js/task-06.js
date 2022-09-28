const inputElements = document.querySelector('#validation-input');
const textLenght = inputElements.getAttribute('data-length');
console.log(textLenght);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(textLenght)) {
        inputElements.classList.remove("invalid");
        inputElements.classList.add("valid");
    }
    else { inputElements.classList.add("invalid") };
}

inputElements.addEventListener('blur', onInputBlur);