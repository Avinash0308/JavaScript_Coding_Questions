/*Write a JavaScript function to apply the Bubble Sort algorithm.
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]*/
const prompt = require("prompt-sync")({ sigint: true });
const n = parseInt(prompt("Enter the size of array:- "));
console.log("Input the array elements: ");
const arr = [];
for(let i = 0; i<n; i++){
    arr.push(parseInt(prompt("Element: ")));
}
console.log("Input Array: ");
console.log(arr);
for(let i = 0; i<n; i++){
    for(let j = 0; j<n-1; j++){
        if(arr[j] <= arr[j+1]){
            const cur = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = cur;
        }
    }
}
console.log("After sorting: ");
console.log(arr);