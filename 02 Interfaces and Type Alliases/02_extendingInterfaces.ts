interface UserInterface {
  name: string;
  email: string;
  password: string;
}

interface Admin extends UserInterface {
  admin: boolean;
}

// Admin has all User properties + admin property
function abcd(user: Admin) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.password);
  console.log(user.admin);
}
