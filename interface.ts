//  interface
interface User {
  id: number;
  name: string;
  age: number;
}

let users: User[] = [];

let friendOne: User = { id: 1, name: "Rajib", age: 32 };
let friendTwo: User = { id: 2, name: "Rayhan", age: 21 };

users.push(friendOne);
users.push(friendTwo);

const printUserInfo = (user: User) => {
  console.log(`userid = ${user.id}, name = ${user.name}, age = ${user.age}`);
};

users.forEach((user) => printUserInfo(user));
