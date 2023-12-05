/*Implement a throttle function that ensures a given function is not called more than once in a specified time interval.
Solution Approach:
Use a timestamp to track the last invocation time and prevent calling the function if it's within the throttle interval.*/

function throttle(func, interval) {
  let lastInvocationTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastInvocationTime >= interval) {
      // If enough time has passed, call the function and update the last invocation time
      func.apply(this, args);
      lastInvocationTime = currentTime;
    } else {
      // If not enough time has passed, do nothing
      console.log("Throttled: Function not called within the interval.");
    }
  };
}

// Example usage:
function exampleFunction() {
  console.log("Function called!");
}

// Throttle exampleFunction to be called at most once every 2000 milliseconds (2 seconds)
const throttledFunction = throttle(exampleFunction, 2000);

// Call the throttled function multiple times
throttledFunction(); // This will print "Function called!"
throttledFunction(); // This will print "Throttled: Function not called within the interval."
