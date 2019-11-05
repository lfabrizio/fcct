// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
// &colon;&rpar;
var convert = str.split("");
console.log(convert);
for(var i = 0; i < convert.length;i++){
    switch (convert[i]) {
        case "&":
          convert[i] = "&amp";
          console.log(i)
          break;
        case "<":
          convert[i] = "&lt";
          break;
        case ">":
           convert[i] = "&gt";
          break;
        case '"':
           convert[i] = "&quot";
          break;
        case "abc":
            convert[i] ="&quot";
           break;     
}
}
    str = convert.join("");
        return str;
  }

  convertHTML("Dolce & Gabbana");