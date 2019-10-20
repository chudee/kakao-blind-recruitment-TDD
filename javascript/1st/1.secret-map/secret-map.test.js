let chai = require('chai');
let should = chai.should();
let secretMap = require('./secret-map').secretMap;

describe('[secret map]', () => {
  describe('input 1', () => {
    it('["#####","# # #", "### #", "#  ##", "#####"]', () => {
      let n = 5;
      let arr1 = [9, 20, 28, 18, 11];
      let arr2 = [30, 1, 21, 17, 28];
      let result = secretMap(n, arr1, arr2);
      result.should.deep.equal(["#####","# # #", "### #", "#  ##", "#####"]);
    });
  });

  describe('input 2', () => {
    it('["######", "###  #", "##  ##", " #### ", " #####", "### # "]', () => {
      let n = 6;
      let arr1 = [46, 33, 33 ,22, 31, 50];
      let arr2 = [27 ,56, 19, 14, 14, 10];
      let result = secretMap(n, arr1, arr2);
      result.should.deep.equal(["######", "###  #", "##  ##", " #### ", " #####", "### # "]);
    });
  });
});
