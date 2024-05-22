// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make,
//  model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
var diff_laptops = [
    { make: "HP", model: "1040 g3", year: "2020" },
    { make: "lenovo", model: "idea pad", year: "2012" },
    { make: "dell", model: "G series", year: "2018" }
];
console.log(diff_laptops);
var laptop1 = diff_laptops[0], laptop2 = diff_laptops[1]; // destructuring
console.log(laptop1);
console.log(laptop2);
