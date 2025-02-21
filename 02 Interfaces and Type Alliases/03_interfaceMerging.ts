interface abcd {
    name: string;
  }
  
  interface abcd {
    email: string;
  }
  
  function jhvj(obj: abcd) {
    console.log(obj.name);
    console.log(obj.email);
  }
  
  // you see that we have defined the same interface twice with different properties. 
  // This is allowed in TypeScript.
  // The TypeScript compiler will merge the two interfaces and consider the properties of both interfaces.
  // This is called interface merging.