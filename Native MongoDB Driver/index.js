const { MongoClient } = require("mongodb");
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "fruitsDB"

const client = new MongoClient(url, { useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("Connected")
        // use fruits db
        const database = client.db(dbName);

        // Insert Fruits
        await insertFruits(database);
        await readFruits(database);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function insertFruits(db) {

    const collection = db.collection('fruits');
    const result = await collection.insertMany([
        {
            name: "Apple",
            color: "red",
            score: 8
        },
        {
            name: "Orange",
            color: "orange",
            score: 7
        },
        {
            name: "Mango",
            color: "yellow",
            score: 9
        }]
    );
    console.log(result);
}

async function readFruits(db) {

    const collection = db.collection('fruits');
    const result = await collection.find({}).toArray();
    console.log(result);
}

run().catch(console.dir);