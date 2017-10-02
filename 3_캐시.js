exports.Cache = (cacheSize, cities) => {
    let cache = [];
    let time = 0;
    
    cities.forEach(e => {
        city = e.toUpperCase()

        // 캐시 0일때
        if(cacheSize === 0) { time += 5; return false; };

        // 캐시에 도시가 포함 할 때
        if(cache.indexOf(city) > -1 ) {
            time += 1;
            cache.splice(cache.indexOf(city), 1);
            cache.push(city);
        }

        // 캐시크기가 넘어갈 때
        else if(cache.length >= cacheSize) {
            time += 5;
            cache.shift();
            cache.push(city);
        } 

        // 그 외
        else {
            time += 5;
            cache.push(city);
        }
    });
    return time;
}
