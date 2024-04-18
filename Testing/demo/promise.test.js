const promisifiedFunction = require('./promise');

xit('should resolve to Henry Promise', () => {
  return promisifiedFunction(true).then(data => {
    expect(data).toBe('New Promise');
  });
});

xit('should resolve to New Promise (other way)', () => {
  return expect(promisifiedFunction(true)).resolves.toBe('New Promise');
});

xit('should resolve to New Promise (async/await)', async () => {
  const data = await promisifiedFunction(true);
  expect(data).toBe('New Promise');
});

xit('should reject to Rejected Promise', () => {
  expect.assertions(1);
  return promisifiedFunction(false).catch(e => {
    expect(e).toMatch('Rejected Promise')
  });
});

xit('should reject to Rejected Promise (other way)', () => {
  return expect(promisifiedFunction(false)).rejects.toMatch('Rejected Promise');
});

xit('should reject to Rejected Promise (async/await)', async () => {
  expect.assertions(1);
  try {
    await promisifiedFunction(false);
  } catch (error) {
    expect(error).toMatch('Rejected Promise');
  }
});