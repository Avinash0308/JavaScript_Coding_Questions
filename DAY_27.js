/*Write a generator function range that takes two arguments, start and end, and yields all the numbers in that range.
Solution Approach:
Use the function* syntax for generator functions and the yield keyword.*/

function* range_generator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

// Example usage:
const startValue = 1;
const endValue = 5;

for (const num of range_generator(startValue, endValue)) {
    console.log(num);
}
