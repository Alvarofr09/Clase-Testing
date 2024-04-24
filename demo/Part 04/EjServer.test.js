const request = require('supertest');
const app = require('./EjServer.js');

// Test para verificar la información estática
it('should return static app information', async () => {
  const res = await request(app).get('/info');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ name: 'Node Express App', version: '1.0.0' });
});

// Test para actualizar datos
it('should update user data and return 200', async () => {
  const res = await request(app).put('/updateData/123').send({ newData: { email: 'test@example.com' } });
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ userId: '123', email: 'test@example.com' });
});

// Test para eliminar un usuario
it('should delete a user and return 204', async () => {
  const res = await request(app).delete('/deleteUser/123');
  expect(res.statusCode).toBe(204);
});

// Test para verificar el estado del servidor
it('should check server health and return 200', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('Server is up and running');
});


// Test para recibir configuración vía POST
it('should accept configuration settings and return 201', async () => {
  const res = await request(app).post('/configuration').send({ settings: { mode: 'dark' } });
  expect(res.statusCode).toBe(201);
  expect(res.body).toEqual({ settings: { mode: 'dark' } });
});

// Test para filtrar datos
it('should accept a type query and return filtered data', async () => {
  const res = await request(app).get('/filter?type=example');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ message: 'Filtered by example' });
});

// Test para crear un nuevo usuario
it('should create a new user and return 201', async () => {
  const res = await request(app).post('/users').send({ name: 'John Doe', age: 25 });
  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty('id');
});

// Test para obtener detalles de un usuario
it('should return user details', async () => {
  const res = await request(app).get('/users/123');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ userId: '123', name: 'Example User', age: 30 });
});

// Test para actualizar el estado de un usuario
it('should update user status and return 200', async () => {
  const res = await request(app).patch('/users/123/status').send({ status: 'active' });
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ userId: '123', status: 'active' });
});

// Test para listar productos
it('should list all products and return 200', async () => {
  const res = await request(app).get('/products');
  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveLength(2);
});

// Test para añadir un producto
it('should add a product and return 201', async () => {
  const res = await request(app).post('/products').send({ name: 'New Product', price: 99.99 });
  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty('id');
});

// Test para obtener un reporte
it('should get a specific report and return 200', async () => {
  const res = await request(app).get('/reports/456');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ reportId: '456', content: 'Report content' });
});

// Test para recibir logs
it('should receive log data and return 204', async () => {
  const res = await request(app).post('/logs').send({ log: 'Log data' });
  expect(res.statusCode).toBe(204);
});

// Test para actualizar el precio de un producto
it('should update product price and return 200', async () => {
  const res = await request(app).put('/products/789').send({ newPrice: 120.00 });
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ productId: '789', newPrice: 120.00 });
});
