class Inhabitant {
  constructor(species, name, gender, legs, hands, saying) {
    this.species = species;
    this.name = name;
    this.gender = gender;
    this.legs = legs;
    this.hands = hands;
    this.saying = saying;
  }
  makeMessage() {
    const properties = [];
    for (const property of Object.keys(this)) {
      properties.push(property.toString());
    }
    return properties.map(property => `${capitalizeString(property)}: ${this[property]}`).join(' ')
  }
}

class Dog extends Inhabitant {
  constructor(name, gender) {
    super('dog', name, gender, 4, 0, 'woof-woof!');
  }
}

class Cat extends Inhabitant {
  constructor(name, gender) {
    super('cat', name, gender, 4, 0, 'mrrr!');
  }
}

class Human extends Inhabitant {
  constructor(name, gender, saying) {
    super('human', name, gender, 2, 2, saying);
  }
}

const man = new Human('Dmitry', 'male', 'Hello!');
const woman = new Human('Lero', 'female', 'Bye!');
const dog = new Dog('Toby', 'male');
const cat = new Cat('Sheldon', 'male');
const inhabitantsArray = [dog, cat, man, woman];

const capitalizeString = (string) => string.charAt(0).toUpperCase() + string.slice(1);


 inhabitantsArray.forEach(inhabitant => print(inhabitant.makeMessage()));
