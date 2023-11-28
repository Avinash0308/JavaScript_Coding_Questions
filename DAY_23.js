/*Problem : Closure Challenge
Description:
Write a function counter that returns a new function on each invocation. The returned function, when called, should increment the counter value and return it.
Solution Approach:
Utilize closure to maintain the state of the counter*/
function counter() {
  let count = 0;

  // The inner function has access to the outer function's variables due to closure
  return function () {
    count++;
    return count;
  };
}

// Example usage:
const incrementCounter = counter();

console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2
console.log(incrementCounter()); // Output: 3
