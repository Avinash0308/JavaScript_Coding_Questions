//Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
//Sample array : [1, 2, 3] and subset length is 2
//Expected output : [[2, 1], [3, 1], [3, 2]]
const prompt = require("prompt-sync")({ sigint: true });
function solve(s, n, ind, v, arr) {
  if (ind == n) {
    if (arr.length == s) {
      console.log(arr);
    }
  } else {
    solve(s, n, ind + 1, v, arr);
    arr.push(v[ind]);
    solve(s, n, ind + 1, v, arr);
    arr.pop();
  }
  return;
}
var v = [];
const n = parseInt(prompt("Enter the size of array :- "));
console.log("Please Input the values\n");
for (let i = 0; i < n; i++) {
  v.push(parseInt(prompt("Enter the number :- ")));
}
const s = parseInt(prompt("Enter the size of required subsets :- "));
var arr = [];
solve(s, n, 0, v, arr);
