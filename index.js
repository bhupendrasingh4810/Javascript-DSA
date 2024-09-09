// class Animal {
//     constructor(name, legs) {
//         this.name = name;
//         this.legs = legs;
//     }

//     printLegCount() {
//         console.log(`${this.name} has ${this.legs} legs.`);
//     }
// }

// class Human extends Animal {
//     printLegCount() {
//         console.log(`${this.name} has ${this.legs} legs and, human is not an animal.`);
//     }
// }

function Animal(name, legs) {
    this.name = name;
    this.legs = legs;
    console.log('this 1', this);

    this.printLegCount = function() {
        console.log('this 2', this);
        console.log(`${this.name} has ${this.legs} legs.`);
    }
}

class Human extends Animal {
    printLegCount() {
        console.log('this 3', this);
        console.log(`${this.name} has ${this.legs} legs and, human is not an animal.`);
    }
}

const animal = new Animal('Dog', 4);
const human = new Human('Human', 2);

animal.printLegCount();
console.log(animal, human);
human.printLegCount();