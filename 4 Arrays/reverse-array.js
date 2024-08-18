
function reverseArray(arr){
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
    let len = arr.length;
    let rev = [];
    for (i=len; i>=0; i--) {
        let num =i -1;
        if (num >= 0){
            rev.push(arr[num])
        } else { 
            console.log('ARR', arr)
            console.log('OUT', rev, rev.length)
            return rev
        }
}
}

module.exports ={reverseArray}
