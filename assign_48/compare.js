//Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. 
// Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var prices1 = [1500, 2000, 2500, 5000];
var prices2 = [2300, 4000, 3500, 1000];
var combinePrices1 = __spreadArray(__spreadArray([], prices1, true), prices2, true).sort(function (a, b) { return a - b; }); // arrange in ascending order
var combinePrices2 = __spreadArray(__spreadArray([], prices1, true), prices2, true).sort(function (a, b) { return b - a; }); // arrange in descending order
console.log(combinePrices1);
console.log(combinePrices2);
// prices1.sort()
// prices2.sort()
// let combine = [...prices1,...prices2].sort() // arrange in ascending order
// console.log(combine)
