let chai = require('chai'); 
let should = chai.should(); 
let News = require('../5_뉴스클러스터링').News;

describe('[5.뉴스클러스터링]', () => { 
    describe('입력 1', () => { 
        it('FRANCE, french', () => { 
            let str1 = 'FRANCE';
            let str2 = 'french';
            let result = News(str1, str2);
            result.should.equal(16384); 
        }); 
    });
    describe('입력 2', () => { 
        it('handshake, shake hands', () => { 
            let str1 = 'handshake';
            let str2 = 'shake hands';
            let result = News(str1, str2);
            result.should.equal(65536); 
        }); 
    });
    describe('입력 3', () => { 
        it('aa1+aa2, AAAA12', () => { 
            let str1 = 'aa1+aa2';
            let str2 = 'AAAA12';
            let result = News(str1, str2);
            result.should.equal(43690); 
        }); 
    });
    describe('입력 4', () => { 
        it('E=M*C^2, e=m*c^2', () => { 
            let str1 = 'E=M*C^2';
            let str2 = 'e=m*c^2';
            let result = News(str1, str2);
            result.should.equal(65536); 
        }); 
    });
    // describe('에러 1', () => { 
    //     it('길이 초과', () => { 
    //         let str1 = 'E=M*C^2';
    //         let str2 = 'e=m*c^2';
    //         let result = News(str1, str2);
    //         let result = News(n, t, m, timetable);
    //         result.should.be.false; 
    //     }); 
    // });
});


