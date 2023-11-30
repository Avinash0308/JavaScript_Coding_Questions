/*Implement a debounce function that takes a function and a delay as arguments. The returned function should ensure that the original function is not called more than once in the specified delay.
Solution Approach:
Use a timer and clear it on each invocation to delay the function execution.*/

function debounce(func, delay) {
  let timer;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timer);

    timer = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}

// Example function to be debounced
function myFunction() {
  console.log("Debounced function called!");
}

// Debounce the function with a delay of 500 milliseconds
const debouncedFunction = debounce(myFunction, 10000);

// Call the debounced function multiple times in quick succession
debouncedFunction(); // Will not trigger immediately
debouncedFunction(); // Will not trigger immediately
debouncedFunction(); // Will not trigger immediately

// After 500 milliseconds of inactivity, the debounced function will be called
// Only one call will be made despite multiple invocations within the delay period
