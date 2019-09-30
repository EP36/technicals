let arr = [
  [1, 5, 8, 11, 32],
  [1, 5, 7, 11, 12],
  [1, 54, 7, 12, 5]
];

function intersect(arrayOfArrays) {
  return arrayOfArrays.reduce((a, b) => a.filter((c) => b.includes(c)));
}

console.log(intersect(arr)) // -> 1, 5