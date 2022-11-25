// function signature
var getFriendOne;
var getFriendTwo;
getFriendOne = function () {
    console.log("Hello World");
};
getFriendOne();
getFriendTwo = function (name, age, school) {
    console.log("Name: ".concat(name, " Age: ").concat(age, " School: ").concat(school));
};
getFriendTwo("John", 20, "MIT");
