let sheep = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
];
const sheepTrue = sheep.filter((x) => (x === true))
const countSheeps = sheepTrue.length
console.log(countSheeps)