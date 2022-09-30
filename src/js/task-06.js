const input = document.querySelector('#validation-input');
function updateClass (addCla, remCla) {
   
    input.classList.remove(remCla);
    input.classList.add(addCla);
}

input.addEventListener('blur', () => {
    if (input.value.length !== Number(input.dataset.length)) {
    updateClass('invalid');
    } 
    else {
        updateClass('valid');
    }
});