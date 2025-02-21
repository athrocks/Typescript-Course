// Example 1

class BottleMaker1 {
  public name;
  public price;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// same as above use this syntax since it is more concise
class BottleMaker {
  constructor(public name: string, public price: number) {}
}

let b1 = new BottleMaker("Milton", 1100);
let b2 = new BottleMaker("Tupperware", 1200);

console.log(b1);
console.log(b2);

// Run using nodeJs
// node .\01_class.js

// Example 2
class Human {
  age = 0;
  constructor(public name: string, public isRich: boolean) {}
}

let h1 = new Human("Atharva", true);
let h2 = new Human("AamAdmi", false);

console.log(h1);
console.log(h2);

// Example 3
class Car {
  constructor(public name: string, public color: string = "black") {}
}

let c1 = new Car("BMW", "red");
let c2 = new Car("Audi");

console.log(c1);
console.log(c2);
