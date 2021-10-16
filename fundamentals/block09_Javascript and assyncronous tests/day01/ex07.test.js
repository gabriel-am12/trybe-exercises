const { it, expect } = require("@jest/globals");
const uppercase = require("./ex07");

it('teste do exercicio 07', (done) => {
    uppercase('chair', (result) => {
        try {
            expect(result).toBe('CHAIR');
            done();
        } catch (error) {
            done(error);
        }
    });
});