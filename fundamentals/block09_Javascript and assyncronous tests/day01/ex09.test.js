// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require("@jest/globals");
const { getPokemonDetails } = require("./ex08");


describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    function callback(error) {
        const expectedError = new Error('Não temos esse pokémon para você :(');
        expect(error).toEqual(expectedError);
        done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Magikarp', callback);// Escreva aqui seu código
  });
  it('retorna um pokemon que existe no banco de dados', (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    function callback(err, result) {
      expect(result).toBe(expectedString);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback); // Escreva aqui seu código
    });
});