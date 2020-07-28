const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillains.random();

console.log("Super Hero Name: "+mySuperHeroName);
console.log("Super Villain Name: "+mySuperVillainName);