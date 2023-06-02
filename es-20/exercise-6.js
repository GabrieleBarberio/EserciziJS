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
        return area = geometricShape.side ** 2;
    } else if (geometricShape instanceof Rectangle) {
        return area = geometricShape.width * geometricShape.height;
    } else if (geometricShape instanceof Circle) {
        return area = geometricShape.radius ** 2 * Math.PI;
    }
  };
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
