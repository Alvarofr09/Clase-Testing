const sum = require('./sum');

// https://jestjs.io/es-ES/docs/api#afterallfn-tiempo

describe('testing Hooks', () => {

    beforeAll(() => {
        console.log('beforeAll: se imprime solo una vez');
    });

    beforeEach(() => {
        console.log('beforeEach: se imprime una vez por cada test');
    });
  
    afterAll(() => {
        console.log('afterAll: se imprime solo una vez');
    });

    afterEach(() => {
        console.log('afterEach: se imprime una vez por cada test');
    });

    it('should return 8 if adding 3 and 5', () => {
        console.log('pase por el test de 8');
        expect(sum(3, 5)).toBe(8);
      });
      
    it('should return 15 if adding 7 and 8', () => {
        console.log('pase por el test de 15');
        expect(sum(7, 8)).toBe(15);
    });
    it('should return 0 if adding 1 and -1', () => {
        console.log('pase por el test de 0');
        expect(sum(1, -1)).toBe(0);
    });

  }
);