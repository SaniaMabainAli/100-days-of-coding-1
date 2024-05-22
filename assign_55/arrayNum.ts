// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is 
// twice its original value.

let numbers: number [] = [1,2,3,4,5]

let new_numbers = numbers.map (number => number * 2) //get the new array from existing calling array. we can perform any operation.

console.log(numbers) // array of numbers
console.log(new_numbers) // array of twice the numbers
