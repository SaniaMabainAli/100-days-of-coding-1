//Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. 
// Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let prices1: number [] = [1500, 2000, 2500, 5000]
let prices2: number [] = [2300, 4000, 3500, 1000]

let combinePrices1 = [...prices1,...prices2].sort(function(a,b){ return a - b}) // arrange in ascending order
let combinePrices2 = [...prices1,...prices2].sort(function(a,b){ return b - a}) // arrange in descending order

console.log(combinePrices1)
console.log(combinePrices2)


// prices1.sort()
// prices2.sort()
// let combine = [...prices1,...prices2].sort() // arrange in ascending order
// console.log(combine)


