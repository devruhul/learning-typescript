// enum types : numeric , string, hetrogenous
// numeric enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
    Direction[Direction["Left"] = 4] = "Left";
    Direction[Direction["Right"] = 5] = "Right";
})(Direction || (Direction = {}));
// console.log(Direction);
// console.log(Direction.Right);
// console.log(Direction["Down"]);
// console.log(Direction[3]); // value to key
// string enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "UP";
    Direction1["Down"] = "DOWN";
    Direction1["Left"] = "LEFT";
    Direction1["Right"] = "RIGHT";
})(Direction1 || (Direction1 = {}));
// console.log(Direction);
// hetrogenous enum
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2["Down"] = "DOWN";
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
// console.log(Direction2);
// console.log(Direction2.Down);
// console.log(Direction2[2]);
// console.log(Direction2["Right"]);
