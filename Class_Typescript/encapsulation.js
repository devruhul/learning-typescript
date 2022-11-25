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
// encapsulation Class
var Agent = /** @class */ (function () {
    function Agent(schoolName, age, name) {
        this.schoolName = schoolName;
        this.age = age;
        this.userName = name;
    }
    Agent.prototype.getFriend = function () {
        console.log("hello");
    };
    return Agent;
}());
// Inheritance
var Pilot = /** @class */ (function (_super) {
    __extends(Pilot, _super);
    function Pilot(schoolName, age, userName, subject) {
        var _this = _super.call(this, schoolName, age, userName) || this;
        _this.subject = subject;
        return _this;
    }
    Pilot.prototype.getFriend = function () {
        console.log("Name: ".concat(this.userName, " Age: ").concat(this.age, " School: ").concat(this.schoolName, " Subject: ").concat(this.subject));
    };
    Pilot.prototype.setSubject = function (subject) {
        this.subject = subject;
    };
    Pilot.prototype.getSubject = function () {
        return this.subject;
    };
    return Pilot;
}(Agent));
var fahim = new Pilot("Jubilee High School", 65, "fahim", "Math");
fahim.getFriend();
fahim.setSubject("Boolchand High School");
fahim.getSubject();
fahim.age = 45;
var begun = new Agent("Jubilee High School", 65, "begun");
begun.getFriend();
begun.userName = "sdfsd brgun";
console.log(fahim, begun);
