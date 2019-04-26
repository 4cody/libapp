const mongoose    = require("mongoose");
const express     = require("express");
const bodyParser  = require("body-parser");

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
            genre: req.body.genre
        })
            
        b.save()
            .then(doc => console.log(doc))
            .catch(err => console.error(err))
        res.json(req.body)
    })

// app.get('/books', (req, res) => {
//     Book.find({}).then(docs => res.json(docs))
// })

app.get('/books/:title', (req, res) => {
    Book.findOne({title: req.params.title})
        .then(doc => res.json(doc))
})

// app.post('/test', (req, res) => {
//     res.send('hello test workinng')
// })

// app.post('/add', (req, res) => {
//     let b = new Book({
//         title: req.body.title,
//         author: req.body.author,
//         genre: req.body.genre
//     }) 
//     b.save()
//         .then(doc => console.log(doc))
//         .catch(err => console.error(err))
//     res.json(req.body)
// });



// @desc Connect to db and start server
const PORT = process.env.PORT || 3030;

mongoose.connect(db.URI, { useNewUrlParser: true }, 
    (err) => {
      if(err) console.log(err) 
});

app.listen(PORT, () => console.log('working on port 3030'));