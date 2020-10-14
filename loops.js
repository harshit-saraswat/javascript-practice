data=['a','b','c','d'];

// For Loop
for (var i = 0; i < data.length; i++) {
  console.log(data[i]);
}

// ForEach Loop
data.forEach(val=>{
	console.log(val);
});

// For In Loop
var person = {fname:"John", lname:"Doe", age:25};
var i;
for (i in person) {
  console.log(person[i]);
}

// For of Loop
for (i of data) {
  console.log(i);
}

// While Loop
var i=0;
while (i < data.length) {
  console.log(data[i]);
  i++;
}

// Do While Loop
do {
  console.log(data[i]);
  i++;
}
while (i < data.length);