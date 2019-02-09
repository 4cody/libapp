const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    born: {
        type: String
    },
    died: {
        type: String
    },
    books: {
        type: Array
    }

});

module.exports = Author = mongoose.model('Author', AuthorSchema);