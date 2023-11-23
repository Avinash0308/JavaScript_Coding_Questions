/*Problem Description:
Write a JavaScript function named doubleValues that takes an array of numbers and returns a new array where each number is doubled using the map() method.
Inputs:
An array of numbers.
Outputs:
An array of numbers where each number is doubled.
Hints:
The map() method creates a new array with the results of calling a function for every array element.*/

function doubleValues(numbers) {
    // Use the map() method to create a new array with doubled values
    var doubledArray = numbers.map(function(number) {
      return number * 2;
    });
  
    return doubledArray;
  }
  
  // Example usage:
  var originalArray = [1, 2, 3, 4, 5];
  var doubledArray = doubleValues(originalArray);
  
  console.log("Original Array:", originalArray);
  console.log("Doubled Array:", doubledArray);
  