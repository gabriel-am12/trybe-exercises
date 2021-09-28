const { it, expect } = require('@jest/globals')
const sum = require('./sum')

describe('testes da função sum', () => {
    it('resultado da soma', () => {
        expect(sum(4,5)).toBe(9);
        expect(sum(0,0)).toBe(0);
    })
    it('deve disparar um erro caso receba como parâmetro uma string', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
      })    
})