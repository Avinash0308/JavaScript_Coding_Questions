function reverseNumber(num){
    let reversedNum = 0;
    while(num != 0){
        reversedNum = (reversedNum*10) + (num%10);
        num = Math.floor(num/10);
    }
    return reversedNum;
}

//Test case
const x = 23235
const reverseX = reverseNumber(x);
console.log(reverseX); // Output: 53232