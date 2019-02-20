const Author = require('../models/Author');

// Get all authors
exports.author_list = (req, res) => {
    Author.find({})
        .then(docs => res.json(docs))
        .catch(err => console.log(err))
};

// Get one author by name
exports.author_name = (req, res) => {
    Author.findOne({name: req.params.name})
        .populate('title')
        .then(doc => res.json(doc))
        .catch(err => console.log(err))
};

// Add one author
exports.author_add = (req, res) => {
    let a = new Author({
                name: req.body.name,
                born: req.body.born,
                died: req.body.died,
                books: req.body.books
    }) 
            a.save()
                .then(doc => console.log(doc))
                .catch(err => console.error(err))
            res.json(req.body)
};