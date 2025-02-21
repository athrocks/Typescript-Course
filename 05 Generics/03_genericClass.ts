// Gneric Class

class GenericClass<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const genericClass = new GenericClass<string>('Hello');
console.log(genericClass.getValue()); // Output: Hello