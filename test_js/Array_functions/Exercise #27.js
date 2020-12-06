const findNeedle = (arr) => {
    const needleCheck = arr.indexOf("needle")
    return `found the needle at position ${needleCheck}`
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))
// should return "found the needle at position 5"