// algorithmic challenege 
function largestOfFour(arr) {
    // You can do this!
    var results = [];
    for(var i = 0; i < arr.length;i++){
      var largest = arr[i].length;
      for(var j = 0; j < arr[i].length;j++){
        if(arr[i][j] > largest){
          largest = arr[i][j];
          console.log(largest)
        }
      }
      results[i] = largest;
    }
    return results
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
