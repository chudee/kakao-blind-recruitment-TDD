exports.Block = (m, n, board) => {
  // 배열 쪼개기
  let blocks = board.map( e => e.split(''));

  // 2차원 배열 뒤집기
  blocks = blocks[0].map( (col, i) => blocks.map(row => row[i]) );

  // 루프가 너무 이상하네요
  blocks = loopBlock(m, n, blocks);

  // 합
  let sum = 0;
  blocks.forEach( block => block.forEach( e => e === ' ' ? sum++ : sum ));

  return sum
};

loopBlock = (m, n, blocks) => {
  let index = [];
  do {
    index = createIndex(m, n, blocks, index);
    blocks = createBlock(m, n, blocks);
    index = [];
  } while (index.length) {
    index = createIndex(m, n, blocks, index);
    blocks = createBlock(m, n, blocks)
  }
  return blocks
};

createIndex = (m, n, blocks, index) => {
  for(let i = 0; i < n-1; i++) {
    if( i !== n-1 ) B = blocks[i+1];
    for(let j = 0; j < m; j++) {
      let M = blocks[i][j];
      let R = blocks[i][j+1];
      if(R !== undefined && B[j] !== undefined && B[j+1] !== undefined)
        if( M === R && M === B[j] && M === B[j+1])
          index.push([i, j, i+1, j+1])
    }
  }
  return index;
};

createBlock = (m, n, blocks) => {
  let index = [];
  for(let i = 0; i < n-1; i++) {
    if( i !== n-1 ) B = blocks[i+1];
    for(let j = 0; j < m; j++) {
      let M = blocks[i][j];
      let R = blocks[i][j+1];
      if(R !== undefined && B[j] !== undefined && B[j+1] !== undefined)
        if( M === R && M === B[j] && M === B[j+1])
          index.push([i, j, i+1, j+1])
    }
  }
  return downBlock(removeBlock(index,blocks));
};

removeBlock = (index, blocks) => {
  index.forEach( e => {
    blocks[e[0]][e[1]] = ' '; // i, j
    blocks[e[0]][e[3]] = ' '; // i, j+1
    blocks[e[2]][e[1]] = ' '; // i+1, j
    blocks[e[2]][e[3]] = ' '; // i+1, j+1
  });
  return blocks
};

downBlock = (blocks) => {
  return blocks.map( (col, i) => blocks[i].sort( (a, b) => {
    if(a === ' ' || b === ' ') return a > b;
    else return;
  }))
};
