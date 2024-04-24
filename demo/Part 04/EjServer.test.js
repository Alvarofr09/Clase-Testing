const request = require("supertest");
const app = require("./EjServer.js");

// Test para verificar la información estática
it("should return static app information", async () => {
	const res = await request(app).get("/info");
	expect(res.statusCode).toBe(200);
	expect(res.body).toEqual({ name: "Node Express App", version: "1.0.0" });
});

// Test para actualizar datos
it("Ruta para actualizar datos", async () => {
	const res = await request(app)
		.put("/updateData/1")
		.send({ newData: { name: "John", age: 30 } });

	expect(res.statusCode).toBe(200);
	expect(res.body).toEqual({ userId: "1", name: "John", age: 30 });
});
