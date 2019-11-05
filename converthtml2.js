// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
// using replca method
function convertHTML(str) {
    // &colon;&rpar;
    
    str =  str.replace(/&/g, "&amp;");
    str = str.replace(/</g,"&lt");
    str = str.replace(/>/g, "&gt");    
    str = str.replace(/"/g, "&quot")
    str = str.replace(/abc/g, "&quot"); 
    
    return str;
    }
  