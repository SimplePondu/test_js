let array = [1, -4, 7, 12]
let filterPositive = array.filter((x) => x > 0)
let sum = filterPositive.reduce((a, b) => a + b, 0)
console.log(sum) // => 1 + 7 + 12 = 20