"use strict";
// Class
var Friend = /** @class */ (function () {
    function Friend(schoolName, age, name) {
        this.schoolName = schoolName;
        this.age = age;
        this.name = name;
    }
    Friend.prototype.getFriend = function () {
        console.log("Name: ".concat(this.name, " Age: ").concat(this.age, " School: ").concat(this.schoolName));
    };
    return Friend;
}());
var Rajib = new Friend("Jubilee High School", 60, "Rajib");
Rajib.getFriend();
var Pabel = new Friend("HMP High School", 30, "Pabel");
Pabel.getFriend();
console.log(Rajib);
