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

// Switch Case
var day="Monday";

switch(day){
	case "Monday":
		console.log("Back to work!");
		break;
	case "Sunday":
		console.log("Yay, holiday!");
		break;
	default:
		console.log("When is sunday?");
}
