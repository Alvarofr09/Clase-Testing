const express = require('express');
const app = express();

app.use(express.json());


// Ruta que retorna información estática
  app.get('/info', (req, res) => {
    res.status(200).json({ name: 'Node Express App', version: '1.0.0' });
  });
  
  // Ruta para actualizar datos mediante PUT
  app.put('/updateData/:userId', (req, res) => {
    const { userId } = req.params;
    const { newData } = req.body;
    if (!newData) return res.status(400).send('No data provided');
    res.status(200).json({ userId, ...newData });
  });
  
  // Ruta para eliminar un usuario
  app.delete('/deleteUser/:userId', (req, res) => {
    const { userId } = req.params;
    // lógica para eliminar el usuario de la base de datos
    res.status(204).send();
  });
  
  // Ruta para verificar el estado del servidor
  app.get('/health', (req, res) => {
    res.status(200).send('Server is up and running');
  });
  
  
  // Ruta para recibir datos de configuración vía POST
  app.post('/configuration', (req, res) => {
    const { settings } = req.body;
    if (!settings) return res.status(400).send('Settings required');
    res.status(201).json({ settings });
  });
  
  // Ruta que acepta query strings para filtrar datos
  app.get('/filter', (req, res) => {
    const { type } = req.query;
    if (!type) return res.status(400).send('Type is required');
    res.status(200).json({ message: `Filtered by ${type}` });
  });
  
  // Ruta para crear un nuevo usuario
  app.post('/users', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) return res.status(400).send('Name and age are required');
    res.status(201).json({ id: Date.now(), name, age });
  });
  
  // Ruta para obtener detalles de un usuario por ID
  app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;
    res.status(200).json({ userId, name: 'Example User', age: 30 });
  });
  
  // Ruta para actualizar el estado de un usuario
  app.patch('/users/:userId/status', (req, res) => {
    const { userId } = req.params;
    const { status } = req.body;
    if (!status) return res.status(400).send('Status required');
    res.status(200).json({ userId, status });
  });
  
  // Ruta para listar todos los productos
  app.get('/products', (req, res) => {
    res.status(200).json([{ id: 1, name: 'Product A' }, { id: 2, name: 'Product B' }]);
  });
  
  // Ruta para añadir un producto
  app.post('/products', (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) return res.status(400).send('Name and price are required');
    res.status(201).json({ id: Date.now(), name, price });
  });
  
  // Ruta para obtener un reporte específico
  app.get('/reports/:reportId', (req, res) => {
    const { reportId } = req.params;
    res.status(200).json({ reportId, content: 'Report content' });
  });
  
  // Ruta para recibir logs vía POST
  app.post('/logs', (req, res) => {
    const { log } = req.body;
    if (!log) return res.status(400).send('Log data required');
    res.status(204).send();
  });
  
  // Ruta para actualizar el precio de un producto
  app.put('/products/:productId', (req, res) => {
    const { productId } = req.params;
    const { newPrice } = req.body;
    if (!newPrice) return res.status(400).send('New price required');
    res.status(200).json({ productId, newPrice });
  });
  

  module.exports = app;