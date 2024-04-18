const {
	esPrimo,
	contarCaracteres,
	reversaCadena,
	filtrarPares,
	contieneSubstring,
	longitudCadena,
	division,
	esMayorQueCien,
	listaFrutas,
	obtenerUsuarios,
	getConfiguracion,
} = require("./EjMatchers");

describe("PARTE 03", () => {
	describe("Nivel 01", () => {
		it("Debe devolver True si es un número Primo", () => {
			expect(esPrimo(7)).toBe(true);
			expect(esPrimo(10)).toBe(false);
			expect(esPrimo(17)).toBe(true);
		});
	});
	describe("Nivel 02", () => {
		it("Debe devolver el numero de caracteres de una cadena", () => {
			expect(contarCaracteres("")).toBe(0);
			expect(contarCaracteres("Hola")).toBe(4);
			expect(contarCaracteres("Buenas noches")).toBe(13);
		});
	});
	describe("Nivel 03", () => {
		it("Debe devolver la cadena invertida", () => {
			expect(reversaCadena("La")).toBe("aL");
			expect(reversaCadena("Hola")).toBe("aloH");
			expect(reversaCadena("Buenas noches")).toBe("sehcon saneuB");
		});
	});
	describe("Nivel 04", () => {
		it("Debe devolver el array con los pares", () => {
			expect(filtrarPares([1, 2, 3, 4])).toStrictEqual([2, 4]);
			expect(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([
				2, 4, 6, 8, 10,
			]);
			expect(filtrarPares([12, 37, 84, 90, 55])).toStrictEqual([12, 84, 90]);
		});
	});
});
