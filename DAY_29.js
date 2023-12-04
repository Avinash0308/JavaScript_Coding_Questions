/*Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise resolves or reject if none resolve within the given timeout.
Solution Approach:
Use Promise.race and a timeout promise.*/

function raceWithTimeout(promises, timeout) {
  // Create a promise that rejects after the specified timeout
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout"));
    }, timeout);
  });

  // Use Promise.race to race the original promises with the timeout promise
  return Promise.race([...promises, timeoutPromise]);
}

// Example usage:
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2"), 1500)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3"), 2000)
);

raceWithTimeout([promise1, promise2, promise3], 2700)
  .then((result) => console.log("Resolved:", result))
  .catch((error) => console.error("Rejected:", error.message));
