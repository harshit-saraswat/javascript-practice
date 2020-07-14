// Let vs Const vs Var

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI=Math.PI;
    let r =readLine();
    // Print the area of the circle:
    var area=PI*Math.pow(r,2);
    console.log(area)
    // Print the perimeter of the circle:
    var perimeter=2*PI*r;
    console.log(perimeter);
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}