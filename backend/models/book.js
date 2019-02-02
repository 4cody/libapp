const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema({
    title: String,
    author: String,
    genre: String,
    length: Number,
    available: Boolean
});

module.exports = mongoose.model('book', Book);