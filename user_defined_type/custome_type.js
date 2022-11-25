"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend = {
    userName: "John",
    age: 60,
    schoolName: "Jubilee High School",
    phone: 1234567890,
};
// format json data in console
// console.log(JSON.stringify(friend, null , 5));
// use custom type in a function
function getFriends(friend) {
    console.log("Name: ".concat(friend.userName, " Age: ").concat(friend.age, " School: ").concat(friend.schoolName, " Phone: ").concat(friend.phone));
}
getFriends(friend);
console.log(friend);
