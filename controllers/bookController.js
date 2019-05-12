const Book = require('../models/book');

// Get all books
exports.index = (req, res) => {
    Book.find({})
        .then(items => res.send(items))
        .catch(err => console.log(err))
};

// Get one book by title
exports.book_title = (req, res) => {
    Book.findOne({title: req.params.title})
        .then(doc => res.json(doc))
        .catch(err => console.log(err))
};