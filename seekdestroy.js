// seek and destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    // Remove all the values
    // could use shift or unshift?
    // arguments looks at all arrs
    // slice returns selected elemetns into new arr
    // .call method uses another method called on object
   let destroy = Array.prototype.slice.call(arguments);
   console.log(destroy)
    
    for(var i = 0;i < arr.length;i++){
        for(var j = 0; j < destroy.length; j++){
            if(arr[i] === destroy[j]) {
                delete arr[i];
                // console.log(destroy)
        }
    }
    }
    console.log(destroy);
    return destroy;
}
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);