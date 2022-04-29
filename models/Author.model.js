const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema (
    {
        first_name : { type: String, required: true },
        last_name : { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;