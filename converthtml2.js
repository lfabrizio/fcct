  // the backslash g will replace all globally 
// to solve this one I used the replace method
//replace method searches a string for a specified value, or reg expression, and returns a new string where the specified values are replaced.

function convertHTML(str) {
    // &colon;&rpar;
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&apos;");
    return str;
  }
  // successful -- time elapsed 52m
  convertHTML("Dolce & Gabbana");