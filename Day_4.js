//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
const a = 5, b = 6, c = 7;
const s = (a+b+c)/2;
const ans = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(ans);