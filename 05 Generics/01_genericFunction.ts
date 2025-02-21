// Generics

// Generics are a way to make components reusable. 
// They allow you to write a function or a class that can work with any data type.

// Syntax:
// function functionName<T>(arg: T): T {
//   return arg;
// }

// Example:
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello World"); // Output: Hello World
console.log(output);

let output2 = identity<number>(12); // Output: 12
console.log(output2);

// In the above example, we have defined a function identity that accepts a type parameter T.
// The function returns the same type as the argument passed to it.

// You can also use type inference with generics:
let output3 = identity("Hello World"); // Output: Hello World
console.log(output3);