// Import emojipedia array and print only an array with meanings truncated to 100 characters using mo,filter,reduce fundamentals.

import emojipedia from "./emojipedia";

const meanings = emojipedia.map((emojiData)=>{
	return emojiData.meaning.substring(0,100);
});

console.log(meanings);