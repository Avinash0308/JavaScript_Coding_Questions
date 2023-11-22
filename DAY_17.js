/*Problem Description:
Write a JavaScript function named filterOutOdd that uses the filter() method to filter out odd numbers from an array.
Inputs:
An array of numbers.
Outputs:
An array of numbers without odd numbers.
Hints:
Use the filter() method to create a new array with all elements that pass the test implemented by the provided function.
Solution Approach:
Use the filter() method and provide a callback that checks if the number is even.*/

const prompt = require("prompt-sync")({ sigint: true });

function filterOutOdd(numbers) {
  // Use the filter() method and provide a callback that checks if the number is even
  return numbers.filter(function (number) {
    return number % 2 === 0; // Check if the number is even
  });
}
const n = parseInt(prompt("Please Enter the size of Array:- "));
const numbersArray = [];
for(let i = 0; i<n; i++){
    numbersArray[i] = parseInt(prompt("Enter the value:- "));
}

console.log("Array Before Filtering:- ");
console.log(numbersArray);
const resultArray = filterOutOdd(numbersArray);

console.log(resultArray); // Output: [2, 4, 6, 8]
