// Type Guards
// TypeScript is a statically typed language, but it also supports dynamic typing.
// TypeScript uses type guards to determine the type of a variable at runtime.

// The typeof operator
// The typeof operator is used to determine the type of a variable at runtime.

// Syntax
// typeof variableName

// Example 1
let a: number = 12;
let b: string = "Hello World";

console.log(typeof a); // Output: number
console.log(typeof b); // Output: string

// Example 2
function randomFunc(arg: string | number) {
  if (typeof arg === "string") {
    console.log("Argument is a string");
  } else if (typeof arg === "number") {
    console.log("Argument is a number");
  } else {
    throw new Error("Argument is neither a string nor a number");
  }
  return arg;
}

randomFunc("Hello World"); // Output: Argument is a string
randomFunc(12); // Output: Argument is a number

// The instanceof operator
// The instanceof operator is used to determine the type of an object at runtime.

// Syntax
// objectName instanceof constructorFunction

// Example 1
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let person = new Person("John Doe");

console.log(person instanceof Person); // Output: true
console.log(person instanceof Object); // Output: true

// Example 2

class Car {
  model: string;
  constructor(model: string) {
    this.model = model;
  }
}

class Bike {
  model: string;
  constructor(model: string) {
    this.model = model;
  }
}

let car = new Car("BMW");
let bike = new Bike("Harley Davidson");

console.log(car instanceof Car); // Output: true
console.log(car instanceof Bike); // Output: false

function Vehicle(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    console.log("Vehicle is a Car");
  } else if (vehicle instanceof Bike) {
    console.log("Vehicle is a Bike");
  } else {
    throw new Error("Vehicle is neither a Car nor a Bike");
  }
}

Vehicle(car); // Output: Vehicle is a Car
Vehicle(bike); // Output: Vehicle is a Bike