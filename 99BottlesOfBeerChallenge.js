// Write song lyrics for 99 bottles of beer using for loop and conditional statements
function beerBottleSong(){
	var beerCount=99;
	for(var i=99;i>0;i--){
		console.log(beerCount+" bottles of beer on the wall, "+beerCount+" bottles of beer.");
		beerCount--;
		if(beerCount===1){
			console.log("Take one down and pass it around, "+beerCount+" bottle of beer on the wall.");
		}else if(beerCount===0){
			console.log("Take one down and pass it around, no more bottles of beer on the wall.");
		}else{
    		console.log("Take one down and pass it around, "+beerCount+" bottles of beer on the wall.");
		}
		
		console.log("\n");
	}
	console.log("No more bottles of beer on the wall, no more bottles of beer.");
	console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}

beerBottleSong();