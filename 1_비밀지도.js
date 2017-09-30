exports.secretMap = (n, arr1, arr2) => {
    for(let i = 0; i < n; i++) {
        arr1[i] = createBitmap(n, arr1[i])
        arr2[i] = createBitmap(n, arr2[i])
    }

    let ret = [];
    arr1.forEach( (e, i) => {
        let cur = [];
        for(let j = 0; j < n; j++) {
            if(arr1[i][j] === '1' || arr2[i][j] === '1') cur.push('#')
            else cur.push(' ')
        }
        ret.push(cur.toString().replace(/,/g, ''));
    })
    return ret;
}

var createBitmap = (max, num) => {
    let diff = max - num.toString(2).length;
    if(diff > 0) {
        return Array(diff+1).join('0') + num.toString(2);
    } else return num.toString(2);
}