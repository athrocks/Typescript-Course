// Getters and Setters

class Person4 {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    public get name(): string {
        return this._name;
    }

    // Setter for name
    public set name(newName: string) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.error('Name cannot be empty');
        }
    }

    // Getter for age
    public get age(): number {
        return this._age;
    }

    // Setter for age
    public set age(newAge: number) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.error('Age must be a positive number');
        }
    }
}

const person2 = new Person4('John Doe', 30);

// Using getters
console.log(person2.name); // John Doe
console.log(person2.age);  // 30

// Using setters
person2.name = 'Jane Doe';
person2.age = 25;

console.log(person2.name); // Jane Doe
console.log(person2.age);  // 25

// Trying to set invalid values
person2.name = '';         // Error: Name cannot be empty
person2.age = -5;          // Error: Age must be a positive number