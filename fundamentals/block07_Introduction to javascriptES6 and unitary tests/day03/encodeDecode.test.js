const {encode, decode } = require('./encodeDecode');

describe('Testa as funções encode e decode', () => {
    it('encode é definida?', () => {
        expect(encode).toBeDefined();
    })
    it('encode é uma função?', () => {
        expect(typeof encode).toEqual('function');
    })
    it('converte "a" para 1', () => {
        expect(encode('abra')).toEqual('1br1');
    })
    it('converte "e" para 2', () => {
        expect(encode('erre')).toEqual('2rr2');
    })
    it('converte "i" para 3', () => {
        expect(encode('xibi')).toEqual('x3b3');
    })
    it('converte "o" para 4', () => {
        expect(encode('odor')).toEqual('4d4r');
    })
    it('converte "u" para 5', () => {
        expect(encode('nunu')).toEqual('n5n5');
    })
    it('o retorno tem a mesma quant. de caract. do parâm.', () => {
        expect(encode('aeiou').length).toEqual(5);
    })

    it('decode é definida?', () => {
        expect(decode).toBeDefined();
    })
    it('encode é uma função?', () => {
        expect(typeof decode).toEqual('function');
    })
    it('converte "a" para 1', () => {
        expect(decode('1br1')).toEqual('abra');
    })
    it('converte "e" para 2', () => {
        expect(decode('2rr2')).toEqual('erre');
    })
    it('converte "i" para 3', () => {
        expect(decode('x3b3')).toEqual('xibi');
    })
    it('converte "o" para 4', () => {
        expect(decode('4d4r')).toEqual('odor');
    })
    it('converte "u" para 5', () => {
        expect(decode('n5n5')).toEqual('nunu');
    })
    it('o retorno tem a mesma quant. de caract. do parâm.', () => {
        expect(decode('aeiou').length).toEqual(5);
    })
})