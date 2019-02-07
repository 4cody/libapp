const mongoose    = require("mongoose");
const express     = require("express");
const bodyParser  = require("body-parser");

const db          = require('./config/db');

const Book        = require('./models/book');

const app         = express();

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const catalogRouter = require('./routes/catalog');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);


// ////////////////////////////////////

app.get('/catalog/:title', (req, res) => {
    let q = Book.where({ title: req.params.title });
    q.findOne(item => res.send(item))
    console.log("working route")
    console.log(req.params)
})

app.post('/add', (req, res) => {
    let b = new Book({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        length: req.body.length,
        available: req.body.available
    }) 
    b.save()
        .then(doc => console.log(doc))
        .catch(err => console.error(err))
    res.send(req.body)
});

// ///////////////////////////////////////

const PORT = process.env.PORT || 3030;

mongoose.connect(db.URI, { useNewUrlParser: true }, (err) => {
    if(err) console.log(err) 
    app.listen(PORT, () => console.log('working on port 3030'))
});
