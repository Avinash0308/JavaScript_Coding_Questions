//Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.
function check_range(num1,num2){
    if((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) return true;
    else return false;
}
const x = 51;
const y = 100;
console.log(check_range(x,y)); // returns true as x is in the given range.
const xx = 100;
console.log(check_range(xx,y)); // returns false as none of the value is in given range.