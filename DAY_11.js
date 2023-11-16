/*Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno */
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

// Function to list properties of an object
function listProperties(obj) {
  // Get all the property names
  var propertyValues = Object.values(obj);

  // Print the property names separated by commas
  console.log(propertyValues.join(","));
}

// Call the function with the sample object
listProperties(student);
