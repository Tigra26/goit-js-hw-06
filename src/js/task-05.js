const typeInput = document.querySelector('#name-input' );
const typeSpan = document.querySelector('#name-output');

typeInput.addEventListener('input', newInput);

function newInput(i) {
    typeSpan.textContent = i.currentTarget.value;

    if (i.currentTarget.value === "") {
        typeSpan.textContent = 'Anonymous'
    }
};