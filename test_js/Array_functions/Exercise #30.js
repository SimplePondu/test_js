const monkeyCount = (n) => {
    const numbersN = Array.from(Array(n + 2).keys())
    return numbersN.slice(1, -1)
}

console.log(monkeyCount(10)); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(monkeyCount(1)); // => [1]