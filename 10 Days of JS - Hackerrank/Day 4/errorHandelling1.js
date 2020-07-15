
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        let splittedList=s.split("");
        let reversedList=splittedList.reverse();
        let reversedString=reversedList.join("");
        console.log(reversedString);
    }
    catch (e){
        console.log(e.message);
        console.log(s);
    }
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}