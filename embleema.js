const solution = (a) => {
  let b = [];
  // iterate through array a, add previous max with current element, push into array
  for (let i = 0;i < a.length; i++) {
    b.push([]);
    for (let j = 0; j < a[i].length; j++) {
      
      b[i].push[Math.max(a[i][j] + a[i-1][j], a[i][j-1])]
    }
  }
}

let test = 
  [[1, 2, 4, 1], 
  [1, 3, 1, 1], 
  [30, 1, 0, 1]];

  console.log(solution(test))