// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
// start w regex g will make it globally 
var spinal = str.split(/\s|_|(?=[A-Z])/);
// console.log(spinal)
var tap = spinal.join("-");
// console.log(tap);
// .toLowerCase();
var spinaltap = tap.toLowerCase();
// console.log(spinaltap);
return spinaltap;
  }
  // time elapsed 27:26
  spinalCase('This Is Spinal Tap');
  