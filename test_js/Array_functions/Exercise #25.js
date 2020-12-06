const isPresent = (string, target) => {
    let arr = string.split('')
    return arr.includes(target)
};

console.log(isPresent("abcd", "b")); // => true
console.log(isPresent("efghi", "a")); // => false