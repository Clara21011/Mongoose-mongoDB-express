const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Inicializacion

const app = express();

//Settings
app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'hello',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

//Middlewares

app.use(express.urlencoded({extended: false}));

//Routes
app.get('/', (req, res) => {
    res.render('hello');
});

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Global variables

module.exports = app;