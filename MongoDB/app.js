
const mongoose = require('mongoose');

// Connection URL
const url = "mongodb://localhost:27017/fruitsDB";

mongoose.connect(url, { useUnifiedTopology: true ,useNewUrlParser: true });

// Fruits Schema
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// People Schema
const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number
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

// apple.save();
// person.save();

Fruit.insertMany([banana,mango,orange], function (err){
    if (err){
        console.log(err);
    } else{
        console.log("Successfully saved all the fruits!");
    }
});

async function readFruits(db) {

    const collection = db.collection('fruits');
    const result = await collection.find({}).toArray();
    console.log(result);
}

// run().catch(console.dir);