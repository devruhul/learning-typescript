// encapsulation Class
class Agent {
  protected schoolName: string;
   age: number;
  public userName: string;

  constructor(schoolName: string, age: number, name: string) {
    this.schoolName = schoolName;
    this.age = age;
    this.userName = name;
  }

  getFriend(): void {
    console.log("hello");
  }
}

// Inheritance
class Pilot extends Agent {
  private subject: string;
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
    
    setSubject(subject: string): void {
        this.subject = subject;
    }

    getSubject(): string {
        return this.subject;
    }

}

let fahim = new Pilot("Jubilee High School", 65, "fahim", "Math");
fahim.getFriend();
fahim.setSubject("Boolchand High School");
fahim.getSubject();

fahim.age = 45;

let begun = new Agent("Jubilee High School", 65, "begun");
begun.getFriend();
begun.userName = "sdfsd brgun";

console.log(fahim, begun);
