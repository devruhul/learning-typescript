// object type
var friends;
friends = [];
var friend;
friend = { userName: "John", age: 60 };
var friend1;
friend1 = { userName: "sdf", age: 30 };
// push friend and friend 1 to friends
friends.push(friend);
friends.push(friend1);
// show all the keys of friend
// console.log(Object.keys(friend1))
// loop all the keys of friends and show the userName of each friend
for (var trash in friends) {
    console.log(friends[trash]["userName"]);
}
// loop all the keys of friends and show the age of each friend
for (var hello in friends) {
    console.log(friends[hello]["age"]);
}
// show the username of friend1
for (var key in friend1) {
    // console.log(friend1.userName);
}
// show the age of friend
for (var key in friend) {
    // console.log(friend.age);
}
console.log(friends);
