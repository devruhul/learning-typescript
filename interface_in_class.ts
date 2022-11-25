// interface in class
interface IPoint {
  showThePoint: () => void;
}

class Point implements IPoint {
  constructor(private x: number, private y: number) {}
  showThePoint = () => {
    const res = this.x * this.y;
    return `xy = ${res}`;
  };
}

let sdfsd = new Point(5, 2);
console.log(sdfsd.showThePoint());
