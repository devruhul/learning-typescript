// object type
let friends: object[];
friends = [];
let friend: {
  userName: string;
  age: number;
};
friend = { userName: "John", age: 60 };

let friend1: {
  userName: string;
  age: number;
};

friend1 = { userName: "sdf", age: 30 };

// push friend and friend 1 to friends
friends.push(friend);
friends.push(friend1);

// show all the keys of friend
// console.log(Object.keys(friend1))
// loop all the keys of friends and show the userName of each friend
for (const key in friends) {
  console.log(friends[key]["userName"]);
}
// loop all the keys of friends and show the age of each friend
for (const key in friends) {
  console.log(friends[key]["age"]);
}
// show the username of friend1
for (const key in friend1) {
  console.log(friend1.userName);
}
// show the age of friend
for (const key in friend) {
  console.log(friend.age);
}

console.log(friends);
