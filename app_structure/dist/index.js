"use strict";
// function showUserName() {
//   console.log("userName ruhul amin");
// }
// showUserName();
var userForm = document.querySelector("form");
var userName = document.querySelector("#user-name");
var userEmail = document.querySelector("#user-email");
userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = {
        name: userName.value,
        email: userEmail.value,
    };
    console.log(data);
});
