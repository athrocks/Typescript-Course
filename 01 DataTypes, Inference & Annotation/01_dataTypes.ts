// Primitive types

// Number
let a = 12.234;
// a = "hi"; // Error: Type 'string' is not assignable to type 'number'.
// this will get compiled as its only a warning in typescript and not an error in javascript.

let num: number = 12;

// String
let b = "Hello World";

let str: string = "Hello World";
// str = 2; // Error: Type 'number' is not assignable to type 'string'.

// Boolean
let c = true;

let isTrue: boolean = false;

// Reference types

// Array
let arr = [1, 2, 3, 4, 5, "hello"]; // Array of numbers and string

// Tuple
let tuple: [number, string] = [1, "hello"]; // Tuple with fixed number of elements and fixed types for each element.

// Enum
enum UserRoles {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

enum StatusCodes {
  OK = 200,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

// Any
let anyType: any = "Hello World";
anyType = 12; // No error

// Unknown
let unknownType: unknown = "Hello World";
// unknownType = 12; // Error: Type 'number' is not assignable to type 'string'.

// Void
function log(message: string): void {
  console.log(message);
}

// Null
let n: null = null;
// n = 5; // Error: Type '5' is not assignable to type 'null'.

// Undefined
let u: undefined = undefined;

// Never
function throwError(message: string): never {
  throw new Error(message);
}
