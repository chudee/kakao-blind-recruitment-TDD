exports.Dart = (input) => {
  let overOption = 0;
  let ret = [];
  let sum = 0;

  // 에러 처리
  Array.prototype.forEach.call(input,
    (e => { if(e === '*' || e === '#') overOption++; })
  );
  if(overOption > 3) return false;

  // 정규식
  input = input
    .replace(/#/g, '-1\n')
    .replace(/\*/g, 'x\n')
    .replace(/S/g, '^1\n')
    .replace(/D/g, '^2\n')
    .replace(/T/g, '^3\n')
    .split('\n');

  // 먼저 제곱
  input = input.map( e => {
    if(e.indexOf('^') > -1) {
      e = e.split('^');
      e = Math.pow(e[0], e[1]);
    }
    return e;
  });

  // *, # 처리
  input.forEach( (e, i, arr) => {
    e = e.toString();
    if(e.indexOf('x') > -1 && i === 1) {
      arr.splice(0, 1, arr[0]*2);
      arr.splice(i, 1);
      ret = arr;
    } else if(e.indexOf('x') > -1 && i > 1) {
      arr.splice(i-2, 2, arr[i-2] * 2, arr[i-1] * 2);
      arr.splice(i, 1);
      ret = arr;
    }
    if(e.indexOf('-1') > -1) {
      arr.splice(i-1, 1, arr[i-1] * -1);
      arr.splice(i,1);
      ret = arr;
    }
    ret = arr;
  });

  sum = ret.reduce( (a, b) => a + b );
  return parseInt(sum);
};
