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

// Test para eliminar un usuario
it("Ruta para eliminar un usuario", async () => {
	const res = await request(app).delete("/deleteUser/1");

	expect(res.statusCode).toBe(204);
});

// Test para verificar el estado del servidor
it("Ruta para verificar el estado del servidor", async () => {
	const res = await request(app).get("/health");

	expect(res.statusCode).toBe(200);
	expect(res.text).toBe("Server is up and running");
});

// Test para recibir datos de configuración
it("Ruta para recibir datos de configuración", async () => {
	const res = await request(app)
		.post("/configuration")
		.send({ settings: { port: 3000 } });

	expect(res.statusCode).toBe(201);
	expect(res.body).toEqual({ id: 1, settings: { port: 3000 } });
});
