//Задача 1

function parseCount(value) {
	const parsedValue = Number.parseFloat(value);
	if (Number.isNaN(parsedValue)) {
		throw new Error("Невалидное значение");
	}
	return parsedValue;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error.message;
	}
}

console.log(parseCount("123"));
console.log(parseCount("012"));
console.log(validateCount("56.65"));
console.log(validateCount("ыфва"));


//Задача 2

class Triangle {
  constructor(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = this.perimeter / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return area.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}

// Примеры использования
const triangle1 = getTriangle(3, 4, 5);
console.log(triangle1.perimeter);
console.log(triangle1.area);

const triangle2 = getTriangle(5, 5, 8);
console.log(triangle2.perimeter);
console.log(triangle2.area); 

const triangle3 = getTriangle(1, 2, 3);
console.log(triangle3.perimeter);
console.log(triangle3.area);
