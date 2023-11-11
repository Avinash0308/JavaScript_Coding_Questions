//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
const prompt = require("prompt-sync")({ sigint: true });
const a = parseInt(prompt("Enter the first number :- "));
const b = parseInt(prompt("Enter the second value :- "));
if(a == b){
    console.log(3*a);
}
else console.log(a+b);