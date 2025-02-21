let r = 12;
// if you hover over the variable 'r', you will see that TypeScript has inferred the type of 'r' as number.
// This is called type inference

// Let's see some examples of type inference in TypeScript:
let i = 12; // TypeScript infers the type of 'a' as number.
let j = "Hello World"; // TypeScript infers the type of 'b' as string.

// Type Annotation
let k: number = 12; // Explicitly defining the type of 'c' as number.
let l: string = "Hello World"; // Explicitly defining the type of 'd' as string.

function add(a: number, b: number): number {
  return a + b;
}
