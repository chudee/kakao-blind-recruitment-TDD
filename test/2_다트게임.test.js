let chai = require('chai'); 
let should = chai.should(); 
let Dart = require('../2_다트게임').Dart;

describe('[2.다트게임]', () => { 
    describe('입력 1', () => { 
        it('1^1 * 2 + 2^2 * 2 + 3^3', () => { 
            let dartResult = '1S2D*3T';
            let result = Dart(dartResult);
            result.should.equal(37); 
        }); 
    });
    describe('입력 2', () => { 
        it('1^2 + 2^1 * (-1) + 10^1', () => { 
            let dartResult = '1D2S#10S';
            let result = Dart(dartResult);
            result.should.equal(9); 
        }); 
    });
    describe('입력 3', () => { 
        it('1^2 + 2^1 + 0^3', () => { 
            let dartResult = '1D2S0T';
            let result = Dart(dartResult);
            result.should.equal(3); 
        }); 
    });
    describe('입력 4', () => { 
        it('1^1 * 2 * 2 + 2^3 * 2 + 3^1', () => { 
            let dartResult = '1S*2T*3S';
            let result = Dart(dartResult);
            result.should.equal(23); 
        }); 
    });
    describe('입력 5', () => { 
        it('1^2 * (-1) * 2 + 2^1 * 2 + 3^1', () => { 
            let dartResult = '1D#2S*3S';
            let result = Dart(dartResult);
            result.should.equal(5); 
        }); 
    });
    describe('입력 6', () => { 
        it('1^3 + 2^2 + 3^2 * (-1)', () => { 
            let dartResult = '1T2D3D#';
            let result = Dart(dartResult);
            result.should.equal(-4); 
        }); 
    });
    describe('입력 7', () => { 
        it('1^2 + 2^1 * 2 + 3^3 * 2', () => { 
            let dartResult = '1D2S3T*#';
            let result = Dart(dartResult);
            result.should.equal(59); 
        }); 
    });
    describe('에러 1', () => { 
        it('#, * 초과', () => { 
            let dartResult = '1S*2D*#3T*';
            let result = Dart(dartResult);
            result.should.be.false; 
        }); 
    });
});


