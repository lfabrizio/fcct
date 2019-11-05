// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).

function myReplace(str, before, after) {
    // check first letter case
    // use replace
    // use slice or splice
    // set a new variable
    var replacement = str.replace("before", "after");
    console.log(replacement);
    // for loop 
    for(var i = 0; i < str.length; i++){
        if(str.indexof(before) === after){
            return str.replacem
            }
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");