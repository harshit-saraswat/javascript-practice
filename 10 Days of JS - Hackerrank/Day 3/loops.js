// Print vowels followed by consonants of a given string s
function vowelsAndConsonants(s) {
    let vowels=['a','e','i','o','u'];
    for(var i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            console.log(s[i]);
        }
    }

    for(var i=0;i<s.length;i++){
        if(!vowels.includes(s[i])){
            console.log(s[i]);
        }
    }
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}