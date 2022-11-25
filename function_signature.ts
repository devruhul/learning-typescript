// function signature
let getFriendOne: () => void;
let getFriendTwo: (name: string, age: number, school: string) => void;

getFriendOne = () => {
  console.log("Hello World");
};
getFriendOne();

getFriendTwo = (name: string, age: number, school: string) => {
  console.log(`Name: ${name} Age: ${age} School: ${school}`);
};

getFriendTwo("John", 20, "MIT");
