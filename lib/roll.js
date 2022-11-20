export function roll(sides, dice, rolls) {
	let result = [];
	for (let i = 0; i < rolls; i++) {
		let curNum = 0;
		for (let j = 0; j < dice; j++) {
			curNum += Math.floor(Math.random() * sides) + 1;
		}
		result[i] = curNum;
	}
	
	const output = {
		"sides": sides,
		"dice": dice,
		"rolls": rolls,
		"results": result
	}
	
	return JSON.stringify(output);
} 
