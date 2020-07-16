// Create a regular expression to check if string begins and ends with same vowel
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const pattern='^([aeiou])[a-z]*\\1$';
    var re=new RegExp(pattern);

    /*
     * Do not remove the return statement
     */
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}