const service = require('./service');

test('Testa a função generateNumber', () => {
  service.generateNumber = jest.fn().mockReturnValue(10);

  service.generateNumber();
  expect(service.generateNumber).toHaveBeenCalled();
  expect(service.generateNumber()).toBe(10);
  expect(service.generateNumber).toHaveBeenCalledTimes(2);
});

test('Testa a função generateNumber com dois parametros', () => {
  service.generateNumber = jest.fn().mockImplementation((a, b) => a/b);

  service.generateNumber(10, 2);
  expect(service.generateNumber).toHaveBeenCalled();
  expect(service.generateNumber).toHaveBeenCalledTimes(1);
  expect(service.generateNumber(10, 2)).toBe(5);
  expect(service.generateNumber).toHaveBeenCalledTimes(2);
});