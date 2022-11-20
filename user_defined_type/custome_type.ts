// custom types
export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: string;
};

type friends = {
  userName: string;
  age: number;
  schoolName: string;
  phone: number;
};

let friend: friends = {
  userName: "John",
  age: 60,
  schoolName: "Jubilee High School",
  phone: 1234567890,
};

// format json data in console
// console.log(JSON.stringify(friend, null , 5));

// use custom type in a function
function getFriends(friend: friends) {
  console.log(
    `Name: ${friend.userName} Age: ${friend.age} School: ${friend.schoolName} Phone: ${friend.phone}`
  );
}
getFriends(friend);

console.log(friend);
