function range(x, y, z){
    let step;
    let total;
    let arr = [Number(y)];
    while (x < y) {
        y = y-1; 
        arr.unshift(y)
    }
    if (z) {
        step = z;
        total = arr[step]
        } else {
            step = 1;
            total = arr[0]
    
        }
    let position = step;
    let len = arr.length;
    for (i=0; i<=len; i++) {
        if (len > (position + step) ) {
            total = total + arr[position];
            position = position + step;
        } else {
            position = len-1;
            total = total + arr[position];
            return total
    }
}
    return total
};
module.exports ={range}