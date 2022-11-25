// abstract Class
abstract class Person {
  schoolName: string;
  age: number;
  userName: string;

  constructor(schoolName: string, age: number, name: string) {
    this.schoolName = schoolName;
    this.age = age;
    this.userName = name;
  }

  abstract getFriend(): void;
}

// Inheritance
class People extends Person {
  subject: string;
  constructor(
    schoolName: string,
    age: number,
    userName: string,
    subject: string
  ) {
    super(schoolName, age, userName);
    this.subject = subject;
  }

  getFriend(): void {
    console.log(
      `Name: ${this.userName} Age: ${this.age} School: ${this.schoolName} Subject: ${this.subject}`
    );
  }
}

let suhag = new People("Jubilee High School", 65, "suhag", "Math");
suhag.getFriend();

console.log(suhag);
