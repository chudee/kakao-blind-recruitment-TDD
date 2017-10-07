let chai = require('chai'); 
let should = chai.should(); 
let Bus = require('../4_셔틀버스').Bus;

describe('[4.셔틀버스]', () => { 
    describe('입력 1', () => { 
        it(`n: 1, t: 1, m: 5, timetable: ['08:00', '08:01', '08:02', '08:03']`, () => { 
            let n = 1;
            let t = 1;
            let m = 5;
            let timetable = ['08:00', '08:01', '08:02', '08:03'];
            let result = Bus(n, t, m, timetable);
            result.should.equal('09:00'); 
        }); 
    });
    describe('입력 2', () => { 
        it(`n: 2, t: 10, m: 2, timetable: ['09:10', '09:09', '08:00']`, () => { 
            let n = 2;
            let t = 10;
            let m = 2;
            let timetable = ['09:10', '09:09', '08:00'];
            let result = Bus(n, t, m, timetable);
            result.should.equal('09:09'); 
        }); 
    });
    describe('에러 1', () => { 
        it('길이 초과', () => { 
            let n = 2;
            let t = 10;
            let m = 3;
            let timetable = ['09:10', '09:09', '08:00'];
            timetable[3000] = '09:00'
            let result = Bus(n, t, m, timetable);
            result.should.be.false; 
        }); 
    });
});


