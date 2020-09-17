var numbers = [1,2,3,4];

// Map
const doubles = numbers.map((num)=>{
	return num*2;
});

console.log("Map Result: "+ doubles);

// Reduce
const summation = numbers.reduce((accumulator,currentNumber)=>{
	return accumulator+currentNumber;
});

console.log("Reduce Result: "+ summation);

// Filter
const evens=numbers.filter((num)=>{
	return num%2==0;
});

console.log("Filter Result: "+evens);

// Find
const foundItem=numbers.find((num)=>{
	return num>2;
});

console.log("Find Result: "+foundItem);

// Find Index
const foundItemIndex=numbers.findIndex((num)=>{
	return num>2;
});

console.log("Find Index Result: "+foundItemIndex);