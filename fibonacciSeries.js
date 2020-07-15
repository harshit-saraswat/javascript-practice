// Write function to print fibonacci series of n elements
function fibonacci(n){
	var a=0;
	var b=1;
	var c;
	console.log(a);
	console.log(b);
	for(var i=2;i<n;i++){
		c=a+b;
		console.log(c);
		a=b;
		b=c;
	}
}

fibonacci(5);