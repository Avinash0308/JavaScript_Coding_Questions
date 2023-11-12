//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
function check(a , b){
    if(a == 50 ||  b == 50 || a+b == 50) return true;
    else return false;
}
const prompt = require("prompt-sync")({ sigint: true });
const a = parseInt(prompt("Enter the first number :- "));
const b = parseInt(prompt("Enter the second value :- "));
console.log(check(a,b));
