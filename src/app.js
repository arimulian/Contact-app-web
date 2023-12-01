const express = require('express');
require('dotenv').config();
require('./configs/db.config.js');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
const Contact = require('./routes/contacts.routes.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.use(session({
     secret: 'secret',
     resave: false,
     saveUninitialized: true,
     cookie: { maxAge: 60000 }
}));
app.use(flash());
app.use(expressLayouts);
app.use(express.json());

app.get('/', (req, res) => {
     res.render('index', { title: 'Home Page', layout: 'layouts/main-layout.ejs' });
});

app.use('/contact', Contact);


app.listen(process.env.PORT, () => {
     console.log(`Contact App | listening on http://localhost:${process.env.PORT}`);
});