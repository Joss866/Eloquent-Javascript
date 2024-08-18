function countBs(x){
    let res = 0;
    let len = x.length
    for (i=0; i<=len; i++) {
        if (x[i] === "B") {
            res = res +1;
        }
        }
        return res

};
function countChar(x, char){
    let res = 0;
    let len = x.length
    for (i=0; i<=len; i++) {
        if (x[i] === char) {
            res = res +1;
        }
        }
        return res

};
module.exports ={countBs, countChar}