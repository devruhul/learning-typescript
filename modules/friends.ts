// import { friendsName as name, friendsAge as age } from "./friendsDetails";
import * as friends from "./friendsDetails";
// function getFriendsDetails(): void {
//   console.log(`Friends Name: ${name}, Friends Age: ${age}`);
// }
function getFriendsDetails(): void {
  console.log(
    `Friends Name: ${friends.friendsName}, Friends Age: ${friends.friendsAge}`
  );
}

getFriendsDetails();
