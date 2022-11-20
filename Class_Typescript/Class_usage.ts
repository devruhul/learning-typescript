// Class
class Friend {
  schoolName: string;
  age: number;
  name: string;

  constructor(schoolName: string, age: number, name: string) {
    this.schoolName = schoolName;
    this.age = age;
    this.name = name;
  }

  getFriend() {
    console.log(
      `Name: ${this.name} Age: ${this.age} School: ${this.schoolName}`
    );
  }
}

let Rajib = new Friend("Jubilee High School", 60, "Rajib");
Rajib.getFriend();

let Pabel = new Friend("Jubilee High School", 60, "Pabel");
Pabel.getFriend();

console.log(Rajib);
