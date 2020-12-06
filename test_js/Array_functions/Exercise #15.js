function fiveAndGreaterOnly(arr) {
    return arr.filter((x) => x > 5)
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]