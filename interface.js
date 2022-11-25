var users = [];
var friendOne = { id: 1, name: "Rajib", age: 32 };
var friendTwo = { id: 2, name: "Rayhan", age: 21 };
users.push(friendOne);
users.push(friendTwo);
var printUserInfo = function (user) {
    console.log("userid = ".concat(user.id, ", name = ").concat(user.name, ", age = ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
