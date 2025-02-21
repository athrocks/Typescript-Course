// Static Members
// Static members are the members that belong to the class itself, not the instances of the class.
// They are called on the class itself.

// Example 1: Static Properties
class Circle {
  static pi: number = 3.14; // Static property

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }
}

// no need to create an instance of the class to access the static properties.
console.log(Circle.pi);
console.log(Circle.calculateArea(5));