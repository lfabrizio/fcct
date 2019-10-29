// Ti = 48 mins
// Translate the provided string to pig latin. Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// If a word does not contain a vowel, just add "ay" to the end.
// Input strings are guaranteed to be English words in all lowercase.
// set vowels
// use charAt method which will return the character at the specified index
function translatePigLatin(str) {
        let vowels = ["a", "e", "i", "o", "u"];
// for loop to check vowels
    for(var i = 0; i < str.length; i++){
        let vowel = str.charAt(i);
        if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
            break;
          // break the loop if vowel is found
        }
    }
        let strAfterVowel = str.slice(i);
        let consonantStr = strAfterVowel + str.slice(0, i) + "ay";
        // console.log(consonantStr)
        // console.log(strAfterVowel)
    if(vowels.includes(str[0])){
        str = str + "way";
    } else {
        str = consonantStr;
    } 
        return str;
}

 translatePigLatin("consonant");