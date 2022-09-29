function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElements = document.querySelector('body')
const buttonElements = document.querySelector('.change-color')
const spanElements = document.querySelector('.color')


buttonElements.addEventListener('click', getChangeBgColor)

function getChangeBgColor(event) {
  const color = getRandomHexColor();
  bodyElements.style.backgroundColor = color;
  spanElements.textContent = color;
}