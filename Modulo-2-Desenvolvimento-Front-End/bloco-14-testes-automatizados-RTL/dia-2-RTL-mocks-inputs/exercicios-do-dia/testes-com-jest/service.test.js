const service = require('./service');

describe('Testa a função generateNumber', () => {

  it('Testa a função generateNumber sem parametros', () => {
    service.generateNumber = jest.fn().mockReturnValue(10);

    service.generateNumber();
    expect(service.generateNumber).toHaveBeenCalled();
    expect(service.generateNumber()).toBe(10);
    expect(service.generateNumber).toHaveBeenCalledTimes(2);
  });

  it('Testa a função generateNumber com dois parametros', () => {
    service.generateNumber = jest.fn().mockImplementation((a, b) => a/b);

    service.generateNumber(10, 2);
    expect(service.generateNumber).toHaveBeenCalled();
    expect(service.generateNumber).toHaveBeenCalledTimes(1);
    expect(service.generateNumber(10, 2)).toBe(5);
    expect(service.generateNumber).toHaveBeenCalledTimes(2);
  });

  it('Testa a função generateNumber com três parametros', () => {
    service.generateNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    service.generateNumber(5, 2, 1);
    expect(service.generateNumber).toHaveBeenCalled();
    expect(service.generateNumber).toHaveBeenCalledTimes(1);
    expect(service.generateNumber(5, 2, 1)).toBe(10);
    expect(service.generateNumber).toHaveBeenCalledTimes(2);

    service.generateNumber.mockReset();
    expect(service.generateNumber).toHaveBeenCalledTimes(0);

    service.generateNumber = jest.fn().mockImplementation((a) => a * 2);
    service.generateNumber(2);
    expect(service.generateNumber).toHaveBeenCalled();
    expect(service.generateNumber).toHaveBeenCalledTimes(1);
    expect(service.generateNumber(2)).toBe(4);
    expect(service.generateNumber).toHaveBeenCalledTimes(2);
  });

});

/* describe('Testa as funções upercaseString, returnFirstLetter e concatString', () => {
  it('Testa uma mudança de implementação nas funções mencionadas acima', () => {
    service.upercaseString = jest.fn().mockImplementation((string) => string.toLowerCase());
    service.firstLetter = jest.fn().mockImplementation((string) => {
      const array = string.split('');
      return array[array.length - 1];
    });
    service.concatString = jest.fn().mockImplementation((stringOne, stringTwo, stringthree) => {
      return `${stringOne}${stringTwo}${stringthree}`});
    });

    expect(service.concatString('meu','nome', 'Larissa')).toBe('meunomeLarissa');

}); */
