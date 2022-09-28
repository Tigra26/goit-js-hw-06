const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const dataCreateBtn = document.querySelector('[data-create]');
const dataDestroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {  
  const arrayBoxes = [];
  amount = input.value; 
    for (let i = 0; i < amount; i++) {
      const bgColor = getRandomHexColor();
      const makeBox = document.createElement("div");
      makeBox.style.backgroundColor = bgColor;
      makeBox.style.width = 30 + i*10 + "px";
      makeBox.style.height = 30 + i*10 + "px";
      arrayBoxes.push(makeBox);

      if (amount > 100) {
       alert `Attantion, please! Accepts only numbers from 1 to 100`;
      return};
    }

    boxes.append(...arrayBoxes);
    
    
  }

dataCreateBtn.addEventListener("click", createBoxes);


function destroyBoxes() {
   boxes.innerHTML = "";
}
dataDestroyBtn.addEventListener("click", destroyBoxes);