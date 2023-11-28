/*Problem Statement: Write a function to deeply compare two objects for equality.
Description: Given two objects, the function should return true if they are deeply equal and false otherwise.
Solution Approach: Recursively compare properties of both objects.*/

function deepEqual(obj1, obj2) {
    // Check if both arguments are objects
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return obj1 === obj2;
    }
    // Check if both objects are null
    if (obj1 === null && obj2 === null) {
      return true;
    }
    // Check if the number of properties is the same
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    // Recursively compare each property
    for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }
  const objA = { a: 1, b: { c: 2, d: [3, 4] } };
  const objB = { a: 1, b: { c: 2, d: [3, 4] } };
  const objC = { a: 1, b: { c: 2, d: [3, 5] } };
  
  console.log(deepEqual(objA, objB)); // Output: true
  console.log(deepEqual(objA, objC)); // Output: false
  