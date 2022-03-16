const { expect } = require('chai');

const verifyNumbSignal = require('./index');

describe('Execute verifyNumbSignal func', () => {
  describe('> 0', () => {
    describe("the response: ", () => {
      it("it's a string", () => {
        const resp = verifyNumbSignal(4);
        expect(resp).to.be.a('string');
      });
      it("it's a positive number", () => {
        const resp = verifyNumbSignal(4);
        expect(resp).to.be.equals('positive');
      });
    }); 
  });
  describe('< 0', () => {
    describe("the response: ", () => {
      it("it's a string", () => {
        const resp = verifyNumbSignal(-4);
        expect(resp).to.be.a('string');
      });
      it("it's a negative number", () => {
        const resp = verifyNumbSignal(-4);
        expect(resp).to.be.equals('negative');
      });
    }); 
  });
  describe('= 0', () => {
    describe("the response: ", () => {
      it("it's a string", () => {
        const resp = verifyNumbSignal(0);
        expect(resp).to.be.a('string');
      });
      it("it's zero", () => {
        const resp = verifyNumbSignal(0);
        expect(resp).to.be.equals('zero');
      });
    }); 
  });
  describe("it's not a number", () => {
    describe('the response: ', () => {
      it("it's a string", () => {
        const resp = verifyNumbSignal('test');
        expect(resp).to.be.a('string');
      });
      it("it's equal 'must be a number'", () => {
        const resp = verifyNumbSignal('test');
        expect(resp).to.be.equals('must be a number');
      });
    });
  });
});