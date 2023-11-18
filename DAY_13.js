/*Problem Statement: Implement a memoization function.
Description: Write a function that takes a function as its argument and returns a memoized version of the function.
Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.*/

function memoize(func) {
    const cache = {};
  
    return function (...args) {
      const key = JSON.stringify(args);
  
      if (cache[key]) {
        console.log('Fetching result from cache for', args);
        return cache[key];
      } else {
        console.log('Calculating result for', args);
        const result = func(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  function add(a, b) {
    return a + b;
  }
  const memoizedAdd = memoize(add);
  
  console.log(memoizedAdd(2, 3));
  console.log(memoizedAdd(2, 3));
  console.log(memoizedAdd(4, 5));
  console.log(memoizedAdd(4, 5));
  