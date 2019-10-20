let chai = require('chai');
let should = chai.should();
let Cache = require('./cache').Cache;

describe('[cache]', () => {
  describe('input 1', () => {
    it(`cacheSize: 3, cities: ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']`, () => {
      let cacheSize = 3;
      let cities = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'];
      let result = Cache(cacheSize, cities);
      result.should.equal(50);
    });
  });
  describe('input 2', () => {
    it(`cacheSize: 3, cities: ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']`, () => {
      let cacheSize = 3;
      let cities = ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul'];
      let result = Cache(cacheSize, cities);
      result.should.equal(21);
    });
  });
  describe('input 3', () => {
    it(`cacheSize: 2, cities: ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome']`, () => {
      let cacheSize = 2;
      let cities = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome'];
      let result = Cache(cacheSize, cities);
      result.should.equal(60);
    });
  });
  describe('input 4', () => {
    it(`cacheSize: 5, cities: ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome']`, () => {
      let cacheSize = 5;
      let cities = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome'];
      let result = Cache(cacheSize, cities);
      result.should.equal(52);
    });
  });
  describe('input 5', () => {
    it(`cacheSize: 2, cities: ['Jeju', 'Pangyo', 'NewYork', 'newyork']`, () => {
      let cacheSize = 2;
      let cities = ['Jeju', 'Pangyo', 'NewYork', 'newyork'];
      let result = Cache(cacheSize, cities);
      result.should.equal(16);
    });
  });
  describe('input 6', () => {
    it(`cacheSize: 0, cities: ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']`, () => {
      let cacheSize = 0;
      let cities = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'];
      let result = Cache(cacheSize, cities);
      result.should.equal(25);
    });
  });
  // describe('error 1', () => {
  //     it('over #, *', () => {
  //         let dartResult = '1S*2D*#3T*';
  //         let result = Dart(dartResult);
  //         result.should.be.false;
  //     });
  // });
});


