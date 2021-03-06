const mongoose    = require("mongoose");
const express     = require("express");
const bodyParser  = require("body-parser");
const path = require('path');

const db          = require('./config/db');

const Book        = require('./models/book');

const app         = express();

// const indexRouter = require('./routes/index');
// const authorRouter = require('./routes/authors');
// const bookRouter = require('./routes/books');

// Express Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routing
// app.use('/authors', authorRouter);
// app.use('/books', bookRouter);

app.route('/books')
    .get((req, res) => {
        Book.find({}).then(docs => res.json(docs))
    })
    .post((req, res) => {
        let b = new Book({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            desc: req.body.desc
        })
            
        b.save()
            .then(doc => console.log(doc))
            .catch(err => console.error(err))
        res.json(req.body)
    })

app.get('/books/:id', (req, res) => {
    Book.findOne({id: req.params.id})
        .then(doc => res.json(doc))
})

// server static assets if in production

if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use('/', express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// Connect to db and start server
const PORT = process.env.PORT || 3030;

mongoose.connect(db.URI, { useNewUrlParser: true }, 
    (err) => {
      if(err) console.log(err) 
});

app.listen(PORT, () => console.log('working on port 3030'));