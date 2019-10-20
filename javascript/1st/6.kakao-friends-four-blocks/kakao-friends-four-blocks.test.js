const chai = require('chai');
const should = chai.should();
const Block = require('./kakao-friends-four-blocks').Block;

describe('[kakao friends four blocks]', () => {
  describe('input 1' , () => {
    it('m = 4, n = 5, board = ["CCBDE", "AAADE", "AAABF", "CCBBF"]', () => {
      let m = 4;
      let n = 5;
      let board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];
      let result = Block(m, n, board);
      result.should.be.equal(14);
    })
  });
  describe('input 2' , () => {
    it('m = 6, n = 6, board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]', () => {
      let m = 6;
      let n = 6;
      let board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];
      let result = Block(m, n, board);
      result.should.be.equal(15);
    })
  });
});
