function rectangle(n) {
    for (let i = 1; i <= n; i++) {
        let str2 = ' *'.repeat(n)
        console.log(str2);
    }
}
console.log(rectangle(3))