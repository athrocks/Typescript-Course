// Readonly Properties
// You can make properties readonly by using the readonly keyword. 
// Readonly properties must be initialized at their declaration or in the constructor.
class User {
  constructor(public readonly name: string) {}

  changeName(newName: string) {
    // this.name = newName; // Error: Cannot assign to 'name' because it is a read-only property.
  }
}

const user = new User("John Doe");

user.changeName("Bhaya");

console.log(user.name); 


// Optional Properties
// You can make properties optional by using the ? operator. 
// Optional properties can be omitted when creating an object.
class Person2 {
  constructor(public name: string, public age?: number) {}
}

let user2 = new Person2("John Doe");
let user3 = new Person2("Jane Doe", 25);
console.log(user2);
console.log(user3);

// Parameter Properties
// You can use parameter properties to create and initialize a property in one place. 
// It is a shorthand way of creating properties in a class.

class Person3 {
  constructor(public name: string, private age: number) {}
}

let user4 = new Person3("John Doe", 30);
