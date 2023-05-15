class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate = (geometricShape) => {
    let area = 0;
    if (geometricShape instanceof Square) {
      area = geometricShape.side ** 2;
      return area;
    } else if (geometricShape instanceof Rectangle) {
      area = geometricShape.width * geometricShape.height;
      return area;
    } else if (geometricShape instanceof Circle) {
      area = (geometricShape.radius ** 2) * Math.PI;
      return area;
    } else {
      const err = new Error("Invalid input: insert a valid geometric shape (Circle, Rectangle or Square)");
      return err;
    }
  };
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));



