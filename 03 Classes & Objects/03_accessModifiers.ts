class Person {
  // Public property - accessible from anywhere
  public name: string;

  // Private property - accessible only within the class
  private age: number;

  // Protected property - accessible within the class and subclasses
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // Public method - accessible from anywhere
  public getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
  }

  // Private method - accessible only within the class
  private getAge(): number {
    return this.age;
  }

  // Protected method - accessible within the class and subclasses
  protected getAddress(): string {
    return this.address;
  }
}

class Employee extends Person {
  private employeeId: number;

  constructor(name: string, age: number, address: string, employeeId: number) {
    super(name, age, address);
    this.employeeId = employeeId;
  }

  public getEmployeeDetails(): string {
    // Can access protected property and method from the parent class
    return `Employee ID: ${
      this.employeeId
    }, ${this.getDetails()}, Address: ${this.getAddress()}`;
  }
}

const person = new Person("John Doe", 30, "123 Main St");
console.log(person.name); // Accessible
// console.log(person.age); // Error: Property 'age' is private and only accessible within class 'Person'.
// console.log(person.address); // Error: Property 'address' is protected and only accessible within class 'Person' and its subclasses.
console.log(person.getDetails()); // Accessible

const employee = new Employee("Jane Doe", 25, "456 Elm St", 101);
console.log(employee.getEmployeeDetails()); // Accessible
