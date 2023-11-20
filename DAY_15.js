/*Create a string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed
Test Data :
console.log(string_chop('Scaler'));
console.log(string_chop('Scaler',2));
["Scaler"]
['Sc' , 'al' ,'er']*/

const prompt = require("prompt-sync")({ sigint: true });

function solve(str,a){
    if(a == undefined) a = str.length;
    let s = [];
    for(let cur = 0; cur<str.length; cur += a){
        let temp = str.slice(cur,cur+a);
        s.push(temp);
    }
    console.log(s);
}

const str = prompt("Please provide the string to be chopped:- ");
const n = parseInt(prompt("Please enter the chop size:- "));
solve(str,n);
solve(str);