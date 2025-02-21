// Type Assertion
// Type assertion is a way to tell the compiler "trust me, I know what I'm doing." 
// It's like type casting in other languages.
// TypeScript allows you to override its inferred and analyzed view of types in any way you want to. 
// This is done using the "as" keyword.

let a: any = 12;

// Method 1
a as string; // This is called "angle-bracket" syntax

// Method 2
<string>a; // This is called "as" syntax


// Non-null assertion operator
// The non-null assertion operator is represented by an exclamation mark (!).
// It tells the compiler that a variable is not null or undefined.

let b: string | null = "Hello World";
let c: string = b!; // This will not throw an error because we are asserting that 'b' is not null or undefined.