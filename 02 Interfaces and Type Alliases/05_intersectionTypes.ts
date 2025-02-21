// Intersection Types
// Intersection types allow us to combine multiple types into one.
// For example, we can create a type that has all the properties of two other types.

// Syntax
// type Type1 = {
//   prop1: string;
// };

// type Type2 = {
//   prop2: number;
// };

// type Type3 = Type1 & Type2;
// In the above example, Type3 is an intersection type that has all the properties of Type1 and Type2.
// Let's see an example of intersection types in TypeScript:
type userInterface = {
  name: string;
};

type AdminInterface = userInterface & {
  getDetails(user: string): void;
};

function getUserDetails(user: AdminInterface) {
  console.log(user.name);
  user.getDetails(user.name);
}
