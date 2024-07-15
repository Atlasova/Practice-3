//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  getInfo() {
    return `Name: ${this.name}, type: ${this.type}`;
  }
}

class Mammal extends Animal {
  constructor(name, type, feed) {
    super(name, type);
    this.feed = feed;
  }
  showFeed() {
    return `${this.name} eats ${this.feed}`;
  }
}
class Bird extends Animal {
  constructor(name, type, feed) {
    super(name, type);
    this.feed = feed;
  }
  showFeed() {
    return `${this.name} eats ${this.feed}`;
  }
}
class Reptile extends Animal {
  constructor(name, type, feed) {
    super(name, type);
    this.feed = feed;
  }
  showFeed() {
    return `${this.name} eats ${this.feed}`;
  }
}
class Zoo {
  constructor() {
    this.animalList = [];
  }
  addAnimal(...animal) {
    this.animalList.push(...animal);
  }
  showAnimalList() {
    return this.animalList;
  }
}
const dog = new Mammal("Patron", "tarier", "bones");
const parrot = new Bird("Kesha", "ara", "corn");
const shake = new Reptile("Kaa", "pyton", "mouse");

console.log(dog.getInfo());
console.log(dog.showFeed());
console.log(parrot.getInfo());
console.log(parrot.showFeed());
console.log(shake.getInfo());
console.log(shake.showFeed());

const askaniaZoo = new Zoo();
askaniaZoo, addAnimal(dog, parrot, shake);
console.log(askaniaZoo.showAnimalList());
