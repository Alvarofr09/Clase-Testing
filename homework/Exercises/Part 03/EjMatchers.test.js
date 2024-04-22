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

	describe("Nivel 05", () => {
		it("Debe devolver true si la cadena contiene el substring dado", () => {
			expect(contieneSubstring("Hola mundo", "mundo")).toBe(true);
			expect(contieneSubstring("JavaScript", "Python")).toBe(false);
			expect(contieneSubstring("Hola", "la")).toBe(true);
		});
	});

	describe("Nivel 06", () => {
		it("Debe devolver la longitud de la cadena", () => {
			expect(longitudCadena("Hola")).toBe(4);
			expect(longitudCadena("Programación")).toBe(12);
			expect(longitudCadena("")).toBe(0);
		});
	});

	describe("Nivel 07", () => {
		it("Debe devolver el resultado de la división de a entre b", () => {
			expect(division(10, 2)).toBe(5);
			expect(division(20, 4)).toBe(5);
			expect(division(15, 3)).toBe(5);
		});
	});

	describe("Nivel 08", () => {
		it("Debe devolver true si el número es mayor que cien", () => {
			expect(esMayorQueCien(150)).toBe(true);
			expect(esMayorQueCien(50)).toBe(false);
			expect(esMayorQueCien(100)).toBe(false); // No es mayor QUE cien, sino igual a cien
		});
	});

	describe("Nivel 09", () => {
		it("Debe devolver la lista de frutas", () => {
			expect(listaFrutas()).toEqual(["manzana", "banana", "naranja"]);
		});
	});

	describe("Nivel 10", () => {
		it("Debe devolver la lista de usuarios", () => {
			expect(obtenerUsuarios()).toEqual([
				{ nombre: "Ana" },
				{ nombre: "Luis" },
			]);
		});
	});

	describe("Nivel 11", () => {
		it("Debe devolver la configuración", () => {
			expect(getConfiguracion()).toEqual({ modo: "activo", volumen: 11 });
		});
	});
});
