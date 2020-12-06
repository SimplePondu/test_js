function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let str2 = ' $'.repeat(i)
        console.log(str2);
    }
}
console.log(pyramid(5))