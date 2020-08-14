
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

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "The red giant!"
});

fruit.save();


async function readFruits(db) {

    const collection = db.collection('fruits');
    const result = await collection.find({}).toArray();
    console.log(result);
}

// run().catch(console.dir);