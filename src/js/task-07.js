const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", fontSizeChange);
function fontSizeChange(i) {
  text.style.fontSize = `${i.target.value}px`;
}