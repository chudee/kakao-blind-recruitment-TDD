let chai = require('chai'); 
let should = chai.should(); 
let secretMap = require('../1_비밀지도').secretMap;

describe('1.비밀지도', () => { 
    describe('입출력 예제 1', () => { 
        it('원래의 비밀지도를 해독하여 "#", 공백으로 구성된 문자열 배열로 출력하라.', () => { 
            let n = 5;
            let arr1 = [9, 20, 28, 18, 11];
            let arr2 = [30, 1, 21, 17, 28];
            let result = secretMap(n, arr1, arr2);
            result.should.deep.equal(["#####","# # #", "### #", "#  ##", "#####"]); 
        }); 
    });

    describe('입출력 예제 2', () => { 
        it('원래의 비밀지도를 해독하여 "#", 공백으로 구성된 문자열 배열로 출력하라.', () => { 
            let n = 6;
            let arr1 = [46, 33, 33 ,22, 31, 50];
            let arr2 = [27 ,56, 19, 14, 14, 10];
            let result = secretMap(n, arr1, arr2);
            result.should.deep.equal(["######", "###  #", "##  ##", " #### ", " #####", "### # "]); 
        }); 
    });
});


