/*
Write a program that creates a string that represents an 8x8 grid,
*/
let x = " #";
let y = "# ";
let width = 4
let height = 4
for (i=0; i<=height-1; i++) {
console.log(x.repeat(width))
console.log(y.repeat(width))
}