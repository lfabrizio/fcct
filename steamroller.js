// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
// I'm a steamroller, baby
// use Array.isArray method
    
    return arr.reduce(function(a, b){
        if(Array.isArray(b)){
            return steamrollArray(a.concat(b));
        } else {
            return a.concat(b);
        }
    }, [])} 
   
  // time elapsed 1:50 mins
  steamrollArray([1, [2], [3, [[4]]]]);