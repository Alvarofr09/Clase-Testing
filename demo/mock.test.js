const { usingCallback, cacheFunction } = require('./mock');

xdescribe('Mock Functions', () => {

  describe('usingCallback', () => {

    let array;
    beforeEach(() => {
      array = [
        {name: 'Paco', age: 27},
        {name: 'Juan', age: 13},
        {name: 'Maria', age: 17},
        {name: 'Jose', age: 30}
      ]
    });
  
    it('callback should be executed 4 times (one for each element in array)', () => {
      const mockFunction = jest.fn(person => person.age > 18);
      usingCallback(array, mockFunction);
      // console.log(mockFunction.mock.calls);
      // console.log(mockFunction.mock.calls[0]);
      // console.log(mockFunction.mock.calls[0][0]);
      console.log(mockFunction.mock.results[0].value);
      console.log(mockFunction.mock.results[1].value);
      // console.log(mockFunction.mock.calls[1][0]);
      // console.log(mockFunction.mock.results[1].value);
      expect(mockFunction.mock.calls.length).toBe(4);
    });
    it('callback should be executed 4 times (one for each element in array)', () => {
      const mockFunction = jest.fn(person => person.age > 18);
      usingCallback(array, mockFunction);
      // console.log(mockFunction.mock.calls);
      expect(mockFunction.mock.calls.length).toBe(4);
    });

  });

  describe('cacheFunction', () => {

    it('callback should not be executed again if already called with that arg', () => {
      const mockFunction = jest.fn(x => x + 10);
      const cacheSum10 = cacheFunction(mockFunction);
      cacheSum10(1);
      cacheSum10(13);
      cacheSum10(1);
      cacheSum10(1);
      cacheSum10(7);   // {1, 7, 13}
      console.log(mockFunction.mock.calls);
      expect(mockFunction.mock.calls.length).toBe(3);
    });

  });


});
describe('Funcion Mock',  () => {
  test('Debe pasar si se invoca la funcion', () => {
      const myMock1 = jest.fn()
      console.log(myMock1)
      expect(myMock1).toHaveBeenCalled(); 
  });

  test('Debe pasar si se invoca 3 veces la funcion', () => {
    const myMock2 = jest.fn();
    myMock2();
    myMock2();
    myMock2();
    expect(myMock2).toHaveBeenCalledTimes(3);
  });

  test('asignando valores a la funcion mock', () => {
    const myMock3 = jest.fn();

    const result1 = myMock3();
    // console.log(result1) 
    // expect(result1).toBe(undefined);
    expect(result1).toBe('Hola');
       
  });

  test('retornando valores en una funcion mock', () => {
    const myMock4 = jest.fn()
        .mockReturnValueOnce('Hola')
        // .mockReturnValueOnce(true)
        // .mockReturnValueOnce(23);
    const result2 = myMock4(); 
    // const result3 = myMock4(); 
    // const result4 = myMock4(); 

    console.log(result2);
    
    expect(result2).toBe('Holasss');
    // expect(result3).toBe(true);
    // expect(result4).toBe(23);
       
  });
  
});


 