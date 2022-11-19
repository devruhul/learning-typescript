// enum types : numeric , string, hetrogenous

// numeric enum
enum Direction {
  Up = 1,
  Down = 3,
  Left,
  Right,
}
// console.log(Direction);
// console.log(Direction.Right);
// console.log(Direction["Down"]);
// console.log(Direction[3]); // value to key

// string enum
enum Direction1 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
// console.log(Direction);

// hetrogenous enum
enum Direction2 {
  Up = 1,
  Down = "DOWN",
  Left = 2,
  Right = "RIGHT",
}
// console.log(Direction2);
// console.log(Direction2.Down);
// console.log(Direction2[2]);
// console.log(Direction2["Right"]);
