const formRhombus = (n) => {
    for (let i = 1; i <= n; i++) {
        let s = "";
        for (let j = 1; j <= (2 * n - 1); j++) {
            if (j >= (n + 1 - i) && j <= (2 * n - i)) {
                s += "*";
            }
            else {
                s += " ";
            }
        }
        console.log(s);
    }

}
formRhombus(5);