const levelOne = (a, b) => {
	return a + b;
};

const levelTwo = (letras) => {
	if (letras.length < 2) {
		return letras;
	}

	if (letras.length === 2) {
		return letras[0];
	}

	if (letras.length > 2) {
		let result = "";
		for (let i = 0; i < letras.length; i++) {
			if (i % 2 === 0) {
				result += letras[i];
			}
		}
		return result;
	}
};

const levelThree = (a, b) => {
	return a.concat(b).sort((a, b) => a - b);
};

const levelFour = (num) => {};

module.exports = { levelOne, levelTwo, levelThree, levelFour };
