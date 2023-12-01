/*Write a function calculateTotal that takes an array of numbers, filters out the even numbers, squares the remaining numbers, and then calculates their sum.
Solution Approach:
Combine map, filter, and reduce array methods.*/

function calculateTotal(numbers) {
  // Use filter to exclude even numbers
  const oddNumbers = numbers.filter((number) => number % 2 !== 0);

  // Use map to square the remaining numbers
  const squaredNumbers = oddNumbers.map((number) => number * number);

  // Use reduce to calculate the sum
  const total = squaredNumbers.reduce((acc, curr) => acc + curr, 0);

  return total;
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = calculateTotal(numbersArray);
console.log(result); // Output: 165
