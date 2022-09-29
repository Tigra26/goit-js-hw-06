/*const inputElements = document.querySelector('#validation-input');
const textLenght = inputElements.getAttribute('data-length');
console.log(textLenght);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(textLenght)) {
        inputElements.classList.remove("invalid");
        inputElements.classList.add("valid");
    }
    else { inputElements.classList.add("invalid") };
}

inputElements.addEventListener('blur', onInputBlur);*/

const input = document.querySelector( '#validation-input' )

input.addEventListener( 'blur', onValidBlur )


function onValidBlur () {
    if ( input.value.length === 6 ) {
        input.classList.add( 'valid' )
        input.classList.remove( 'invalid' )
    }
    else {
        input.classList.remove( 'valid' )
        input.classList.add('invalid')
    }
}