// Array<T> - T[]
function multiplicarNumbers(...args: Array<number>): number { // Ao invéz de "Array<number>" também poderia ser utilizado "number[]"
	return args.reduce((acc, value) => value * acc, 1);
}

function concatenaString(...args: string[]): string { // Ao invéz de "string[]" também poderia ser utilizado "Array<strin>"
	return args.join("");
}

console.log(multiplicarNumbers(1, 2, 3)); // 6
console.log(concatenaString("y", "o", " ", "s", "o", "y", " ", "l", "i", "n", "d", "o")); // yo soy lindo
