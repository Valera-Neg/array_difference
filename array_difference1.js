function arrDiff(a, b) {
 
  return a.filter(e => !b.includes(e));
}


console.log(arrDiff([1,2], [1])) // =>  [2]
console.log(arrDiff([1,2,2], [1])) // => [2,2]
console.log(arrDiff([1,2,2], [])) // => [1,2,2]
console.log(arrDiff([1,2,3], [1,2])) // => [3]
console.log(arrDiff([1,2,2], [2])) // => [1]
console.log(arrDiff([], [2])) // => []