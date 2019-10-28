// Check if a string (first argument, str) ends with the given target string (second argument, target).


function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    var ending = str.slice(str.length - target.length);
    console.log(ending);

    return ending === target;;
  }
  
  confirmEnding("Bastian", "n");