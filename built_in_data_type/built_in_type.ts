// built in data types

let builtInTypes = {
  string: "string",
  number: "number",
  boolean: "boolean",
  any: "any",
  void: "void",
  null: "null",
  undefined: "undefined",
  never: "never",
  Array: "Array",
  object: "object",
  symbol: "symbol",
  bigint: "bigint",
  unknown: "unknown",
};
// console.log(builtInTypes);

let userId: number = 1;
let userName: string = "John";
let isUserActive: boolean = true;
let userAge: number = 20;
let userAddress: string = "New York";
let userPhone: number = 1234567890;

// console.log(userId, userName, isUserActive, userAge, userAddress, userPhone);
// use of void type
function tellIloveUHundredTimes(number: number): void {
  for (let i = 0; i < number; i++) {
    console.log("I love you");
  }
}

tellIloveUHundredTimes(10);

const countOneToTen = (number: number): void => {
  for (let i = 1; i <= number; i++) {
    // console.log(i);
  }
};
countOneToTen(10);

// use of null type
let user: null = null;
// console.log(user);

// use of undefined type
let user1: undefined = undefined;
// console.log(user1);

// use of never type
function throwError(message: string): never {
  throw new Error(message);
}
// throwError("This is an error");

// use of object type
let user2: object = {
  name: "John",
  age: 20,
  address: "New York",
  phone: 1234567890,
  isActive: true,
};

console.log(user2);

// use of symbol type
// let symbol1: symbol = Symbol("id");
// let symbol2: symbol = Symbol("key");
// console.log(symbol1 === symbol2);

// use of bigint type
// let bigInt: bigint = 1234567890123456789012345678901234567890n;
// console.log(bigInt);

// use of array type
let array1: number[] = [1, 2, 3, 4, 5];
let array2: string[] = ["a", "b", "c", "d", "e"];
let array3: boolean[] = [true, false, true, false, true];
let array4: any[] = [1, "a", true, null, undefined, {}, []];
// console.log(array1, array2, array3, array4);