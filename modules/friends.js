"use strict";
exports.__esModule = true;
// import { friendsName as name, friendsAge as age } from "./friendsDetails";
var friends = require("./friendsDetails");
// function getFriendsDetails(): void {
//   console.log(`Friends Name: ${name}, Friends Age: ${age}`);
// }
function getFriendsDetails() {
    console.log("Friends Name: ".concat(friends.friendsName, ", Friends Age: ").concat(friends.friendsAge));
}
getFriendsDetails();
