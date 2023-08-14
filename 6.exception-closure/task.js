//Задача 1


function parseCount(value) {
	const parsedValue = Number.parseFloat(value);

	if (isNaN(parsedValue)) {
		throw new Error("Неверное Значение");
	}

	return parsedValue;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}


console.log(parseCount("10"));
console.log(parseCount("10.5"));
console.log(parseCount("abc"));

console.log(validateCount("10"));
console.log(validateCount("10.5"));
console.log(validateCount("abc"));



//Задача 2


class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || b + c <= a || a + c <= b) {
			throw new Error("Такого треугольника нет");
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
			get area() {
				return "Ошибка! Такого треугольника нет";
			},
			get perimeter() {
				return "Ошибка! Такого треугольника нет";
			},
		};
	}
}

const triangle1 = getTriangle(3, 4, 5);
console.log(triangle1.perimeter);
console.log(triangle1.area);

const triangle2 = getTriangle(1, 1, 3);
console.log(triangle2.perimeter);
console.log(triangle2.area);