class Storage {
  #items = [];

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    return this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    // Якщо умовою було змінити існуючий масив

    // const index = this.#items.indexOf(itemToRemove);

    // if (index !== -1) {
    //   this.#items.splice(index, 1);
    // }
    // return this.#items;

    // Якщо умовою було повернути новий масив

    return (this.#items = this.#items.filter(item => item !== itemToRemove));
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems());

storage.addItem('Droid');
console.log(storage.getItems());

storage.removeItem('Prolonger');
console.log(storage.getItems());
storage.removeItem('Scaner');
console.log(storage.getItems());
