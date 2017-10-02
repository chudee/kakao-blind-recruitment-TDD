let chai = require('chai'); 
let should = chai.should(); 
let Cache = require('../3_캐시').Cache;

describe('[3.캐시]', () => { 
    describe('입력 1', () => { 
        it(`cacheSize: 3, cities: ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']`, () => { 
            let cacheSize = 3;
            let cities = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'];
            let result = Cache(cacheSize, cities);
            result.should.equal(50); 
        }); 
    });
    describe('입력 2', () => { 
        it(`cacheSize: 3, cities: ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']`, () => { 
            let cacheSize = 3;
            let cities = ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul'];
            let result = Cache(cacheSize, cities);
            result.should.equal(21); 
        }); 
    });
    describe('입력 3', () => { 
        it(`cacheSize: 2, cities: ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome']`, () => { 
            let cacheSize = 2;
            let cities = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome'];
            let result = Cache(cacheSize, cities);
            result.should.equal(60); 
        }); 
    });
    describe('입력 4', () => { 
        it(`cacheSize: 5, cities: ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome']`, () => { 
            let cacheSize = 5;
            let cities = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome'];
            let result = Cache(cacheSize, cities);
            result.should.equal(52); 
        }); 
    });
    describe('입력 5', () => { 
        it(`cacheSize: 2, cities: ['Jeju', 'Pangyo', 'NewYork', 'newyork']`, () => { 
            let cacheSize = 2;
            let cities = ['Jeju', 'Pangyo', 'NewYork', 'newyork'];
            let result = Cache(cacheSize, cities);
            result.should.equal(16); 
        }); 
    });
    describe('입력 6', () => { 
        it(`cacheSize: 0, cities: ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']`, () => { 
            let cacheSize = 0;
            let cities = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'];
            let result = Cache(cacheSize, cities);
            result.should.equal(25); 
        }); 
    });
    // describe('에러 1', () => { 
    //     it('#, * 초과', () => { 
    //         let dartResult = '1S*2D*#3T*';
    //         let result = Dart(dartResult);
    //         result.should.be.false; 
    //     }); 
    // });
});


