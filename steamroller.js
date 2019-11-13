// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
// I'm a steamroller, baby
    var arrayone = arr.length;
    console.log(arrayone)
    for(var i = 0; i < arr;i++){
        if(Array.isArray(arrayone[i])){
           for(var j = 0; j < arr[i].length;j++){
               arr.push(arr[i][j]);
               console.log(arrayone)
           }
        }
    }
    return arr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);