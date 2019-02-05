const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    length: Number,
    available: Boolean
});

module.exports = Book = mongoose.model('book', BookSchema);