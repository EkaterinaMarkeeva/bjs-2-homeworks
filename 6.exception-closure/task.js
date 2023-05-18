function parseCount(quantity) {
	let result = Number.parseFloat(quantity);
	if (isNaN(result)) {
		const error = new Error("Невалидное значение");
		throw error;
	}
	return result;
}

function validateCount(quantity) {
	try {
		return parseCount(quantity);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
        if (a + b < c || b + c < a || a + c < b) {
            const error = new Error("Треугольник с такими сторонами не существует");
            throw error;
	    }
	}

	get perimeter() {
		let perimeter = this.a + this.b + this.c;
		return perimeter;
	}

	get area() {
		let halfMeter = (this.a + this.b + this.c) / 2;
		let square = Math.sqrt(halfMeter * (halfMeter - this.a) * (halfMeter - this.b) * (halfMeter - this.c));
		return Number(square.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
    return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {return "Ошибка! Треугольник не существует"} ,
            get perimeter() {return "Ошибка! Треугольник не существует"} ,
		};
	} 
}
