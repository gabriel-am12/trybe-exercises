const myFizzBuzz = require("./myFizzBuzz");

describe('testes da função myfizzbuzz', () => {
    it('de acordo com o parâmetrom, retorne tal retorno', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(1)).toBe(1);
        expect(myFizzBuzz('15')).toBe(false);
    })
})