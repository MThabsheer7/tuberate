const { handlebars } = require('consolidate');
const express = require('express');
var exphbs = require('express-handlebars');

var hbs = exphbs.create({
    defaultLayout: 'main',
})

const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', { msg: 'Handlebars are cool' });
})

app.listen(3000, () => {
    console.log('App listening on port 3000');
})

