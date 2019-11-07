// // Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
function sumFibs(num) {
// maybe a for loop and if statement?
// modulo to see if num is odd
var n1 = 0;
var n2 = 1;
var result = 0;
while(n2 <= num){
    if(n2 % 2 !== 0){
        result += n2;
    }
    n2 += n1;
    n1 = n2 - n1;
}
return result; 
    }

// time elapsed. full time
    return num;
  
  
  sumFibs(4);