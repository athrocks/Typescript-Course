// Interface Normally
interface NormalInterface {
  arg: number;
}

// Generic Interface
interface GenericInterface<T> {
  arg: T;
}

function identityFunc(arg: GenericInterface<string>) {
    return arg;
}

let myIdentity = identityFunc({ arg: "Hello World" });
console.log(myIdentity); // Output: { arg: 'Hello World' }  