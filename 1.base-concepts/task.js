"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;

	if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	} else if (d === 0) {
		arr.push(-b / (2 * a));
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (typeof percent !== Number) {
		percent = Number(percent);
	}

	if (typeof contribution !== Number) {
		contribution = Number(contribution);
	}

	if (typeof amount !== Number) {
		amount = Number(amount);
	}

	if (typeof countMonths !== Number) {
		countMonths = Number(countMonths);
	}

	let principalDebt = amount - contribution;
	let percentMonth = percent / 100 / 12;
	let payment = principalDebt * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
	let sum = payment * countMonths;

	return Number(sum.toFixed(2));
}