function stringConcat(arr) {
    let concate = arr.join('')
    return `"${concate}"`
}

console.log(stringConcat([1, 2, 3])); // "123"