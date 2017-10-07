exports.News = (str1, str2) => {
    let map1 = createArray(str1);
    let map2 = createArray(str2);

    return Math.floor( (intersectionMerge(map1, map2) / unionMerge(map1, map2)) * 65536 );
}

createArray = str => {
    let arr = [];
    str = str.toUpperCase();
    for(let i = 0; i < str.length; i++) {
        if(str[i+1]) {
            let reg = new RegExp(/[A-Z]/);
            if( reg.test(str[i]) && reg.test(str[i+1]) ) arr.push(str[i] + str[i+1]);
        }
    }
    return createMap(arr.sort());
}

createMap = arr => {
    let map = new Map();
    
    arr.forEach( e => map.set(e, 0) );
    
    arr.forEach( e => { 
        if(map.get(e) !== undefined) {
            let cnt = map.get(e);
            map.set(e, ++cnt);
        }; 
    });
    return map;
}

intersectionMerge = (map1, map2) => {
    let merge = new Map();
    map1.forEach( (v, k) => {
        if(map2.get(k) !== undefined) {
            let a = map1.get(k);
            let b = map2.get(k);
            a > b ? merge.set(k, b) : merge.set(k, a);
        }
    });

    let cnt = 0;
    merge.forEach( (v, k) => cnt += merge.get(k) );
    if(merge.size === 0) return 1;
    else return cnt;
}

unionMerge = (map1, map2) => {
    let merge = new Map()
    map1.forEach( (v, k) => {
            let a = map1.get(k);
            let b = map2.get(k) ? map2.get(k) : 0;
            a > b ? merge.set(k, a) : merge.set(k, b);
    })
    map2.forEach( (v, k) => {
            let a = map2.get(k);
            let b = merge.get(k) ? merge.get(k) : 0;
            a > b ? merge.set(k, a) : merge.set(k, b);
    })

    let cnt = 0;
    merge.forEach( (v, k) => cnt += merge.get(k) );
    if(merge.size === 0) return 1;
    else return cnt;
}