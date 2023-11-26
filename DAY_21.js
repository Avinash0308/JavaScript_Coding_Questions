/*Problem Statement: Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.
Description: The function should take an array and an async function, applying the async function to each element in the array in sequence.
Solution Approach: Use async/await within a for...of loop.*/

async function asyncLoop(array, asyncFunction) {
  for (const element of array) {
    // Perform asynchronous operation on each element
    await asyncFunction(element);
  }
}

// Example usage:

// Asynchronous function to simulate an asynchronous operation
async function asyncOperation(item) {
  return new Promise((resolve) => {
    // Simulate some asynchronous operation, e.g., fetching data
    setTimeout(() => {
      console.log(`Processed: ${item}`);
      resolve();
    }, 1000); // Simulating a delay of 1 second
  });
}

// Array to iterate over
const myArray = [1, 2, 3, 4, 5];

// Using the asyncLoop function
async function runAsyncLoop() {
  console.log("Start processing elements asynchronously:");
  await asyncLoop(myArray, asyncOperation);
  console.log("All elements processed asynchronously.");
}

// Run the example
runAsyncLoop();
