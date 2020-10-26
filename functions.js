// Basic function
function myFunction() {
  return "Hello, world!";
}
var x = myFunction();
console.log(x);

// Parameterized Function
function prod(a,b){
	return a*b;
}

var x = prod(5,3);
console.log(x);

// Function Expression
const count = function(array) { 
  return array.length;
}

var x=[1,2,3];
console.log(count(x));