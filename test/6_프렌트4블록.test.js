const chai = require('chai');
const should = chai.should();
const Block = require('../6_프렌즈4블록').Block;

describe('[6.프렌즈4블록]', () => {
    describe('입력1' , () => {
        it('m = 4, n = 5, board = ["CCBDE", "AAADE", "AAABF", "CCBBF"]', () => {
            let m = 4;
            let n = 5;
            let board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];
            let result = Block(m, n, board);
            result.should.be.equal(14);
        })
    }),
    describe('입력2' , () => {
        it('m = 6, n = 6, board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]', () => {
            let m = 6;
            let n = 6;
            let board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];
            let result = Block(m, n, board);
            result.should.be.equal(15);
        })
    })
})