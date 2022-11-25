"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class
var Students = /** @class */ (function () {
    function Students(schoolName, age, name) {
        this.schoolName = schoolName;
        this.age = age;
        this.userName = name;
    }
    Students.prototype.getFriend = function () {
        console.log("Name: ".concat(this.userName, " Age: ").concat(this.age, " School: ").concat(this.schoolName));
    };
    return Students;
}());
// Inheritance
var Teachers = /** @class */ (function (_super) {
    __extends(Teachers, _super);
    function Teachers(schoolName, age, userName, subject) {
        var _this = _super.call(this, schoolName, age, userName) || this;
        _this.subject = subject;
        return _this;
    }
    Teachers.prototype.getTeacher = function () {
        console.log("Name: ".concat(this.userName, " Age: ").concat(this.age, " School: ").concat(this.schoolName, " Subject: ").concat(this.subject));
    };
    return Teachers;
}(Students));
var kattab = new Teachers("Jubilee High School", 65, "kattab", "Math");
kattab.getTeacher();
var tahmid = new Students("Jubilee High School", 20, "tahmid");
tahmid.getFriend();
var rasel = new Students("HMP High School", 30, "rasel");
rasel.getFriend();
console.log([kattab, tahmid, rasel]);
