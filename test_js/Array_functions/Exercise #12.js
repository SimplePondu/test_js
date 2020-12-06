const digits = (n) => {
    let splitDigits = n.toString().split('').reverse('')
    let mapNumbers = splitDigits.map((x) => parseInt(x))
    return mapNumbers
}

console.log(digits(348597)) // => [7,9,5,8,4,3]