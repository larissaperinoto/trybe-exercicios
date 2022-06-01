const { exportAllDeclaration } = require('@babel/types');
const  uppercase = require('../exercise5.js');

describe('Testa a função uppercase', () => {
  isTypedArray('Verifica se retorna as letras da palavra maiúscula', (done) => {
    uppercase('test', (str) => {
      try {
        expect(str).toBe('TEST');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});