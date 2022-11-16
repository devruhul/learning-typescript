// use of a similar array type
let arr: number[] = [1, 2, 3];
let arr1: Array<number> = [1, 2, 3];
console.log(arr, arr1);

// array multiple data type
let arr2: (number | string)[] = [1, 2, 3, "Hello"];
let arr3: Array<number | string> = [1, 2, 3, "Hello"];
console.log(arr2, arr3);
