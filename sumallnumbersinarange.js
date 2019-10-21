// T23
// 1. Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
function sumAll(arr) {
// variables for largest number and samllest number
// use Math max and min methods to take largest and smallest and then use spread operator 

let bigNumber = Math.max(...arr); 
let smallNumber = Math.min(...arr);

let total = smallNumber + bigNumber;
// console.log(total);
// for loop iterate through the numbers

for(let i = smallNumber +1; i < bigNumber; i++){
    // use += operator to add numbers
    total+= i;
}
 console.log(total);
}
sumAll([1, 4]);