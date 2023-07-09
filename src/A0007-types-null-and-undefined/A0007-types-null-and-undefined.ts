/* Normalmente nós usamos null e a lingaugem que usa undefined */

export function createPerson(firstName: string, lastName?: string): {
    firstName: string,
    lastName?: string // string | undefined
} {
	return {
		firstName,
		lastName
	};
}

export function squareOf(x: any) {
	if (typeof x !== "number") return null;
	return x * x;
}

const sqaureOfTwoNumber = squareOf(2);
const sqaureOfTwoString = squareOf("2");

console.log(sqaureOfTwoNumber); // 4
console.log(sqaureOfTwoString); // null
