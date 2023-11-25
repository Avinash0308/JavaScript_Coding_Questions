/*Problem Description:
Write a JavaScript function named findFirstNegative that finds and returns the first negative number in an array using the find() method.
Inputs:
An array of numbers.
Outputs:
A number representing the first negative number in the array or undefined if there are no negative numbers.
Hints:
The find() method returns the value of the first element in the array that satisfies the provided testing function.
Solution Approach:
Use the find() method and provide a callback that checks if the number is negative.*/
function findFirstNegative(numbers) {
  // Use the find() method with a callback function, the callback function checks if the number is negative and if a negative number is found, it is returned; otherwise, undefined is returned
  return numbers.find((number) => number < 0);
}

const array1 = [1, 2, -3, 4, -5, 6];
const firstNegative1 = findFirstNegative(array1);
console.log(firstNegative1); // Output: -3

const array2 = [1, 2, 3, 4, 5, 6];
const firstNegative2 = findFirstNegative(array2);
console.log(firstNegative2); // Output: undefined
