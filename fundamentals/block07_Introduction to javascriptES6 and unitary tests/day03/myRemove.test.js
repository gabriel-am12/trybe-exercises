const { it, expect } = require('@jest/globals')
const myRemove = require('./myRemove')

describe('testes da função myRemove', () => {
    it('remove o elemento item', () => {
        expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4]);
        expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
        expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4]);
    })
})