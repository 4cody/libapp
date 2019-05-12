const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    born: {
        type: String
    },
    died: {
        type: String
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Books'
    }]
});

module.exports = Author = mongoose.model('Author', AuthorSchema);