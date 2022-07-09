function arrDiff(a, b) {
  let diff = a.filter(e => b.indexOf(e) === -1);
return diff;
}


console.log(arrDiff([1,2], [1])) // =>  [2]
console.log(arrDiff([1,2,2], [1])) // => [2,2]
console.log(arrDiff([1,2,2], [])) // => [1,2,2]
console.log(arrDiff([1,2,3], [1,2])) // => [3]
console.log(arrDiff([1,2,2], [2])) // => [1]
console.log(arrDiff([], [2])) // => []