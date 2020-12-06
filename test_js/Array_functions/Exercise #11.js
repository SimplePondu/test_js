const countDown = (start) => {
    const arrayNumbers = Array.from(Array(start).keys())
    return arrayNumbers
}
console.log(countDown(5)); // => [0,1,2,3,4]