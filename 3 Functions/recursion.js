function even(x){
    let res
    if (x === 1) {
        res = false
    }
    if ((x === 0) || (x % 2 === 0)) {
        res = true
    }
    else {
        res = false
    }
    return res
};
module.exports ={even}