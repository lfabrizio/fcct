// T-
// 2. Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
    // var to store empty array 
 var newArr = [];
// use indexof method
 // two for loops to iterate through both arrays
for(var i =0;i < arr1.length;i++){
    if(arr2.indexOf(arr1[i])===-1){
        newArr.push(arr1[i]);
    }
}
// now check second array for matching elements
for(var j = 0; j < arr2.length;j++){
    if(arr1.indexOf(arr2[j])===-1) {
        newArr.push(arr2[j])
}
    }
 // then return new array 
 return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);