const countLetters = function (string) {
    let arr = string.split('');
    let countUnique = arr.reduce((obj, b) => {
        obj[b] = ++obj[b] || 1;
        return obj;
    }, {});
    return countUnique

};


console.log(countLetters("abbcccddddeeeee"));
 // => {a:1, b:2, c:3, d:4, e:5}