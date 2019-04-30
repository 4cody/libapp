const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    author: {
        type: String,
        required: true,
        lowercase: true
    },
    genre: {
        type: String,
        required: true,
        lowercase: true
    },
    desc: {
        type: String,
        required: true
    },
    pages: {
        type: Number
    },
    available: {
        type: Boolean,
        default: true
    }
});

module.exports = Book = mongoose.model('book', BookSchema);