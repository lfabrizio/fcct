// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

function sumPrimes(num) {
    // create an empty array 
var arr = [];
// nested for loop
for(var i = 2; i <= num; i++){
    for(var j = 2; j <= i; j++){
        if(i === j){
            arr.push(i);
            console.log(arr)
        }
        if ( i%j === 0){
            break;
        
        }
    }
   
}
    console.log(arr.reduce(function(a, b){return a+b}));
    
  }
  
  sumPrimes(10);
  