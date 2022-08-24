function palindrome(str) {
    //Regex to clear all white spaces and underscores
    //Converts string to Lowercase
    let newString = str.replace(/\W+|_/g, "").toLowerCase();
    //splits letters into an array, reverses the array and joins the letters together again
    let reversedString = newString.split("").reverse().join("");
    if (newString != reversedString) {
        return false;
    }   
    return true;
}
console.log(palindrome ("race car"));