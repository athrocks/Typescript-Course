// Abstract Classes
// Abstract classes are the classes which are used to define the structure of the child class.

abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log("roaming the earth...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("bark bark");
  }
}

let myDog = new Dog();
myDog.makeSound();