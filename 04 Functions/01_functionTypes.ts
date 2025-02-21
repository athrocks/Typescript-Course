// Function

// Function Declaration
function greet(name: string): string {
  return `Hello ${name}`;
}

// Function Expression
const greet2 = function (name: string): string {
  return `Hello ${name}`;
};

// Arrow Function
const greet3 = (name: string): string => {
  return `Hello ${name}`;
};

// Optional Parameters
function greet4(name?: string): string {
  return `Hello ${name || "Anonymous"}`;
}

// Default Parameters
function greet5(name: string = "Anonymous"): string {
  return `Hello ${name}`;
}

// Rest Parameters
// Rest parameters allow you to represent an indefinite number of arguments as an array.
function greet6(...names: string[]): string {
  return `Hello ${names.join(", ")}`;
}

let namesStr = greet6("John", "Jane", "Doe");
console.log(namesStr); // Hello John, Jane, Doe

// Callback Function
function greet7(name: string, callback: (name: string) => void): void {
  callback(name);
}

greet7("John", (name: string) => {
  console.log(`Hello ${name}`);
});

// Function Overloading
function abcd(a: string): void;
function abcd(a: string, b: number): number;

function abcd(a: any, b?: any): any {
  if (typeof a === "string" && typeof b === "number") {
    console.log(a, b);
    return b;
  } else if (typeof a === "string" && typeof b === "undefined") {
    console.log(a);
  } else {
    throw new Error("Invalid arguments");
  }
}

abcd("Hello",5);
abcd("Hello");
