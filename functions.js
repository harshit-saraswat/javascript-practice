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

// Arrow Function
const absValue = (number) => {
  if (number < 0) {
    return -number;
  }
  return number;
}
console.log(absValue(-10));

// Generator Function
function* indexGenerator(){
  var index = 0;
  while(true) {
    yield index++;
  }
}
const g = indexGenerator();
console.log(g.next().value);
console.log(g.next().value);