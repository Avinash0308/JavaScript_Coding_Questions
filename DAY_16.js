/*Problem Description:
Write a JavaScript function named sumArray that takes an array of numbers and returns the sum of all the numbers in the array using the reduce() method.
Inputs:
An array of numbers.
Outputs:
A number representing the sum of the array.
Hints:
The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
Solution Approach:
Initialize the reduce() method with an initial accumulator value of 0. Then, for each value in the array, add it to the accumulator.*/
const prompt = require("prompt-sync")({ sigint: true });
function sumArray(numbers) {
  // Use the reduce() method to calculate the sum
  return numbers.reduce(function (accumulator, currentValue) {
    // Add the current value to the accumulator
    return accumulator + currentValue;
  }, 0); // Initialize the accumulator with a value of 0
}

const n = parseInt(prompt("Please Enter the size of Array:- "));
const numbersArray = [];
for(let i = 0; i<n; i++){
    numbersArray[i] = parseInt(prompt("Enter the value:- "));
}
const result = sumArray(numbersArray);
console.log(result); 
