const square = (arr) => {
    return arr.reduce((a, b) => a + (Math.pow(b, 2)), 0);
}
console.log(square([1, 2, 2,])) // => 1^2 + 2^2 + 2^2 = 9.