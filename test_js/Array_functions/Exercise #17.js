function fiveCharactersOrFewerOnly(arr) {
    let filteredItems = arr.filter((x) => x.length <= 5)
    return filteredItems.sort((a, b) => a.length - b.length)
}

console.log(
    fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
); // ["by", "dog", "wolf", "eaten"]