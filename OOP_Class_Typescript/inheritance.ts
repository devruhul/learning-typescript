// Class
class Students {
  schoolName: string;
  age: number;
  userName: string;

  constructor(schoolName: string, age: number, name: string) {
    this.schoolName = schoolName;
    this.age = age;
    this.userName = name;
  }

  getFriend(): void {
    console.log(
      `Name: ${this.userName} Age: ${this.age} School: ${this.schoolName}`
    );
  }
}

// Inheritance
class Teachers extends Students {
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

  getTeacher(): void {
    console.log(
      `Name: ${this.userName} Age: ${this.age} School: ${this.schoolName} Subject: ${this.subject}`
    );
  }
}

let kattab = new Teachers("Jubilee High School", 65, "kattab", "Math");
kattab.getTeacher();

let tahmid = new Students("Jubilee High School", 20, "tahmid");
tahmid.getFriend();

let rasel = new Students("HMP High School", 30, "rasel");
rasel.getFriend();

console.log([kattab, tahmid, rasel]);
