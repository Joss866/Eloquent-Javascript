/*
Console.log all numbers between 1-100
print Fizz for numbers divisable by 3
print Buzz for numbers divisable by 5
print Fizz-Buzz for numbeers divisable by 3 & 5
*/
let x = 0
let y = 3
let z = 5
for (i=0; i<=99; i++) {
    x= x + 1
    if ((x % y === 0) && !(x % z === 0)) {
        console.log("Fizz")
    }
    if ((x % z === 0) && !(x % y === 0)){
        console.log("Buzz")
    }
    if ((x % z === 0) && (x % y === 0)){
        console.log("Fizz-Buzz")
    }
    else {
        console.log(x)
    }
    }