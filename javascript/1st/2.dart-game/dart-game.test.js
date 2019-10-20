let chai = require('chai');
let should = chai.should();
let Dart = require('./dart-game').Dart;

describe('[dart game]', () => {
  describe('input 1', () => {
    it('1^1 * 2 + 2^2 * 2 + 3^3', () => {
      let dartResult = '1S2D*3T';
      let result = Dart(dartResult);
      result.should.equal(37);
    });
  });
  describe('input 2', () => {
    it('1^2 + 2^1 * (-1) + 10^1', () => {
      let dartResult = '1D2S#10S';
      let result = Dart(dartResult);
      result.should.equal(9);
    });
  });
  describe('input 3', () => {
    it('1^2 + 2^1 + 0^3', () => {
      let dartResult = '1D2S0T';
      let result = Dart(dartResult);
      result.should.equal(3);
    });
  });
  describe('input 4', () => {
    it('1^1 * 2 * 2 + 2^3 * 2 + 3^1', () => {
      let dartResult = '1S*2T*3S';
      let result = Dart(dartResult);
      result.should.equal(23);
    });
  });
  describe('input 5', () => {
    it('1^2 * (-1) * 2 + 2^1 * 2 + 3^1', () => {
      let dartResult = '1D#2S*3S';
      let result = Dart(dartResult);
      result.should.equal(5);
    });
  });
  describe('input 6', () => {
    it('1^3 + 2^2 + 3^2 * (-1)', () => {
      let dartResult = '1T2D3D#';
      let result = Dart(dartResult);
      result.should.equal(-4);
    });
  });
  describe('input 7', () => {
    it('1^2 + 2^1 * 2 + 3^3 * 2', () => {
      let dartResult = '1D2S3T*#';
      let result = Dart(dartResult);
      result.should.equal(59);
    });
  });
  describe('error 1', () => {
    it('over #, *', () => {
      let dartResult = '1S*2D*#3T*';
      let result = Dart(dartResult);
      result.should.be.false;
    });
  });
});


