const Author = require('../models/Author');

exports.author_name = (req, res) => {
    Author.findOne({name: req.params.name})
        .then(doc => res.json(doc))
}