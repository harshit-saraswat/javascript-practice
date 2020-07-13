// Challenge 1: Calculate BMI based on weight and height using function
function calculateBMI(weight,height){
	var bmi=weight/Math.pow(height, 2);
	return bmi;
}
var bmi=calculateBMI(65,1.8);
console.log("Your BMI is "+bmi+" kg/squared meter");

// Challenge 2: Calculate rounded BMI based on weight and height using function
function calculateBMI(weight,height){
	var bmi=weight/Math.pow(height, 2);
	return Math.round(bmi);
}
var bmi=calculateBMI(65,1.8);
console.log("Your BMI is "+bmi+" kg/squared meter");