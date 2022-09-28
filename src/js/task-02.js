const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listElements = document.querySelector('#ingredients');

const nameIngredients = ingredient => {
  return ingredient.map(ingredient => {
  const itemElements = document.createElement('li');
  itemElements.classList.add('item')
  itemElements.textContent = ingredient;
  return itemElements;
})
}

const elements = nameIngredients(ingredients)
listElements.append(...elements);
