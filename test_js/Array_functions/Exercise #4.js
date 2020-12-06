function capitalizeNames(arr) {
    let toLowerCase = arr.toString(',').toLowerCase().split(',');
    return toLowerCase.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
   // ["John", "Jacob", "Jingleheimer", "Schmidt"]