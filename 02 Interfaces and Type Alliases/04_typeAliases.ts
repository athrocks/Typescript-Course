// Type Aliases
// Type aliases are a way to give a type a name. Let's see an example:

type Age = number;

let age: Age = 55; // Here, we've created a type alias 'Age' and used it to define the type of 'age'.

// age = "hi"; // This will throw an error as the type of 'age' is defined as 'Age' which is a number.


// We can also use type aliases to define object types:

type value = string | number | null;

let val1: value = "Hello World";
let val2: value = 12; 
