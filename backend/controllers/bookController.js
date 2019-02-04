const Book = require('../models/book');

exports.index = (req, res) => {
    res.send('Not implemented: Site Home Page')
};

exports.book_list = (req, res) => {
    res.send('Not implemented: Book list')
};

exports.book_summary = (req, res) => {
    res.send('Not implemented: Book summary' + req.params.id)
};

exports.book_create_get = (req, res) => {
    res.send('Not implemented: Book create GET')
};

exports.book_create_post = (req, res) => {
    res.send('Not implemented: book create POST')
};

exports.book_delete_get = (req, res) => {
    res.send('Not implemented: Book delete GET')
};

exports.book_delete_post = (req, res) => {
    res.send('Not implemented: book delete POST')
};

exports.book_update_get = (req, res) => {
    res.send('Not implemented: book update GET')
};

exports.book_update_post = (req, res) => {
    res.send('Not implemented: Book update POST')
};

