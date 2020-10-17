// If Condition
var time = new Date().getHours();
if (time < 20) {
  console.log("Good Day!");
}

// If-Else
if (time < 20) {
  console.log("Good Day!");
}else{
	console.log("Good Night!");
}

// If-Else Ladder
if (time < 12) {
  console.log("Good Morning!");
}else if (time<16){
	console.log("Good Afternoon!");
}else if (time<19){
	console.log("Good Evening!");
}else{
	console.log("Good Night!");
}
