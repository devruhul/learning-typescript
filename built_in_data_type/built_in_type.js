// built in data types
var builtInTypes = {
    string: "string",
    number: "number",
    boolean: "boolean",
    any: "any",
    "void": "void",
    "null": "null",
    undefined: "undefined",
    never: "never",
    Array: "Array",
    object: "object",
    symbol: "symbol",
    bigint: "bigint",
    unknown: "unknown"
};
// console.log(builtInTypes);
var userId = 1;
var userName = "John";
var isUserActive = true;
var userAge = 20;
var userAddress = "New York";
var userPhone = 1234567890;
// console.log(userId, userName, isUserActive, userAge, userAddress, userPhone);
// use of void type
function tellIloveUHundredTimes(number) {
    for (var i = 0; i < number; i++) {
        console.log("I love you");
    }
}
tellIloveUHundredTimes(10);
var countOneToTen = function (number) {
    for (var i = 1; i <= number; i++) {
        // console.log(i);
    }
};
countOneToTen(10);
// use of null type
var user = null;
// console.log(user);
// use of undefined type
var user1 = undefined;
// console.log(user1);
// use of never type
function throwError(message) {
    throw new Error(message);
}
// throwError("This is an error");
// use of object type
var user2 = {
    name: "John",
    age: 20,
    address: "New York",
    phone: 1234567890,
    isActive: true
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
var array1 = [1, 2, 3, 4, 5];
var array2 = ["a", "b", "c", "d", "e"];
var array3 = [true, false, true, false, true];
var array4 = [1, "a", true, null, undefined, {}, []];
// console.log(array1, array2, array3, array4);
