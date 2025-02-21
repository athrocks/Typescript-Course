// Interfaces
// In TypeScript, interfaces are used to define the structure of an object.
// They are used to define custom types.

// Syntax:
// interface InterfaceName {
//   key1: type1;
//   key2: type2;
//   ...
// }

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string; // ? -> optional even if not given no error in function call
}

function getDataOfUser(obj: User) {
  console.log(obj.name);
  console.log(obj.email);
  console.log(obj.password);
}

const obj = {
  name: "Aditya",
  email: "aditya@gmail.com",
  password: "aditya@123",
};

// function Call
getDataOfUser(obj);

const user2 = {
  name: "Aditya",
  email: "ad@gmail.com",
  password: "ad@123",
  gender: "Male", // Optional
};

getDataOfUser(user2);