const mongoose = require("mongoose");
const { DB_URL, DB_CONFIG } = require("../db");

const Author = require("../models/Author.model");

const authorsArray = [
    {
        first_name : "Nina",
        last_name : "Brochmann",
    },
    {
        first_name : "Ellen",
        last_name : "Støkken Dahl",
    },
    
];

const authorDocuments = authorsArray.map((author) => new Author(author));
//TODO: erase console log
mongoose
    .connect(DB_URL, DB_CONFIG)
    .then(async () => {
        console.log("Executing seed Author");

        const allAuthors = await Author.find();

        if (allAuthors.length) {
            await Author.collection.drop();
            console.log("Author collection dropped");
        }
    })
    .catch((error) => {
        console.log("Error searching db: ", error);
    })
    .then(async () => {
        await Author.insertMany(authorDocuments);
        console.log("seed executed");
    })
    .catch((error) => {
        console.log("Error inserting authors: ", error);
    })
    .finally(() => mongoose.disconnect());