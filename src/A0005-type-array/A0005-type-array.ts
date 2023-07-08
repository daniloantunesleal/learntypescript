// Array<T> - T[]
function multiplicarNumbers(...args: Array<number>): number { // Ao invés de "Array<number>" poderia ser utilizado "number[]"
	return args.reduce((acc, value) => value * acc, 1);
}

function concatenaString(...args: string[]): string { // Ao invés de "string[]" poderia ser utilizado "Array<strin>"
	return args.join("");
}

console.log(multiplicarNumbers(1, 2, 3)); // 6
console.log(concatenaString("y", "o", " ", "s", "o", "y", " ", "l", "i", "n", "d", "o")); // yo soy lindo

// readonly - faz com que não seja possivel aterar/adicionar/remover os valores
const array: readonly string[] = ["a", "b", "c"];
const array2: ReadonlyArray<number> = [1, 2, 3];
