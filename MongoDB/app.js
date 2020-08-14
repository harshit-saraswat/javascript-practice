
const mongoose = require('mongoose');

// Connection URL
const url = "mongodb://localhost:27017/fruitsDB";

mongoose.connect(url, { useUnifiedTopology: true ,useNewUrlParser: true });

// Fruits Schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "No name specified."]
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    review: String
});

// People Schema
const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", peopleSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "The red giant!"
});

const banana = new Fruit({
    name: "banana",
    rating: 6,
    review: "The yellow snake!"
});

const mango = new Fruit({
    name: "Mango",
    rating: 8,
    review: "The yellow god!"
});

const orange = new Fruit({
    name: "Orange",
    rating: 5,
    review: "The orange sour king!"
});

const person = new Person({
    name: "John",
    age: 27
});

const person2 = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit : mango
});
apple.save();
person2.save();

Fruit.insertMany([banana,mango,orange], function (err){
    if (err){
        console.log(err);
    } else{
        console.log("Successfully saved all the fruits!");
    }
});

Fruit.find(function(err,fruits){
   if (err){
       console.log(err);
   } else{
       mongoose.connection.close();
       fruits.forEach((fruit)=>{
        console.log(fruit.name);
       });
   }
});

Person.updateOne({name: "Jane"}, {favoriteFruit: banana}, function(err){
    if (err){
        console.log(err);
    }else{
        console.log("Update Successfuly!");
    }
});

Person.updateOne({name: "John"}, {favoriteFruit: apple}, function(err){
    if (err){
        console.log(err);
    }else{
        console.log("Update Successfuly!");
    }
});

Fruit.deleteMany({name:'Apple'},function(err){
    if (err){
        console.log(err);
    }else{
        console.log("Successfully deleted.");
    }
});