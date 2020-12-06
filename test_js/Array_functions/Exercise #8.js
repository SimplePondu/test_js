const countAndSumNeg = (arr) => {
    if (arr.length == 0) { return arr }
    let negative = arr.filter(x => x < 0)
    let positive = arr.filter(x => x > 0)
    return [positive.length, negative.reduce((a, b) => a + b, 0)]
}

console.log(countAndSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65].