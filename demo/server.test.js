const request = require('supertest');
const app = require('./server.js');

xit('should reply the GET method with status code 300', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(300);
});

xit('should reply the GET method with a list of names', async () => {
  const res = await request(app).get('/');
  expect(res.body).toEqual(['Paco', 'Jose', 'Maria']);
});

xit('should reply the POST method /bodyData with status code 400 if data not send', async () => {
  const res = await request(app).post('/bodyData');
  expect(res.statusCode).toBe(400);
});

xit('should reply the POST method /bodyData with status code 200 if data is send', async () => {
  const res = await request(app).post('/bodyData').send({arg1: 3, arg2: 7});
  expect(res.statusCode).toBe(200);
});

xit('should reply the GET method /queryData with status code 400 if query not send', async () => {
  const res = await request(app).get('/queryDataSend');
  expect(res.statusCode).toBe(400);
});

xit('should reply the GET method /queryData with the query if provided (res.send)', async () => {
  const res = await request(app).get('/queryDataSend?q=hola');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('hola');
});

xit('should reply the GET method /queryData with the query if provided (res.json)', async () => {
  const res = await request(app).get('/queryDataJson?q=hola');
  expect(res.statusCode).toBe(200);
  expect(res.body).toBe('hola');
});

xit('should reply the GET method /paramsData with status code 400 if params is not a number', async () => {
  const res = await request(app).get('/paramsData/Paco');
  expect(res.statusCode).toBe(400);
});

xit('should reply the GET method /paramsData with the number passed and msg with OK text', async () => {
  const res = await request(app).get('/paramsData/7');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({id: 7, msg: 'OK'});
});

xit('should reply the GET method /image with status code 200', async() => {
  const res = await request(app).get('/image');
  expect(res.statusCode).toBe(200);
});

xit('should reply the GET method /image with content type image', async() => {
  const res = await request(app).get('/image').expect('Content-Type', 'image/jpeg');
});


